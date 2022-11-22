import { component$ } from "@builder.io/qwik";
import { SolidLoading02Icon } from "@/icons/SolidLoading02Icon";

export const Spinner = component$(() => {
  return (
    <SolidLoading02Icon
      // @ts-ignore
      className="animate-spin-slow"
      width={20}
      height={20}
    />
  );
});
