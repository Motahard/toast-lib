import { useEffect, useRef } from 'react'
import { createPortal } from 'react-dom'
import { IPortal } from '@src/interfaces'

export const Portal = ({ children }: IPortal) => {
	const toastRoot = document.createElement('div')
	toastRoot.id = '#toast'
	document.body.appendChild(toastRoot)

	const elem = useRef(document.createElement('div'))
	const current = elem.current

	useEffect(() => {
		toastRoot.appendChild(current)
		return () => {
			toastRoot.removeChild(current)
			document.getElementById('#toast')?.remove()
		}
	}, [])

	return createPortal(children, current)
}