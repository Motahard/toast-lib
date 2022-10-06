import React, { FC, ChangeEvent } from 'react'

interface IInputGroup {
    type: string
    name: string
    value: string | undefined | number
    onChange: (e: ChangeEvent<HTMLInputElement>) => void
    description: string
    placeholder?: string
}

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