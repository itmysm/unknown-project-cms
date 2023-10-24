import { Variant } from "./Variant.type";
import { Size } from "./size.type";

export type ComponentBase = {
  isDisabled?: boolean;
  className?: string;
  variant?: Variant;
  size?: Size;
};
