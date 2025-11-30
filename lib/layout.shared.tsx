import type { BaseLayoutProps } from "fumadocs-ui/layouts/shared";
import { ArrowUpRightIcon } from "lucide-react";

export function baseOptions(): BaseLayoutProps {
  return {
    nav: {
      title: "CirraUI",
    },
    links: [
      {
        text: "Components",
        url: "/components",
      },
    ],
  };
}
