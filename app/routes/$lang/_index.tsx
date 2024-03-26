import { Outlet } from "@remix-run/react";

export default function ProductSectionTemplate() {
  return (
    <div className="container">
      <h1>Where will this end up inside?</h1>
      <Outlet />
    </div>
  );
}
