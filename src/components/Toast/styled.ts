import styled from "styled-components";
import { Types, Delays } from '@constants'
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
	images
} from '@styles'
import { 
	IStyledToastWrapper, 
	IStyledToast, 
	IStyledToastText 
} from "@interfaces";

export const ToastWrapper = styled.div<IStyledToastWrapper>`
	position: relative;
	user-select: none;
	display: flex;
	align-items: center;
	margin-bottom: 10px;
	width: ${props => props.theme.toastWidth};
	height: ${props => props.theme.toastHeight};
	border-radius: 24px;
	box-shadow: 4px 4px 8px #00000029;
	opacity: 1;
	padding: ${props =>  props.theme.spaces[2]}px;
	transition: transform ${Delays.DEFAULT_ANIM_DELAY}ms ease-in;
	&:hover {
		cursor: grab;	
		cursor: -webkit-grab;
	}
	&:active {
		cursor: grabbing;
		cursor: -webkit-grabbing;
	}
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
`
export const Logo = styled.div<IStyledToast>`
    height: ${props => props.theme.spaces[5]}px;
	width: ${props => props.theme.spaces[5]}px;
	${(props) => {
		switch (props.type) {
			case Types.INFO:
				return `background-image: url(${images.info})`
			case Types.WARNING:
				return `background-image: url(${images.warning})`
			case Types.ERROR:
				return `background-image: url(${images.error})`
			default:
				return `background-image: url(${images.success})`
		}
	}};
`
export const TextContainer = styled.div<IStyledToastText>`
	height: auto;
	margin-left: ${props => props.theme.spaces[2]}px;
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
	height: ${props => props.theme.spaces[4]}px;
	width: ${props => props.theme.spaces[4]}px;
	right: 29px;
	top: 27px;
	${(props) =>
		props.type === Types.WARNING
			? `background-image: url(${images.closeBlack});`
			: `background-image: url(${images.closeWhite});`}
`