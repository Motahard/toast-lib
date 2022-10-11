import React, { ChangeEvent, Component, FormEvent } from 'react'
import { 
    Delays, 
    inputNames, 
    inputDescipription, 
    inputPlaceholder 
} from '@constants'
import { instanceToast } from '@services'
import { 
    IFormToastProps, 
    IFormToastState, 
    KeysStateInputs 
} from '@interfaces'
import { InputGroup } from '@components/InputGroup'
import { SelectGroup } from '@components/SelectGroup'
import { Form, Button } from '@components/FormToast/styled'

export default class FormToast extends Component<IFormToastProps, IFormToastState> {  
    constructor(props: IFormToastProps) {
        super(props)
        this.state = {
            type: 'success',
            title: '',
            description: '',
            backgroundColor: '',
            textColor: '',
            delayForDelete: Delays.DEFAULT_DELAY_DELETE,
            autoDelete: true
        }
    }

    handleChange = (e: ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
        const { name, value } = e.target
        if (name === 'autoDelete') {
            this.setState((prev) => ({autoDelete: !prev.autoDelete}))
        } else {
            this.setState({
                [name]: value
            } as Pick<IFormToastState, any>)
        }
    }

    handleSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        instanceToast.generateToast({...this.state})
    }
    
    render() {
        
        return (
            <Form onSubmit={this.handleSubmit}>
                <SelectGroup 
                    name='type' 
                    values={['success', 'info', 'warning', 'error']}
                    valuesDescription={['Success', 'Information', 'Warning', 'Error']}
                    onChange={this.handleChange}
                    description='Type Toast*'
                    value={this.state.type}
                />
                {inputNames.map((item, index) => ( 
                    <InputGroup 
                        key={item}
                        type='text'
                        name={item}
                        onChange={this.handleChange} 
                        value={this.state[item as KeysStateInputs]} 
                        description={inputDescipription[index]} 
                        placeholder={inputPlaceholder[index]}
                    /> 
                ))}
                <InputGroup 
                    type='checkbox' 
                    name='autoDelete' 
                    value={(this.state.autoDelete)?.toString()} 
                    onChange={this.handleChange} 
                    description='No autodelete'
                />
                <Button type='submit'>
                     Add
                </Button>
            </Form>
    )
  }
}
