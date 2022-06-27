import { createContext, ReactNode, useEffect, useState } from "react";
import nookies, { parseCookies } from "nookies";
import { useRouter } from "next/router";
import { api } from "../services/api";

type SignInCredentials = {
  email: string;
  password: string;
};

type User = {
  name: string;
  email: string;
};

type AuthContextData = {
  singIn(credentials: SignInCredentials): Promise<void>;
  user: User | null;
  isAuthenticated: boolean;
};

type AuthProviderProps = {
  children: ReactNode;
};

export const AuthContext = createContext({} as AuthContextData);

export function AuthProvider({ children }: AuthProviderProps) {
  const [user, setUser] = useState<User>();
  const isAuthenticated = !!user;
  const router = useRouter();

  useEffect(() => {
    const { "contacts.token": token } = parseCookies();

    if (token) {
      api
        .post("/me", {})
        .then((response) => {
          setUser({
            name: response.data.name,
            email: response.data.email,
          });
        })
        .catch(() => {
          setUser(null);
        });
    }
  }, []);

  async function singIn({ email, password }: SignInCredentials) {
    const params = new URLSearchParams();
    params.append("email", email);
    params.append("password", password);

    try {
      const response = await api.post("/login", params);

      const { token } = response.data;

      nookies.set(undefined, "contacts.token", token, {
        maxAge: 60 * 60 * 24 * 30, //30 days
        path: "/",
      });

      api.defaults.headers["Authorization"] = `Bearer ${token}`;

      router.push("/contacts");
    } catch (err) {
      console.log(err);
    }
  }

  return (
    <AuthContext.Provider value={{ singIn, isAuthenticated, user }}>
      {children}
    </AuthContext.Provider>
  );
}
