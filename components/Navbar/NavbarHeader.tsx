import { useRef } from "react";
import { Ripple } from "primereact/ripple";
import { StyleClass } from "primereact/styleclass";
import { Badge } from "primereact/badge";

export const NavbarHeader = ({
  language,
}: {
  language: string | undefined;
}) => {
  const btnRefMain = useRef(null);
  const btnRefSub = useRef(null);

  return (
    <div
      className="align-items-center justify-content-between border-bottom-none lg:border-bottom-1 flex border-gray-800 py-3 lg:static lg:py-2"
      style={{ minHeight: "81px" }}
    >
      <a href={`/${language}`} title="DALIKO Homepage">
        <img
          src="/assets/logos/logo_337px_gr.png"
          alt="Image"
          height="40"
          className="mr-0 lg:mr-6"
        />
      </a>
      <div className="align-items-center flex">
        <StyleClass
          nodeRef={btnRefMain}
          selector="#navbar-sub-8"
          enterClassName="hidden"
          leaveToClassName="hidden"
          hideOnOutsideClick
        >
          <a
            ref={btnRefMain}
            className="p-ripple mr-5 block cursor-pointer text-gray-400 lg:hidden"
          >
            <i className="pi pi-ellipsis-v text-2xl"></i>
            <Ripple />
          </a>
        </StyleClass>
        <StyleClass
          nodeRef={btnRefSub}
          selector="#navbar-8"
          enterClassName="hidden"
          leaveToClassName="hidden"
          hideOnOutsideClick
        >
          <a
            ref={btnRefSub}
            className="p-ripple block cursor-pointer text-gray-400 lg:hidden"
          >
            <i className="pi pi-bars text-4xl"></i>
            <Ripple />
          </a>
        </StyleClass>
      </div>
      <div
        id="navbar-sub-8"
        className="top-100 z-1 shadow-2 absolute left-0 hidden w-full bg-gray-900 lg:static lg:block lg:w-auto lg:shadow-none"
      >
        <ul className="lg:align-items-center flex-column border-top-1 lg:border-top-none m-0 flex select-none list-none border-gray-800 p-0  lg:flex-row">
          <li>
            <a className="p-ripple align-items-center border-round transition-duration-150 flex cursor-pointer p-3 px-6 font-medium text-gray-400 transition-colors hover:bg-gray-800 hover:text-white lg:px-3">
              <i className="pi pi-inbox mr-2 text-base lg:mr-0 lg:text-2xl"></i>
              <span className="block font-medium lg:hidden">Inbox</span>
              <Ripple />
            </a>
          </li>
          <li>
            <a className="p-ripple align-items-center border-round transition-duration-150 flex cursor-pointer p-3 px-6 font-medium text-gray-400 transition-colors hover:bg-gray-800 hover:text-white lg:px-3">
              <i className="pi pi-bell p-overlay-badge mr-2 text-base lg:mr-0 lg:text-2xl">
                <Badge severity="danger" />
              </i>
              <span className="block font-medium lg:hidden">Notifications</span>
              <Ripple />
            </a>
          </li>
          <li className="border-top-1 lg:border-top-none border-gray-800">
            <a className="p-ripple align-items-center border-round transition-duration-150 flex cursor-pointer p-3 px-6 font-medium transition-colors hover:bg-gray-800 lg:px-3">
              <img
                src="/demo/images/blocks/avatars/circle/avatar-f-1.png"
                className="mr-3 lg:mr-0"
                style={{ width: "28px", height: "28px" }}
              />
              <div className="block lg:hidden">
                <div className="font-medium text-gray-400">
                  Josephine Lillard
                </div>
                <span className="text-sm font-medium text-gray-500">
                  Marketing Specialist
                </span>
              </div>
              <Ripple />
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};
