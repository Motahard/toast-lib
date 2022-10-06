import React, { ChangeEvent, FC } from 'react'
import { IFormToastContainer } from '@src/interfaces'
import { InputGroup } from '@components/InputGroup'
import { SelectGroup } from '@components/SelectGroup'

const FormToastContainer: FC<IFormToastContainer> = ({ setAnimation, setPosition, setSpace, space }) => {
    const handlePositionChange = (e: ChangeEvent<HTMLSelectElement>) => {
        const { value } = e.target
        setPosition(value)
    }

    const handleAnimationChange = (e: ChangeEvent<HTMLSelectElement>) => {
        const { value } = e.target
        setAnimation(value)
    }

    const handleSpaceChange = (e: ChangeEvent<HTMLInputElement>) => {
        const { value } = e.target
        setSpace(value)
    }

    return (
        <>
            <SelectGroup 
                name='position' 
                values={['LEFT_TOP', 'LEFT_BOTTOM', 'RIGHT_TOP', 'RIGHT_BOTTOM']} 
                valuesDescription={['Left Top', 'Left Bottom', 'Right Top', 'Right Bottom']}
                onChange={handlePositionChange}
                description='Position'
            />
            <SelectGroup 
                name='animation' 
                values={['FROM_LEFT', 'FROM_RIGHT', 'FROM_TOP', 'FROM_BOTTOM']} 
                valuesDescription={['From Left', 'From Right', 'From Top', 'From Bottom']}
                onChange={handleAnimationChange}
                description='Animation'
            />
            <InputGroup type='text' name='space' value={space} onChange={handleSpaceChange} description='Toast Space (px)' placeholder='Enter toast space in px'/>
        </>
  )
}

export default FormToastContainer