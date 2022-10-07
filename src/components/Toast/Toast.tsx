import React, { MouseEvent, useEffect, useRef, useState } from 'react'
import { ThemeProvider } from 'styled-components'

import { instanceToast } from '@src/logic/ToastService'
import { 
  Delays,
  Animations,
  Positions
} from '@src/constants'
import { changeAnimation } from '@src/utils'
import { ICreateToast } from '@src/interfaces'

import { defaultTheme } from '@src/styles/theme'
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

    let positionX = useRef<number>()
    let positionY = useRef<number>()

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

        return () => clearTimeout(changeAnimTimeout.current as NodeJS.Timeout)
      }
    }, [])
    
    const handleDelete = () => {
      setCurrentAnimation(changeAnimation(currentAnimation))
      setTimeout(() => {
        if(story) setShow(false)
        instanceToast.removeToast(id)
      }, Delays.DEFAULT_ANIM_DELAY)
    }

    const handleMouseDown = (e: MouseEvent<HTMLDivElement>) => {
      console.log(e.target)
      positionX.current = e.clientX
      positionY.current = e.clientY
    }

    const handleMouseUp = (e: MouseEvent<HTMLDivElement>) => {
      if(!positionX.current || !positionY.current) return
      if (position === Positions.LEFT_TOP || position === Positions.LEFT_BOTTOM) {
        switch (animation) {
          case Animations.FROM_LEFT: {
            if(positionX.current > e.clientX) handleDelete()
            break
          }
          case Animations.FROM_TOP: {
            if(positionY.current > e.clientY) handleDelete()
            break
          }
          case Animations.FROM_BOTTOM: {
            if(positionY.current < e.clientY) handleDelete()
            break
          }
          default:
            break
        }
      }
      else if (position === Positions.RIGHT_TOP || position === Positions.RIGHT_BOTTOM) {
        switch (animation) {
          case Animations.FROM_RIGHT: {
            if(positionX.current < e.clientX) handleDelete()
            break
          }
          case Animations.FROM_TOP: {
            if(positionY.current > e.clientY) handleDelete()
            break
          }
          case Animations.FROM_BOTTOM: {
            if(positionY.current < e.clientY) handleDelete()
            break
          }
          default:
            break
        }
      }
    }

    if(!show) {
      return null
    }
    return (
      <ThemeProvider theme={defaultTheme}>
        <ToastWrapper 
          type={type} 
          backgroundColor={backgroundColor}
          position={position} 
          animation={currentAnimation}
          onMouseUp={handleMouseUp}
				  onMouseDown={handleMouseDown}
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
          <CloseButton onClick={handleDelete} type={type} />
        </ToastWrapper>
      </ThemeProvider>
  )
}