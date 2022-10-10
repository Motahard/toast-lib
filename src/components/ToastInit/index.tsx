import React, { useRef, useEffect, FC } from 'react'
import { instanceToast } from '@services'
import { IToastContainer } from '@interfaces'
import { ToastContainer } from '@components/ToastContainer'

export const ToastInit: FC<IToastContainer> = ({ position, animation, space }) => {
    const toastsRef = useRef()

    useEffect(() => {
          if (toastsRef.current) {
              instanceToast.init(toastsRef.current)
          }
      }, [])

    return (
        <ToastContainer 
            ref={toastsRef} 
            position={position} 
            animation={animation} 
            space={space}
        />
    )
}