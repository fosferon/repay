/**
 * Represents the navigation bar component.
 *
 * @component
 * @example
 * ```tsx
 * <Navbar />
 * ```
 */
import { NavbarHeader } from "./NavbarHeader";
import { NavbarItem } from "./NavbarItem";
import type { NavbarItemProps } from "types/navbar";

export const Navbar = ({
  items,
  language,
}: {
  items: NavbarItemProps[];
  language?: string;
}) => {
  return (
    <div className="relative bg-gray-900 px-6">
      <NavbarHeader language={language} />
      <div
        id="navbar-8"
        className="shadow-2 top-100 z-1 shadow-2 absolute left-0 hidden w-full bg-gray-900 px-6 py-2 lg:static lg:block lg:w-auto lg:px-0"
      >
        <ul className="lg:align-items-center flex-column m-0 flex select-none list-none p-0 lg:flex-row">
          {items.map((item, index) => (
            <NavbarItem key={index} {...item} />
          ))}
        </ul>
      </div>
    </div>
  );
};
