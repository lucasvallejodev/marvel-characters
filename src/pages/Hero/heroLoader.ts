import { LoaderFunctionArgs, redirect } from "react-router-dom";

export type HeroLoaderData = {
  heroId: string;
}

export function heroLoader({ params }: LoaderFunctionArgs): HeroLoaderData {
  const heroId = params.heroId || "";

  if (!heroId) {
    redirect("/404");
  }

  return {
    heroId
  };
}
