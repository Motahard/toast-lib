import styled from "styled-components";
import { INFO, WARNING, ERROR, DEFAULT_ANIM_DELAY } from '@src/constants'
import { 
	font,	
	fromBottom,
	fromLeft,
	fromRight,
	fromTop,
	toBottom,
	toLeft,
	toRight,
	toTop, } from '@src/styles/theme'

import error from '../../assets/svg/error.svg'
import info from '../../assets/svg/info.svg'
import success from '../../assets/svg/success.svg'
import warning from '../../assets/svg/warning.svg'
import closeWhite from '../../assets/svg/closeWhite.svg'
import closeBlack from '../../assets/svg/closeBlack.svg'

interface IStyledType {
    type: string
}

interface IToastWrapper extends IStyledType {
	position: string
	animation?: string
}

export const ToastWrapper = styled.div<IToastWrapper>`
    position: relative;
	display: flex;
	align-items: center;
	margin-bottom: 10px;
	width: 668px;
	height: 181px;
	border-radius: 24px;
	box-shadow: 4px 4px 8px #00000029;
	opacity: 1;
	padding: 32px;
	transition: transform ${DEFAULT_ANIM_DELAY}ms ease-in;
	cursor: grab;
    background: ${(props) => {
		switch (props.type) {
			case INFO:
				return props.theme.type.info
			case WARNING:
				return props.theme.type.warning
			case ERROR:
				return props.theme.type.error
			default:
				return props.theme.type.success
		}
	}};
    ${font}
	animation: ${({ animation }) => animation} 1s;
	${fromLeft};
	${toLeft};
	${fromTop};
	${toTop};
	${fromRight};
	${toRight};
	${fromBottom};
	${toBottom};
`
export const Logo = styled.div<IStyledType>`
    height: 64px;
	width: 64px;
	${(props) => {
		switch (props.type) {
			case INFO:
				return `background-image: url(${info})`
			case WARNING:
				return `background-image: url(${warning})`
			case ERROR:
				return `background-image: url(${error})`
			default:
				return `background-image: url(${success})`
		}
	}};
`
export const TextContainer = styled.div<IStyledType>`
    margin-left: 38px;
	width: 400px;
	height: auto;
	color: ${(props) =>
		props.type === WARNING
			? props.theme.textColor.black
			: props.theme.textColor.white};
`
export const Title = styled.h2`
    font-size: 50px;
	line-height: 60px;
	margin: 0;
`
export const Description = styled.p`
    margin: 0;
`
export const CloseButton = styled.div<IStyledType>`
    cursor: pointer;
    position: absolute;
	height: 32px;
	width: 32px;
	right: 29px;
	top: 27px;
	${(props) =>
		props.type === WARNING
			? `background-image: url(${closeBlack});`
			: `background-image: url(${closeWhite});`}
`