import {
  $,
  component$,
  useClientEffect$,
  useStore,
  Slot,
} from "@builder.io/qwik";
import { CupertinoPane } from "cupertino-pane";

import { Button } from "@/ibis-ui/atoms/Button";
import { SolidSwitchHorizontal01Icon } from "@/icons/SolidSwitchHorizontal01Icon";
import { DuotoneCircleIcon } from "@/icons/DuotoneCircleIcon";
import { colors } from "@/config/colors";

export const BottomSheet = component$(() => {
  const store = useStore({ open: false, ignoreEvent: false });
  const open = $(() => {
    store.open = true;
  });

  useClientEffect$(
    ({ track }) => {
      const shouldOpen = track(() => store.open);

      const element = document.querySelector(".cupertino-pane");
      element?.classList.remove("hidden");

      try {
        // @ts-ignore
        const pane = new CupertinoPane(".cupertino-pane", {
          parentElement: "body",
          fitHeight: true,
          backdrop: true,
          bottomClose: true,
          animationDuration: 200,
          fastSwipeClose: true,
          buttonDestroy: false,
        });

        pane.on("onBackdropTap", () => {
          pane.destroy({ animate: true, destroyButton: false });
          store.ignoreEvent = true;
          store.open = false;
        });

        pane.on("onDidDismiss", () => {
          if (!store.open) return;
          if (store.ignoreEvent) return;
          // @ts-ignore
          if (element?.offsetParent)
            pane.destroy({ animate: true, destroyButton: false });
          store.ignoreEvent = true;
          store.open = false;
        });

        if (shouldOpen) {
          pane.present({ animate: true });
        } else if (pane.rendered) {
          pane.destroy({ animate: true, destroyButton: false });
        }
      } catch (e) {} // eslint-disable-line
    },
    { eagerness: "load" }
  );

  return (
    <div>
      <Button
        color="secondary"
        variant="transparent"
        onPress={open}
        className="items-center justify-center relative"
      >
        <DuotoneCircleIcon
          /*  @ts-ignore */
          width={48}
          height={48}
          color={colors.primary}
          className="absolute top-[-12px] left-[-12px]"
        />
        <SolidSwitchHorizontal01Icon
          // @ts-ignore
          color={colors.primary}
          width={24}
          height={24}
          className="transform rotate-[-40.23deg]"
        />
      </Button>
      <div className="cupertino-pane hidden">
        <Slot />
      </div>
    </div>
  );
});
