import styled from "styled-components"
import { Positions } from '@src/constants'
import { 
	leftBottom, 
	leftTop, 
	rightBottom, 
	rightTop 
} from '@src/styles/theme'

import { IContainerForToasts } from '@src/interfaces'

export const ContainerForToasts = styled.div<IContainerForToasts>`
    display: flex;
    flex-direction: column;
    position: fixed;
	margin: ${props => props.space}px;
    ${(props) => {
		switch (props.position) {
			case Positions.LEFT_TOP:
				return leftTop
			case Positions.LEFT_BOTTOM:
				return leftBottom
			case Positions.RIGHT_TOP:
				return rightTop
			default:
				return rightBottom
		}
	}}
`