import { Variant } from "./Variant.type";
import { Size } from "./size.type";

export type componentBase = {
  isDisabled?: boolean;
  className?: string;
  variant?: Variant;
  size?: Size;
};
