import React, { FC } from 'react'
import { IInputGroup } from '@src/interfaces'
import { Input, InputContainer, InputTitle } from '@components/InputGroup/styled'

export const InputGroup: FC<IInputGroup> = ({ type, name, value, onChange, description, placeholder }) => {
  return (
    <InputContainer>
        <InputTitle htmlFor='space'>{description}</InputTitle>
        <Input 
            type={type} 
            name={name}
            value={value} 
            onChange={onChange}
            placeholder={placeholder}
        />
    </InputContainer>
  )
}