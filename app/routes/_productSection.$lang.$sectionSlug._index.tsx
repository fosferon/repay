import type { LoaderFunctionArgs } from "@remix-run/node";
import { Outlet, useLoaderData } from "@remix-run/react";
import { json } from "@remix-run/server-runtime";

export async function loader({
  params,
  context: { payload },
}: LoaderFunctionArgs) {
  const { lang, sectionSlug } = params;
  // const language = params["lang"];
  const users = await payload.find({
    collection: "users",
  });
  return json(
    {
      userCount: users.totalDocs,
      language: lang,
      sectionSlug: sectionSlug,
    },
    { status: 200 },
  );
}

export default function ProductSection() {
  const { language, sectionSlug } = useLoaderData<typeof loader>();
  return (
    <>
      <h1>
        Here is the `{language}` language section {sectionSlug} !!
      </h1>
      <Outlet />
    </>
  );
}
