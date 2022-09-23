import React, { MouseEvent, useEffect, useState } from 'react'
import { ThemeProvider } from 'styled-components'

import { 
  DEFAULT_ANIM_DELAY, 
  DEFAULT_DELAY_DELETE, 
  FROM_BOTTOM, 
  FROM_LEFT, 
  FROM_RIGHT, 
  FROM_TOP,
  LEFT_TOP, 
  LEFT_BOTTOM,
  RIGHT_TOP,
  RIGHT_BOTTOM 
} from '@src/constants'

import { instanceToast } from '@src/logic/ToastService'
import { ICreateToast } from '@src/models'
import { changeAnimation } from '@src/helpers/utils'

import { defaultTheme } from '@src/styles/theme'
import {
  ToastWrapper,
  Logo,
  TextContainer,
  Title,
  Description,
  CloseButton
} from '@src/components/Toast/styles'

export const Toast: React.FC<ICreateToast> = ({
    id, 
    type,
    title, 
    description, 
    autoDelete = false, 
    delayForDelete = DEFAULT_DELAY_DELETE,
    position, 
    animation
  }) => {
    const [currentAnimation, setCurrentAnimation] = useState(animation)
    let positionX: number
    let positionY: number

    useEffect(() => {
      if(autoDelete) {
        instanceToast.removeToastWithDelay(id, delayForDelete)
        
        const changeAnimTimeout = 
        setTimeout(() => {
          setCurrentAnimation(changeAnimation(currentAnimation))
        }, delayForDelete - DEFAULT_ANIM_DELAY)

        return () => clearTimeout(changeAnimTimeout)
      }
    }, [])
    
    const handleDelete = () => {
      setCurrentAnimation(changeAnimation(currentAnimation))
      setTimeout(() => {
        instanceToast.removeToast(id)
      }, DEFAULT_ANIM_DELAY)
    }

    const handleMouseDown = (e: MouseEvent<HTMLDivElement>) => {
      positionX = e.clientX
      positionY = e.clientY
    }

    const handleMouseUp = (e: MouseEvent<HTMLDivElement>) => {
      if (position === LEFT_TOP || position === LEFT_BOTTOM) {
        switch (animation) {
          case FROM_LEFT: {
            positionX > e.clientX && handleDelete()
            break
          }
          case FROM_TOP: {
            positionY > e.clientY && handleDelete()
            break
          }
          case FROM_BOTTOM: {
            positionY < e.clientY && handleDelete()
            break
          }
          default:
            break
        }
      }
      else if (position === RIGHT_TOP || position === RIGHT_BOTTOM) {
        switch (animation) {
          case FROM_RIGHT: {
            positionX < e.clientX && handleDelete()
            break
          }
          case FROM_TOP: {
            positionY > e.clientY && handleDelete()
            break
          }
          case FROM_BOTTOM: {
            positionY < e.clientY && handleDelete()
            break
          }
          default:
            break
        }
      }
    }

    return (
      <ThemeProvider theme={defaultTheme}>
        <ToastWrapper 
          type={type} 
          position={position} 
          animation={currentAnimation}
          onMouseUp={handleMouseUp}
				  onMouseDown={handleMouseDown}
        >
          <Logo type={type}/>
          <TextContainer type={type}>
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