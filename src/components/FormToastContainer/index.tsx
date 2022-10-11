import React, { ChangeEvent, FC } from 'react'
import { IFormToastContainer } from '@interfaces'
import { 
    selectDescriptions, 
    selectDescripValues, 
    selectNames, 
    selectValues 
} from '@constants'
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

    const handlers = [handlePositionChange, handleAnimationChange]
    return (
        <Form>
            {selectNames.map((item, index) => (
                <SelectGroup 
                    key={item}
                    name={item}
                    values={selectValues[index]}
                    valuesDescription={selectDescripValues[index]}
                    onChange={handlers[index]}
                    description={selectDescriptions[index]}
                />
            ))}
            <InputGroup 
                type='text' 
                name='space' 
                value={space} 
                onChange={handleSpaceChange} 
                description='Toast Space (px)' 
                placeholder='Enter toast space in px'
            />
        </Form>
  )
}

export default FormToastContainer