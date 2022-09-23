export interface IToast {
	id: string
	type: string
	title: string
	description?: string
	autoDelete?: boolean
	delayForDelete?: number
}

export interface IToastContainer {
	position?: string
	animation?: string
}

export interface IRefUpdate {
	handleUpdate: () => void
}

export interface ICreateToast extends IToast, Required<IToastContainer> {}

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
}