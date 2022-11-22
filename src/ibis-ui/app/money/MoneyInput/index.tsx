import { component$, PropFunction, useClientEffect$ } from "@builder.io/qwik";

import { CurrencyInput } from "./intl-currency-input";

interface MoneyInputProps {
  id?: string;
  type?: string;
  placeholder?: string;
  className?: string;
  defaultValue?: number;
  disabled?: boolean;
  currency?: string;
  autoFocus?: boolean;
  onChangeMoneyInput$?: PropFunction<(value: number) => void>;
}

export const MoneyInput = component$(
  ({
    defaultValue,
    currency,
    disabled,
    id = "moneyInput",
    placeholder = "0,00",
    onChangeMoneyInput$,
  }: MoneyInputProps) => {
    useClientEffect$(() => {
      new CurrencyInput(`#${id}`, {
        defaultValue: defaultValue,
        currency: currency || "USD",
        locale: "de",
        currencyDisplay: "none",
        min: 0,
        max: 9999,
        separationCharacter: ".",
        decimalCharacter: ",",
        onChange: (value: number) => {
          if (onChangeMoneyInput$) {
            onChangeMoneyInput$(value);
          }
        },
      });
    });

    return (
      <input
        id={id}
        placeholder={placeholder}
        disabled={disabled}
        autoFocus={true}
        className="appearance-none tabular-nums outline-none text-center text-4xl font-bold text-gray-700"
      />
    );
  }
);
