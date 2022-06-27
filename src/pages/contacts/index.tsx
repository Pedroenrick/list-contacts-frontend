import { Flex, Box, SimpleGrid, useBreakpointValue } from "@chakra-ui/react";
import { useEffect, useState } from "react";

import { Header } from "../../components/Header";
import { Sidebar } from "../../components/Sidebar";
import { Card } from "./../../components/Card/index";
import { api } from "./../../services/api";

export default function Contacts() {
  const [contacts, setContacts] = useState([]);

  useEffect(() => {
    api
      .get("/contacts", {
        params: {
          params_phones: "contact_id,ddd,number",
          params_addresses:
            "id,contact_id,street,number,complement,neighborhood,city",
          params_categories: "id,name",
        },
      })
      .then((response) => {
        setContacts(response.data);
      })
      .catch(() => {});
  }, []);

  console.log(contacts);
  return (
    <Box>
      <Header />
      <Flex w="100%" my="6" mw={1480} mx="auto" p={["4", "4", "6"]}>
        <Sidebar />

        <Box
          flex="1"
          borderRadius={8}
          bg="gray.800"
          p={["4", "4", "6"]}
          mx="auto"
        >
          <SimpleGrid flex="1" gap="4" minChildWidth="380px" align="flex-start">
            {contacts.map((contact) => (
              <Card
                key={contact.id}
                name={contact.name}
                email={contact.email}
                image={contact.photo}
                phone={
                  contact.phones != ""
                    ? contact.phones[0].ddd + " " + contact.phones[0].number
                    : ""
                }
              />
            ))}
          </SimpleGrid>
        </Box>
      </Flex>
    </Box>
  );
}
