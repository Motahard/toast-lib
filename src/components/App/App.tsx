import React, { useRef, useEffect, useState } from 'react';
import { instanceToast } from '@src/logic/ToastService';

import { ToastContainer } from '@components/ToastContainer'
import FormToast from '@components/FormToast/FormToast';
import FormToastContainer from '@components/FormToastContainer/FormToastContainer';

export const App = () => {
  const [position, setPosition] = useState('RIGHT_TOP')
  const [animation, setAnimation] = useState('FROM_RIGHT')
  const [space, setSpace] = useState('0');

  const toastsRef = useRef()
  useEffect(() => {
		if (toastsRef.current) {
			instanceToast.init(toastsRef.current)
		}
	}, [])

  return <>
    <FormToastContainer 
      setPosition={setPosition} 
      setAnimation={setAnimation} 
      setSpace={setSpace} 
      space={space}
    />
    <FormToast />
    <ToastContainer 
      ref={toastsRef} 
      position={position} 
      animation={animation} 
      space={space}
    />
  </>;
}
