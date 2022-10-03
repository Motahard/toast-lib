import { IToast } from '@src/interfaces'
import { v4 as uuid } from 'uuid'

export const toastsList: IToast[] = [
	{
		id: uuid(),
		type: 'success',
		title: 'Test title1',
		description: 'Test description1',
		autoDelete: true,
		delayForDelete: 5000,
	}
]
