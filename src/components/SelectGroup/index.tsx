import React, { FC } from 'react'
import { v4 as uuid } from 'uuid'
import { ISelectGroup } from '@interfaces'
import { SelectContainer, SelectTitle, Select, SelectOption } from '@components/SelectGroup/styled'

export const SelectGroup: FC<ISelectGroup> = ({ name, values, onChange, description, valuesDescription, value }) => {
  return (
    <SelectContainer>
        <SelectTitle htmlFor={name}>{description}</SelectTitle>
        <Select 
            value={value}
            name={name}
            id={name}
            onChange={onChange}
        >
            {values.map((item, index) => <SelectOption key={uuid()} value={item}>{valuesDescription[index]}</SelectOption>)}
        </Select>
    </SelectContainer>
  )
}