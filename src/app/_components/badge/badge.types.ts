import { ComponentBase } from "../types/components-base.types";

export type BadgeProps = Omit<ComponentBase, 'isDisabled'> & {
    children: React.ReactNode
}