import { css } from 'styled-components'

import { DefaultTheme } from '@interfaces'

import error from '../assets/svg/error.svg'
import info from '../assets/svg/info.svg'
import success from '../assets/svg/success.svg'
import warning from '../assets/svg/warning.svg'
import closeWhite from '../assets/svg/closeWhite.svg'
import closeBlack from '../assets/svg/closeBlack.svg'

export const images = {
	error,
	info,
	success,
	warning,
	closeWhite,
	closeBlack
}

const white = '#FFFFFF'
const black = '#000000'
const lilac = '#9A40D3'
const yellow = '#F4E048'
const red = '#E25837'
const green = '#37E29A'

export const defaultTheme: DefaultTheme = {
	type: {
		info: lilac,
		warning: yellow,
		error: red,
		success: green,
	},

	textColor: {
		white,
		black
	},
}

const posTop = '20'
const posBottom = '20'
const posLeft = '20'
const posRight = '20'

export const leftTop = css`
	top: ${posTop}px;
	left: ${posLeft}px;
`
export const leftBottom = css`
	bottom: ${posBottom}px;
	left: ${posLeft}px;
`

export const rightTop = css`
	top: ${posTop}px;
	right: ${posRight}px;
`
export const rightBottom = css`
	bottom: ${posBottom}px;
	right: ${posRight}px;
`

export const font = css`
	font-family: 'Helvetica Neue';
	font-weight: bold;
	font-size: 32px;
	line-height: 38px;
`

export const fromLeft = css`
	@keyframes FROM_LEFT {
		from {
			transform: translateX(-100%);
		}
		to {
			transform: translateX(0);
		}
	}
`
export const toLeft = css`
	@keyframes TO_LEFT {
		from {
			transform: translateX(0);
		}
		to {
			transform: translateX(-100%);
		}
	}
`
export const fromTop = css`
	@keyframes FROM_TOP {
		from {
			transform: translateY(-320%);
		}
		to {
			transform: translateY(0);
		}
	}
`
export const toTop = css`
	@keyframes TO_TOP {
		from {
			transform: translateY(0);
		}
		to {
			transform: translateY(-320%);
		}
	}
`
export const fromRight = css`
	@keyframes FROM_RIGHT {
		from {
			transform: translateX(100%);
		}
		to {
			transform: translateX(0);
		}
	}
`
export const toRight = css`
	@keyframes TO_RIGHT {
		from {
			transform: translateX(0);
		}
		to {
			transform: translateX(100%);
		}
	}
`
export const fromBottom = css`
	@keyframes FROM_BOTTOM {
		from {
			transform: translateY(320%);
		}
		to {
			transform: translateY(0);
		}
	}
`
export const toBottom = css`
	@keyframes TO_BOTTOM {
		from {
			transform: translateY(0);
		}
		to {
			transform: translateY(320%);
		}
	}
`