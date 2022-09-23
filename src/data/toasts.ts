import { IToast } from '@src/models'
import { v4 as uuid } from 'uuid'

export const toastsList: IToast[] = [
	{
		id: uuid(),
		type: 'success',
		title: 'Test title1',
		description: 'Test description1',
		autoDelete: false,
		delayForDelete: 5000,
	},
	{
		id: uuid(),
		type: 'info',
		title: 'Test title2',
		description: 'Test description2',
		autoDelete: false,
	},
	{
		id: uuid(),
		type: 'error',
		title: 'Test title3',
		description: 'Test description3',
		autoDelete: true,
		delayForDelete: 4000,
	},
]
