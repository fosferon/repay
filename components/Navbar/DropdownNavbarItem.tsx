import { Ripple } from "primereact/ripple";
import { useRef } from "react";
import { StyleClass } from "primereact/styleclass";
import type { DropdownNavbarItemProps } from "types/navbar";
import { NavbarItem } from "./NavbarItem";

export const DropdownNavbarItem = ({
  icon,
  label,
  action,
  items,
}: DropdownNavbarItemProps) => {
  const btnRef = useRef(null);

  return (
    <li className="lg:relative">
      <StyleClass
        nodeRef={btnRef}
        selector="@next"
        enterClassName="hidden"
        enterActiveClassName="scalein"
        leaveToClassName="hidden"
        leaveActiveClassName="fadeout"
        hideOnOutsideClick
      >
        <a
          ref={btnRef}
          className="p-ripple align-items-center border-round transition-duration-150 flex cursor-pointer p-3 font-medium text-gray-400 transition-colors hover:bg-gray-800 hover:text-white"
        >
          <i className={`${icon} mr-2`}></i>
          <span>{label}</span>
          <i className="pi pi-angle-down ml-auto lg:ml-3"></i>
          <Ripple />
        </a>
      </StyleClass>
      <ul className="border-round shadow-0 lg:shadow-2 lg:w-15rem m-0 hidden w-full origin-top cursor-pointer list-none bg-gray-900 py-0 pl-3 lg:absolute lg:px-0 lg:py-0">
        {items &&
          items.map((item, index) => <NavbarItem key={index} {...item} />)}
      </ul>
    </li>
  );
};
