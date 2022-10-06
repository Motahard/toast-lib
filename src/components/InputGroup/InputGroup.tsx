import React, { FC } from 'react'
import { IInputGroup } from '@src/interfaces'

export const InputGroup: FC<IInputGroup> = ({ type, name, value, onChange, description, placeholder }) => {
  return (
    <div>
        <label htmlFor='space'>{description}</label>
        <input 
            type={type} 
            name={name}
            value={value} 
            onChange={onChange}
            placeholder={placeholder}
        />
    </div>
  )
}