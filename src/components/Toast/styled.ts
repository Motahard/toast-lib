import styled from "styled-components";
import { Types, Delays } from '@src/constants'
import { 
	font,	
	fromBottom,
	fromLeft,
	fromRight,
	fromTop,
	toBottom,
	toLeft,
	toRight,
	toTop,
	svgObj
} from '@src/styles/theme'

import { 
	IStyledToastWrapper, 
	IStyledToast, 
	IStyledToastText 
} from "@src/interfaces";

export const ToastWrapper = styled.div<IStyledToastWrapper>`
    position: relative;
	display: flex;
	align-items: center;
	margin-bottom: 10px;
	width: 300px;
	height: 100px;
	border-radius: 24px;
	box-shadow: 4px 4px 8px #00000029;
	opacity: 1;
	padding: 16px;
	transition: transform ${Delays.DEFAULT_ANIM_DELAY}ms ease-in;
	cursor: grab;
    background: ${(props) => {
		if(props.backgroundColor) {
			return props.backgroundColor 
		} else {
			switch (props.type) {
				case Types.INFO:
					return props.theme.type.info
				case Types.WARNING:
					return props.theme.type.warning
				case Types.ERROR:
					return props.theme.type.error
				default:
					return props.theme.type.success
			}
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
	&:active {
		cursor: grabbing;
	}
`
export const Logo = styled.div<IStyledToast>`
    height: 64px;
	width: 64px;
	${(props) => {
		switch (props.type) {
			case Types.INFO:
				return `background-image: url(${svgObj.info})`
			case Types.WARNING:
				return `background-image: url(${svgObj.warning})`
			case Types.ERROR:
				return `background-image: url(${svgObj.error})`
			default:
				return `background-image: url(${svgObj.success})`
		}
	}};
`
export const TextContainer = styled.div<IStyledToastText>`
	height: auto;
	margin-left: 16px;
	color: ${(props) => {
		if(props.textColor) {
			return props.textColor
		} else {
			return props.type === Types.WARNING ? 
			props.theme.textColor.black
			: 
			props.theme.textColor.white 
		}
	}};
`
export const Title = styled.h2`
    font-size: 28px;
	margin: 0;
`
export const Description = styled.p`
	font-size: 18px;
    margin: 0;
`
export const CloseButton = styled.div<IStyledToast>`
    cursor: pointer;
    position: absolute;
	height: 32px;
	width: 32px;
	right: 29px;
	top: 27px;
	${(props) =>
		props.type === Types.WARNING
			? `background-image: url(${svgObj.closeBlack});`
			: `background-image: url(${svgObj.closeWhite});`}
`