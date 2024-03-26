import type { LoaderFunctionArgs } from "@remix-run/node";
import { Outlet, useLoaderData } from "@remix-run/react";
import { json, redirect } from "@remix-run/server-runtime";

/**
 * The loader function for the Index route that fetches the total number of users from the database
 * and the requested language from the URL parameters. If no language parameter is provided, it
 * redirects to the default language route.
 *
 * @param {LoaderFunctionArgs} - The arguments provided by Remix to the loader function, including
 * URL parameters and any context data.
 * @returns If the language parameter is missing, it returns a redirect response to the default
 * language route. Otherwise, it returns a JSON response with the total number of users and the
 * requested language.
 */
export async function loader({
  params,
  context: { payload },
}: LoaderFunctionArgs) {
  if (!params["lang"]) {
    return redirect("/el");
  }
  const language = params["lang"];
  const users = await payload.find({
    collection: "users",
  });
  return json(
    { userCount: users.totalDocs, language: language },
    { status: 200 },
  );
}

export default function Index() {
  const { userCount } = useLoaderData<typeof loader>();
  console.log(userCount);
  return <Outlet />;
}
