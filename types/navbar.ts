export type SimpleNavbarItemProps = {
  label: string;
  icon: string;
  href?: string;
  action?: () => any;
};

export type DropdownNavbarItemProps = SimpleNavbarItemProps & {
  items: (SimpleNavbarItemProps | DropdownNavbarItemProps)[] | null;
};

export type NavbarItemProps = SimpleNavbarItemProps | DropdownNavbarItemProps;
