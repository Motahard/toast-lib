import React, { ChangeEvent, FC } from 'react'

interface IProps {
    setAnimation: (value: string) => void
    setPosition: (value: string) => void
    setSpace: (value: string) => void
    space: string
}

const FormToastContainer: FC<IProps> = ({ setAnimation, setPosition, setSpace, space }) => {
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
    <div>
        <form>
            <div>
                <label htmlFor='position'>Position</label>
                <select 
                    name='position' 
                    id='position' 
                    onChange={handlePositionChange}
                >
                    <option value='LEFT_TOP'>Left Top</option>
                    <option value='LEFT_BOTTOM'>Left Bottom</option>
                    <option value='RIGHT_TOP'>Right Top</option>
                    <option value='RIGHT_BOTTOM'>Right Bottom</option>
                </select>
            </div>
            <div>
            <label htmlFor='animation'>Animation</label>
                <select 
                    name='animation' 
                    id='animation' 
                    onChange={handleAnimationChange}
                >
                    <option value='FROM_LEFT'>From Left</option>
                    <option value='FROM_RIGHT'>From Right</option>
                    <option value='FROM_TOP'>From Top</option>
                    <option value='FROM_BOTTOM'>From Bottom</option>
                </select>
            </div>
            <div>
                <label htmlFor='space'>Toast Space (px)</label>
                <input 
                    type='text' 
                    name='space' 
                    value={space} 
                    onChange={handleSpaceChange}
                />
            </div>
        </form>
    </div>
  )
}

export default FormToastContainer