import {
  component$,
  useSignal,
  $,
  useWatch$,
  useOnWindow,
} from "@builder.io/qwik";

import { CURRENCIES } from "@/config/constants";
import { Button } from "@/ibis-ui/atoms/Button";
import { MoneyInput } from "@/ibis-ui/app/money/MoneyInput";
import { Spacing } from "@/ibis-ui/layout/Spacing";
import { Text } from "@/ibis-ui/atoms/Text";
import { AppBottomBar } from "@/ibis-ui/app/layout/AppBottomBar";

interface TestPageProps {
  rate: number;
  defaultCurrency: string;
}

export const TestPage = component$(
  ({ rate, defaultCurrency }: TestPageProps) => {
    const currency = useSignal(defaultCurrency || CURRENCIES.USDT);
    const amount = useSignal(0);
    const continueBtnIsEnabled = useSignal(false);

    const onToggleCurrency = $(() => {
      if (currency.value === CURRENCIES.USDT) {
        currency.value = CURRENCIES.VES;
      } else {
        currency.value = CURRENCIES.USDT;
      }
    });
    const onChangeMoneyInput = $((newAmount: number) => {
      amount.value = newAmount;
    });
    const onSubmit = $(() => {
      console.log("onSubmit");
    });

    useWatch$(({ track }) => {
      const [trackedAmount, trackedCurrency] = track(() => [
        amount.value,
        currency.value,
      ]);

      const trackedCurrencyIsUsdt = trackedCurrency === CURRENCIES.USDT;
      const minAmount = trackedCurrencyIsUsdt ? 1 : 1 * rate;
      const maxAmount = trackedCurrencyIsUsdt ? 60 : 60 * rate;
      const isValid = minAmount <= trackedAmount && trackedAmount <= maxAmount;

      continueBtnIsEnabled.value = isValid;
    });

    useOnWindow(
      "focus",
      $(() => {
        console.log("Focus");
      })
    );

    return (
      <div className="flex flex-col items-center">
        <MoneyInput
          autoFocus
          defaultValue={amount.value}
          onChangeMoneyInput$={onChangeMoneyInput}
        />
        <Spacing bottom={1} />

        <Button variant="outline" color="secondary" onPress={onToggleCurrency}>
          {currency.value}
        </Button>
        <Spacing bottom={1} />

        <Text>
          {amount.value} {currency.value}
        </Text>
        <Spacing bottom={1} />

        <Button onPress={onSubmit} disabled={!continueBtnIsEnabled.value}>
          <Text white>Continue</Text>
        </Button>

        <AppBottomBar active="home" />
      </div>
    );
  }
);
