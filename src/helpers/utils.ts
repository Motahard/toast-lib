import { Animations } from '@src/constants'

export const changeAnimation = (currentAnimation: string): string => {
	switch (currentAnimation) {
		case Animations.FROM_LEFT:
			return Animations.TO_LEFT
		case Animations.FROM_RIGHT:
			return Animations.TO_RIGHT
		case Animations.FROM_TOP:
			return Animations.TO_TOP
		case Animations.FROM_BOTTOM:
			return Animations.TO_BOTTOM
		default:
			return Animations.TO_LEFT
	}
}