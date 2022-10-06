import React, { FC, ChangeEvent } from 'react'
import { v4 as uuid } from 'uuid'
import { ISelectGroup } from '@src/interfaces'

export const SelectGroup: FC<ISelectGroup> = ({ name, values, onChange, description, valuesDescription, value }) => {
  return (
    <div>
        <label htmlFor={name}>{description}</label>
        <select 
            value={value}
            name={name}
            id={name}
            onChange={onChange}
        >
            {values.map((item, index) => <option key={uuid()} value={item}>{valuesDescription[index]}</option>)}
        </select>
    </div>
  )
}