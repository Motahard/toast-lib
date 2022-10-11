export interface IToast {
	id: string
	type: string
	title: string
	description?: string
	autoDelete?: boolean
	delayForDelete?: number
  backgroundColor?: string
  textColor?: string
}

export interface IToastContainer {
	position?: string
	animation?: string
  space?: string
}

export interface IRefUpdate {
	handleUpdate: () => void
}

export interface ICreateToast extends IToast, Required<IToastContainer> {
  story?: boolean
}

export interface DefaultTheme {
    type: {
      info: string,
      warning: string,
      error: string,
      success: string,
    },
    textColor: {
      white: string,
      black: string,
    },
    toastWidth: string
    toastHeight: string
    spaces: number[]
}

export interface IContainerForToasts {
	position: string
	space: string
}

export interface IStyledToast {
  type: string
}

export interface IStyledToastWrapper extends IStyledToast {
  position: string
  animation?: string
  backgroundColor?: string
  textColor?: string
  positionX?: number | undefined
  positionY?: number | undefined
}

export interface IStyledToastText extends IStyledToast{
  textColor?: string
}