import { Ripple } from "primereact/ripple";
import type { SimpleNavbarItemProps } from "types/navbar";

export const SimpleNavbarItem = ({
  icon,
  label,
  action,
  href,
}: SimpleNavbarItemProps) => {
  return (
    <li>
      <a
        href={href}
        className="p-ripple align-items-center border-round transition-duration-150 flex cursor-pointer p-3 font-medium text-gray-400 transition-colors hover:bg-gray-800 hover:text-white"
      >
        <i className={`${icon} mr-2`}></i>
        <span>{label}</span>
        <Ripple />
      </a>
    </li>
  );
};
