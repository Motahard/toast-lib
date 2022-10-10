import React, { useState, forwardRef, useImperativeHandle } from 'react'

import { instanceToast } from '@services'
import { Positions, Animations } from '@constants'

import { IToastContainer } from '@interfaces'

import { Portal } from '@Portal'
import { Toast } from '@components/Toast'
import { ContainerForToasts } from '@components/ToastContainer/styled'

export const ToastContainer = forwardRef((props: IToastContainer, ref) => {
  const toastsList = instanceToast.getAllToasts()

  const [_, setUpdate] = useState<{} | null>(null)

  const handleUpdate = () => {
		setUpdate({})
	}
  useImperativeHandle(ref, () => ({
    handleUpdate: handleUpdate
  }))

  const settedPosition: string = props.position ? props.position : Positions.LEFT_TOP
  const settedSpace: string = props.space ? props.space : '0'
	let settedAnimation: string = ''

	if (settedPosition === Positions.LEFT_TOP || settedPosition === Positions.LEFT_BOTTOM) {
		settedAnimation = props.animation ? props.animation : Animations.FROM_LEFT
	} else {
		settedAnimation = props.animation ? props.animation : Animations.FROM_RIGHT
	}

  return (
    <Portal>
      <ContainerForToasts position={settedPosition} space={settedSpace}>
        {
          toastsList.map(toast => (
            <Toast 
              key={toast.id}
              position={settedPosition}
              animation={settedAnimation}
              space={settedSpace}
              {...toast}
            />
          ))
        }
      </ContainerForToasts>
    </Portal>
  )
})