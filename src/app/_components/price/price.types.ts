import { ComponentBase } from "../types/components-base.types";

export type PriceProps = Omit<ComponentBase, "isDisabled" | "variant"> & {
  price?: number;
  text?: string;
};
