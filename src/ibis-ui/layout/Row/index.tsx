import { component$, Slot } from "@builder.io/qwik";
import { twMerge } from "tailwind-merge";

import { View } from "@/ibis-ui/layout/View";

export const Row = component$(({ className }: { className?: string }) => {
  return (
    <View className={twMerge("flex flex-row", className)}>
      <Slot />
    </View>
  );
});
