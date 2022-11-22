import { component$, Slot } from "@builder.io/qwik";
import { twMerge } from "tailwind-merge";

import { View } from "@/ibis-ui/layout/View";

export const BottomStickyBar = component$(
  ({ left, className }: { left?: string; className?: string }) => {
    return (
      <View className={twMerge("flex items-center justify-between", className)}>
        {left ? left : null}

        <Slot />
      </View>
    );
  }
);
