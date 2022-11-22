import { component$, Slot } from "@builder.io/qwik";
import { twMerge } from "tailwind-merge";

import { t } from "@/ibis-ui/tokens";
import type { TextProp } from "@/ibis-ui/types";

export const Text = component$(
  ({
    id,
    bold,
    semibold,
    className,
    white,
    tiny,
    small,
    muted,
    hoverable,
    center,
    centerMobile,
    red,
    green,
    truncate,
    bordered,
    large,
    large2x,
    primary,
    ...rest
  }: TextProp) => {
    return (
      <span
        {...rest}
        id={id}
        className={twMerge(
          !white ? t.text.regular : t.text.white,
          t.text.dark,
          center && "text-center",
          centerMobile && "text-center lg:text-left",
          hoverable && t.text.link,
          muted && "text-slate-500",
          tiny && "text-xs",
          small && "text-sm",
          semibold && "font-semibold",
          bold && "font-bold",
          className,
          red && "text-red-600",
          green && "text-green-600",
          truncate && "truncate",
          bordered && "border border-gray-200",
          primary && "text-pink-600",
          large && "text-xl",
          large2x && "text-2xl"
        )}
      >
        <Slot />
      </span>
    );
  }
);
