import type { MetaFunction } from "@remix-run/node";
import {
  Links,
  LiveReload,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
} from "@remix-run/react";
import { PrimeReactProvider } from "primereact/api";
// import Tailwind from "primereact/passthrough/tailwind";
//
//
//css should be imported as an side effect for Vite
import "./tailwind.css";
import "primeflex/primeflex.css";
import "primereact/resources/themes/lara-light-blue/theme.css";
import "primeicons/primeicons.css";
import { register } from "swiper/element/bundle";

export const meta: MetaFunction = () => [
  {
    title:
      "ΔΑΛΙΚΟ - Έξυπνες λύσεις για το σπίτι, την οικοδομή και μεγάλα και δημόσια έργα",
  },
  { charSet: "utf-8" },
  { name: "viewport", content: "width=device-width, initial-scale=1" },
];

export default function App() {
  register();
  return (
    <html lang="en">
      <head>
        <Meta />
        <Links />
      </head>
      <body>
        <PrimeReactProvider>
          <Outlet />
        </PrimeReactProvider>
        <ScrollRestoration />
        <Scripts />
      </body>
    </html>
  );
}
