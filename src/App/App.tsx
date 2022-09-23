import React, { useRef, useEffect } from 'react';
import { ToastContainer } from '@src/components/ToastContainer'
import { instanceToast } from '@src/logic/ToastService';

export const App = () => {
  const toastsRef = useRef()
  useEffect(() => {
		if (toastsRef.current) {
			instanceToast.init(toastsRef.current)
		}
	}, [])

  return <>
    <button onClick={() => 
      instanceToast.generateToast({
        title: 'Hi',
        type: 'success',
        autoDelete: true
      })}
    >
      Add
    </button>
    <ToastContainer ref={toastsRef} />
  </>;
}
