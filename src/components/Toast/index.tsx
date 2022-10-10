import React, { DragEvent, MouseEvent, useEffect, useRef, useState } from 'react'
import { ThemeProvider } from 'styled-components'

import { instanceToast } from '@services'
import { 
  Delays,
  Animations
} from '@constants'
import { changeAnimation } from '@utils'
import { ICreateToast } from '@interfaces'

import { defaultTheme } from '@styles'
import {
  ToastWrapper,
  Logo,
  TextContainer,
  Title,
  Description,
  CloseButton
} from '@components/Toast/styled'

export const Toast: React.FC<ICreateToast> = ({
    id, 
    type,
    title, 
    description, 
    autoDelete = false, 
    delayForDelete = Delays.DEFAULT_DELAY_DELETE,
    position, 
    animation,
    backgroundColor,
    textColor,
    story = false
  }) => {
    const [currentAnimation, setCurrentAnimation] = useState(animation)
    const [show, setShow] = useState(true)
    const changeAnimTimeout: { current: NodeJS.Timeout | null } = useRef(null)

    let [positionX, setPositionX] = useState<number>()

    useEffect(() => {
      if(autoDelete) {
        if(story) {
          setTimeout(() => setShow(false), delayForDelete)
        } else {
          instanceToast.removeToastWithDelay(id, delayForDelete)
        }
        
        changeAnimTimeout.current = 
        setTimeout(() => {
          setCurrentAnimation(changeAnimation(currentAnimation))
        }, delayForDelete - Delays.DEFAULT_ANIM_DELAY)
      }
    }, [])
    
    const handleDeleteClick = (e: MouseEvent) => {
      setCurrentAnimation(changeAnimation(currentAnimation))
      setTimeout(() => {
        if(story) setShow(false)
        instanceToast.removeToast(id)
      }, Delays.DEFAULT_ANIM_DELAY)
    }

    const handleDelete = () => {
      setTimeout(() => {
        if(story) setShow(false)
        instanceToast.removeToast(id)
      }, Delays.DEFAULT_ANIM_DELAY)
    }

    const onMouseDown = (e: DragEvent<HTMLDivElement>) => {
      e.preventDefault()
      setPositionX(e.clientX)
    }

    const onMouseMove = (e: MouseEvent<HTMLDivElement>) => {
      if(!positionX || (positionX === e.clientX)) return
      if(positionX > e.clientX) {
        setCurrentAnimation(Animations.TO_LEFT)
        handleDelete()
      } else if (positionX < e.clientX) {
        setCurrentAnimation(Animations.TO_RIGHT)
        handleDelete()
      }
    }

    if(!show) {
      return null
    }
    return (
      <ThemeProvider theme={defaultTheme}>
        <ToastWrapper 
          draggable
          type={type} 
          backgroundColor={backgroundColor}
          position={position} 
          animation={currentAnimation}
          onMouseDown={onMouseDown}
          onMouseUp={onMouseMove}
        >
          <Logo type={type}/>
          <TextContainer type={type} textColor={textColor}>
            <Title>
              {title}
            </Title>
            {description && (
              <Description>
                {description}
              </Description>
            )}
          </TextContainer>
          <CloseButton onClick={handleDeleteClick} type={type} />
        </ToastWrapper>
      </ThemeProvider>
  )
}