import {
	FROM_BOTTOM,
	FROM_LEFT,
	FROM_RIGHT,
	FROM_TOP,
	TO_BOTTOM,
	TO_LEFT,
	TO_RIGHT,
	TO_TOP,
} from '@src/constants'

export const changeAnimation = (currentAnimation: string): string => {
	switch (currentAnimation) {
		case FROM_LEFT:
			return TO_LEFT
		case FROM_RIGHT:
			return TO_RIGHT
		case FROM_TOP:
			return TO_TOP
		case FROM_BOTTOM:
			return TO_BOTTOM
		default:
			return TO_LEFT
	}
}