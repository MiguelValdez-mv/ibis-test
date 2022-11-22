import { component$, Resource } from "@builder.io/qwik";
import { useEndpoint } from "@builder.io/qwik-city";
import type { RequestHandler, DocumentHead } from "@builder.io/qwik-city";

import { TestPage } from "@/ibis-ui/pages/test";
import { Spinner } from "@/ibis-ui/atoms/Spinner";
import { CURRENCIES } from "@/config/constants";

interface TestData {
  rate: number;
}

export const onGet: RequestHandler<TestData> = () => ({ rate: 5 });

export default component$(() => {
  const pageData = useEndpoint<TestData>();

  return (
    <Resource
      value={pageData}
      onPending={() => <Spinner />}
      onResolved={({ rate }) => (
        <TestPage rate={rate} defaultCurrency={CURRENCIES.USDT} />
      )}
    />
  );
});

export const head: DocumentHead = () => {
  return {
    title: "Test",
  };
};
