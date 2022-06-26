import { Text, Link, Icon, LinkProps } from "@chakra-ui/react";
import { ElementType } from "react";
interface NavSectionProps extends LinkProps{
  icon: ElementType;
  children: string;
}
export function NavLink({ icon, children, ...rest}: NavSectionProps) {
  return (
    <Link display="flex" align="center" {...rest}>
      <Icon as={icon} fontSize="20"/>
      <Text ml="4" fontWeight="medium">{children}</Text>
    </Link>
  );
}
