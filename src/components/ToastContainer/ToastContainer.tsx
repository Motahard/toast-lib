import React, { useState, forwardRef, useImperativeHandle } from 'react'

import { instanceToast } from '@src/logic/ToastService'
import { 
  FROM_LEFT,
	FROM_RIGHT,
	LEFT_BOTTOM,
	LEFT_TOP } from '@src/constants'

import { IToastContainer } from '@src/models'

import { Portal } from '@src/components/Portal'
import { Toast } from '@src/components/Toast'
import { ContainerForToasts } from '@src/components/ToastContainer/styles'

export const ToastContainer = forwardRef((props: IToastContainer, ref) => {
  const toastsList = instanceToast.getAllToasts()

  const [_, setUpdate] = useState<{} | null>(null)

  const handleUpdate = () => {
		setUpdate({})
	}
  useImperativeHandle(ref, () => ({
    handleUpdate: handleUpdate
  }))

  const settedPosition: string = props.position ? props.position : LEFT_TOP

	let settedAnimation: string = ''
	if (settedPosition === LEFT_TOP || settedPosition === LEFT_BOTTOM) {
		settedAnimation = props.animation ? props.animation : FROM_LEFT
	} else {
		settedAnimation = props.animation ? props.animation : FROM_RIGHT
	}

  return (
    <Portal>
      <ContainerForToasts position={settedPosition}>
        {
          toastsList.map(toast => (
            <Toast 
              key={toast.id}
              position={settedPosition}
              animation={settedAnimation}
              {...toast}
            />
          ))
        }
      </ContainerForToasts>
    </Portal>
  )
})