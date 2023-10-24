import { ComponentBase } from "../types/components-base.types"
export type LoadingProps = Omit<ComponentBase, "isDisabled"> & {
  type?: "spinner" | "ring"
}