import type { NavbarItemProps } from "types/navbar";

import { DropdownNavbarItem } from "./DropdownNavbarItem";
import { SimpleNavbarItem } from "./SimpleNavbarItem";

export const NavbarItem = (props: NavbarItemProps) => {
  if ("items" in props) {
    return <DropdownNavbarItem {...props} />;
  } else {
    return <SimpleNavbarItem {...props} />;
  }
};
