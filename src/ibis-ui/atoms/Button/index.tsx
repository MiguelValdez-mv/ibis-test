import { component$, Slot, $ } from "@builder.io/qwik";

import { twMerge } from "tailwind-merge";

export const baseStyles: any = {
  solid:
    "inline-flex justify-center rounded-lg py-2 px-3 text-sm font-semibold outline-2 outline-offset-2 transition-colors",
  outline:
    "inline-flex justify-center rounded-lg border py-[calc(theme(spacing.2)-1px)] px-[calc(theme(spacing.3)-1px)] text-sm outline-2 outline-offset-2 transition-colors",
};

export const variantStyles: any = {
  solid: {
    white:
      "bg-white text-cyan-900 hover:bg-white/90 active:bg-white/90 active:text-cyan-900/70",
    primary:
      "bg-pink-600 text-white active:text-white/80 hover:bg-pink-700 active:bg-pink-700",
    disabled: "bg-gray-300",
  },
  outline: {
    primary:
      "border-pink-300 text-gray-700 hover:border-pink-400 active:bg-pink-100 active:text-gray-700/80",
    secondary:
      "border-slate-300 text-gray-700 hover:border-slate-400 active:bg-slate-100 active:text-gray-700/80",
    disabled: "bg-gray-300",
  },
  transparent: {
    primary: "",
    secondary: "",
  },
};

interface ButtonProps {
  variant?: string;
  color?: string;
  className?: string;
  pill?: boolean;
  onPress?: any;
  disabled?: boolean;
}

export const Button = component$(
  ({
    variant = "solid",
    pill,
    color = "primary",
    className,
    onPress,
    disabled,
  }: ButtonProps) => {
    const computedClassName = twMerge(
      baseStyles[variant],
      variantStyles[variant][disabled ? "disabled" : color],
      pill ? "rounded-full" : "",
      className
    );

    return (
      <button
        disabled={disabled}
        className={computedClassName}
        onClick$={$(() => onPress?.())}
      >
        <Slot />
      </button>
    );
  }
);
