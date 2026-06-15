import type { BaseLayoutProps } from "fumadocs-ui/layouts/shared";

export function baseOptions(): BaseLayoutProps {
  return {
    nav: {
      title: "CirraUI",
    },
    links: [
      {
        text: "Get started",
        url: "/components",
      },
    ],
  };
}
