import type { LoaderFunctionArgs } from "@remix-run/node";
import { useLoaderData } from "@remix-run/react";
import { json } from "@remix-run/server-runtime";

import { Navbar } from "components/Navbar";
import { Carousel } from "components/Carousel";

export async function loader({
  params,
  context: { payload },
}: LoaderFunctionArgs) {
  const language = params["lang"];
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
        href: "/el/εταιρικό-προφίλ",
      },
      {
        id: 7,
        label: "Η Ομάδα ΔΑΛΙΚΟ",
        icon: "pi pi-users",
        href: "/el/η-ομάδα-δαλικο",
      },
      {
        id: 8,
        label: "Ιστορικό",
        icon: "pi pi-lock",
        href: "/el/ιστορικό",
      },
    ],
  },
];

const config1 = {
  slidesPerView: 1,
  breakpoints: {
    768: {
      slidesPerView: 4,
    },
  },
};

const slides1 = [
  {
    imgUrl:
      "https://www.daliko.com/assets/media/images/slideshows/1-Τζάκια-και-Σόμπες.jpg",
    title: "Slide 1",
    subtitle: "Subtitle 1",
    // buttons: ["Button 1", "Button 2"],
    class: "w-full",
  },
  {
    imgUrl:
      "https://www.daliko.com/assets/media/images/slideshows/2-Διακοσμητικά-Προϊόντα.jpg",
    title: "Slide 2",
    subtitle: "Subtitle 2",
    // buttons: ["Button 3", "Button 4"],
    class: "w-full",
  },
  {
    imgUrl:
      "https://www.daliko.com/assets/media/images/slideshows/3-Διακοσμητικά-Επιχρίσματα.jpg",
    title: "Slide 3",
    subtitle: "Subtitle 3",
    // buttons: ["Button 5", "Button 6"],
    class: "w-full",
  },
  {
    imgUrl:
      "https://www.daliko.com/assets/media/images/slideshows/4-Ψησταριές-και-Φούρνοι.jpg",
    title: "Slide 4",
    subtitle: "Subtitle 4",
    // buttons: ["Button 7", "Button 8"],
    class: "w-full",
  },
  {
    imgUrl:
      "https://www.daliko.com/assets/media/images/slideshows/5-Δάπεδα.jpg",
    title: "Slide 5",
    subtitle: "Subtitle 5",
    // buttons: ["Button 9", "Button 10"],
    class: "w-full",
  },
].map((slide) => (
  <div className={slide.class}>
    <img src={slide.imgUrl} alt={slide.title} />
  </div>
));

const config2 = {
  slidesPerView: 4,
  breakpoints: {
    768: {
      slidesPerView: 4,
    },
  },
};

const slides2 = [
  {
    imgUrl:
      "https://www.daliko.com/assets/media/images/slideshows/1-Τζάκια-και-Σόμπες.jpg",
    title: "Slide 1",
    subtitle: "Subtitle 1",
    // buttons: ["Button 1", "Button 2"],
    class: "w-full h-30rem",
  },
  {
    imgUrl:
      "https://www.daliko.com/assets/media/images/slideshows/2-Διακοσμητικά-Προϊόντα.jpg",
    title: "Slide 2",
    subtitle: "Subtitle 2",
    // buttons: ["Button 3", "Button 4"],
    class: "w-full h-30rem",
  },
  {
    imgUrl:
      "https://www.daliko.com/assets/media/images/slideshows/3-Διακοσμητικά-Επιχρίσματα.jpg",
    title: "Slide 3",
    subtitle: "Subtitle 3",
    // buttons: ["Button 5", "Button 6"],
    class: "w-full h-30rem",
  },
  {
    imgUrl:
      "https://www.daliko.com/assets/media/images/slideshows/4-Ψησταριές-και-Φούρνοι.jpg",
    title: "Slide 4",
    subtitle: "Subtitle 4",
    // buttons: ["Button 7", "Button 8"],
    class: "w-full h-30rem",
  },
  {
    imgUrl:
      "https://www.daliko.com/assets/media/images/slideshows/5-Δάπεδα.jpg",
    title: "Slide 5",
    subtitle: "Subtitle 5",
    // buttons: ["Button 9", "Button 10"],
    class: "w-full h-30rem",
  },
].map((slide) => (
  <div className={slide.class}>
    <img
      src={slide.imgUrl}
      alt={slide.title}
      style={{ width: "100%", height: "100%", objectFit: "cover" }}
    />
  </div>
));

export default function Index() {
  const { userCount, language } = useLoaderData<typeof loader>();
  console.log(userCount);
  return (
    <>
      <Navbar items={menuItems} />
      <Carousel config={config1} slides={slides1} />
      <Carousel config={config2} slides={slides2} />
      <div className="container">
        <h1>Where will this {language} end up?</h1>
      </div>
    </>
  );
}
