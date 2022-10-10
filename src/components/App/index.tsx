import React, { useState } from 'react';
import FormToast from '@components/FormToast';
import FormToastContainer from '@components/FormToastContainer';
import { ToastInit } from '@components/ToastInit';

export const App = () => {
  const [position, setPosition] = useState('RIGHT_TOP')
  const [animation, setAnimation] = useState('FROM_RIGHT')
  const [space, setSpace] = useState('0');

  return <>
    <FormToastContainer 
      setPosition={setPosition} 
      setAnimation={setAnimation} 
      setSpace={setSpace} 
      space={space}
    />
    <FormToast />
    <ToastInit 
      position={position} 
      animation={animation} 
      space={space}
    />
  </>;
}
