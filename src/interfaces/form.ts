import { IToast } from "@src/interfaces"

export interface IFormToastContainer {
    setAnimation: (value: string) => void
    setPosition: (value: string) => void
    setSpace: (value: string) => void
    space: string
}

export interface IFormToastProps {}
export interface IFormToastState extends Omit<IToast, 'id'> {}