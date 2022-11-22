import { component$ } from "@builder.io/qwik";

import { View } from "@/ibis-ui/layout/View";

export const Spacing = component$(
  ({
    top,
    left,
    right,
    bottom,
  }: {
    right?: number;
    top?: number;
    left?: number;
    bottom?: number;
  }) => {
    const style: any = {};
    const unit = 8;

    if (top) style.paddingTop = `${top * unit}px`;
    if (left) style.paddingLeft = `${left * unit}px`;
    if (right) style.paddingRight = `${right * unit}px`;
    if (bottom) style.paddingBottom = `${bottom * unit}px`;

    return <View style={style} />;
  }
);
