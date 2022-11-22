import { component$, Slot } from "@builder.io/qwik";
import { twMerge } from "tailwind-merge";

import { t } from "@/ibis-ui/tokens";
import type { LinkProp } from "@/ibis-ui/types";

export const Link = component$(({ to, className, target, rel }: LinkProp) => {
  return (
    <a
      href={to}
      target={target}
      rel={rel}
      className={twMerge(t.text.regular, t.text.dark, t.text.link, className)}
    >
      <Slot />
    </a>
  );
});
