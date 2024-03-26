import type { LoaderFunctionArgs } from "@remix-run/node";
import { useLoaderData } from "@remix-run/react";
import { json } from "@remix-run/server-runtime";

export async function loader({
  params,
  context: { payload },
}: LoaderFunctionArgs) {
  const { lang, sectionSlug, categorySlug } = params;
  return json(
    {
      language: lang,
      sectionSlug: sectionSlug,
      categorySlug: categorySlug,
    },
    { status: 200 },
  );
}

export default function ProductCategory() {
  const { language, sectionSlug, categorySlug } =
    useLoaderData<typeof loader>();
  return (
    <h1>
      Here is the language: `{language}`, section: {sectionSlug}, category:
      {categorySlug} !!
    </h1>
  );
}
