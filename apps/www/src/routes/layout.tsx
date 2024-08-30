import { component$, Slot } from "@builder.io/qwik";
import { NavProgress } from "@nestri/ui";
import type { DocumentHead, RequestHandler } from "@builder.io/qwik-city";

export const onGet: RequestHandler = async ({ cacheControl }) => {
  // Control caching for this request for best performance and to reduce hosting costs:
  // https://qwik.dev/docs/caching/
  cacheControl({
    // Always serve a cached response by default, up to a week stale
    staleWhileRevalidate: 60 * 60 * 24 * 7,
    // Max once every 5 seconds, revalidate on the server to get a fresh version of this page
    maxAge: 5,
  });
};

export default component$(() => {
  return (
    <>
      <NavProgress />
      <Slot />
    </>
  );
});

export const head: DocumentHead = {
  title: 'Nestri – Your games. Your rules.',
  meta: [
    {
      name: 'description',
      content: 'Nestri – Your games. Your rules.',
    },
    {
      name: "og:title",
      content: "Nestri – Your games. Your rules.",
    },
    {
      name: "og:description",
      content: "Play games with friends right from your browser.",
    },
    {
      name: "twitter:title",
      content: "Nestri – Your games. Your rules.",
    },
    {
      name: "twitter:description",
      content: "Play games with friends right from your browser.",
    },
    {
      name: "twitter:card",
      content: "summary_large_image",
    },
  ],
};
