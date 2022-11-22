import { component$, Slot } from "@builder.io/qwik";

export const View = component$(
  ({ className, style }: { className?: string; style?: any }) => {
    return (
      <div className={className} style={style}>
        <Slot />
      </div>
    );
  }
);
