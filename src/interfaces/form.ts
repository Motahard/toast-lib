import { IToast } from "@interfaces"
import { ChangeEvent } from "react"

export interface IFormToastContainer {
    setAnimation: (value: string) => void
    setPosition: (value: string) => void
    setSpace: (value: string) => void
    space: string
}

export interface IFormToastProps {}
export interface IFormToastState extends Omit<IToast, 'id'> {}

export interface IInputGroup {
    type: string
    name: string
    value: string | undefined | number
    onChange: (e: ChangeEvent<HTMLInputElement>) => void
    description: string
    placeholder?: string
}

export interface ISelectGroup {
    name: string
    values: string[]
    valuesDescription: string[]
    onChange: (e: ChangeEvent<HTMLSelectElement>) => void
    description: string
    value?: string
}