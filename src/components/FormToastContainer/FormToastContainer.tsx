import React, { ChangeEvent, FC } from 'react'
import { IFormToastContainer } from '@src/interfaces'
import { InputGroup } from '@components/InputGroup'
import { SelectGroup } from '@components/SelectGroup'
import { Form } from '@components/FormToast/styled'

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
        <Form>
            <SelectGroup 
                name='position' 
                values={[ 'RIGHT_TOP', 'LEFT_TOP', 'LEFT_BOTTOM', 'RIGHT_BOTTOM']} 
                valuesDescription={['Right Top', 'Left Top', 'Left Bottom', 'Right Bottom']}
                onChange={handlePositionChange}
                description='Position'
            />
            <SelectGroup 
                name='animation' 
                values={['FROM_RIGHT', 'FROM_LEFT', 'FROM_TOP', 'FROM_BOTTOM']} 
                valuesDescription={['From Right', 'From Left', 'From Top', 'From Bottom']}
                onChange={handleAnimationChange}
                description='Animation'
            />
            <InputGroup type='text' name='space' value={space} onChange={handleSpaceChange} description='Toast Space (px)' placeholder='Enter toast space in px'/>
        </Form>
  )
}

export default FormToastContainer