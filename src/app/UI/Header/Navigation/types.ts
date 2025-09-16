export type NavItem = {
  label: string;
  href: string;
  submenu?: { label: string; href: string }[];
};
