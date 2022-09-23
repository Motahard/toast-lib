import styled from "styled-components"
import { LEFT_BOTTOM, LEFT_TOP, RIGHT_TOP } from '@src/constants'
import { leftBottom, leftTop, rightBottom, rightTop } from '@src/styles/theme'

interface IContainerForToasts {
	position: string
}

export const ContainerForToasts = styled.div<IContainerForToasts>`
    display: flex;
    flex-direction: column;
    position: fixed;
    ${(props) => {
		switch (props.position) {
			case LEFT_TOP:
				return leftTop
			case LEFT_BOTTOM:
				return leftBottom
			case RIGHT_TOP:
				return rightTop
			default:
				return rightBottom
		}
	}}
`