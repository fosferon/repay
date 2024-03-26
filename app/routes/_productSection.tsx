import type { LoaderFunctionArgs } from "@remix-run/node";
import { Outlet, useLoaderData } from "@remix-run/react";
import { json, redirect } from "@remix-run/server-runtime";
import { Navbar } from "components/Navbar";

export async function loader({
  params,
  context: { payload },
}: LoaderFunctionArgs) {
  if (!params["lang"]) {
    return redirect("/el");
  }
  const { lang: language } = params;
  const users = await payload.find({
    collection: "users",
  });
  return json(
    { userCount: users.totalDocs, language: language },
    { status: 200 }
  );
}

// DELETE THESE ONCE API IS READY
const menuItems = [
  {
    id: 1,
    label: "Προϊόντα",
    icon: "pi pi-home",
    click: null,
    href: "/el/προϊόντα",
  },
  {
    id: 2,
    label: "Σημεία πώλησης",
    icon: "pi pi-users",
    click: null,
    href: "/el/σημεία-πώλησης",
  },
  {
    id: 3,
    label: "Υποστήριξη",
    icon: "pi pi-home",
    click: null,
    href: "/el/υποστήριξη",
  },

  {
    id: 4,
    label: "Ιστολόγιο",
    icon: "pi pi-chart-line",
    click: null,
    href: "/el/ιστολόγιο",
  },
  {
    id: 5,
    label: "Εταιρεία",
    icon: "pi pi-calendar",
    items: [
      {
        id: 6,
        label: "Εταιρικό προφίλ",
        icon: "pi pi-id-card",
        href: "/el/εταιρεία/προφίλ",
      },
      {
        id: 7,
        label: "Η Ομάδα ΔΑΛΙΚΟ",
        icon: "pi pi-users",
        href: "/el/εταιρεία/ομάδα-δαλικο",
      },
      {
        id: 8,
        label: "Ιστορικό",
        icon: "pi pi-lock",
        href: "/el/εταιρεία/ιστορικό",
      },
    ],
  },
];

export default function ProductSectionTemplate() {
  const { language } = useLoaderData<typeof loader>();
  return (
    <>
      <Navbar items={menuItems} language={language} />
      <div className="container">
        <h1>Informed: {language} </h1>
        <Outlet />
      </div>
    </>
  );
}
