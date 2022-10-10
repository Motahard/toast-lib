import React, { ChangeEvent, Component, FormEvent } from 'react'
import { Delays } from '@constants'
import { instanceToast } from '@services'
import { IFormToastProps, IFormToastState } from '@interfaces'
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
            autoDelete: true,
            delayForDelete: Delays.DEFAULT_DELAY_DELETE
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
                <InputGroup 
                    type='text' 
                    name='title' 
                    value={this.state.title} 
                    onChange={this.handleChange} 
                    description='Toast Title*'
                    placeholder='Enter toast title'
                />
                <InputGroup 
                    type='text' 
                    name='description' 
                    value={this.state.description} 
                    onChange={this.handleChange} 
                    description='Toast Description (optional)'
                    placeholder='Enter toast description'
                />
                <InputGroup 
                    type='text' 
                    name='backgroundColor' 
                    value={this.state.backgroundColor} 
                    onChange={this.handleChange} 
                    description='Background Color (optional)'
                    placeholder='Enter toast background color'
                />
                <InputGroup 
                    type='text' 
                    name='textColor' 
                    value={this.state.textColor} 
                    onChange={this.handleChange} 
                    description='Text Color (optional)'
                    placeholder='Enter toast text color'
                />
                <InputGroup 
                    type='checkbox' 
                    name='autoDelete' 
                    value={(this.state.autoDelete)?.toString()} 
                    onChange={this.handleChange} 
                    description='No autodelete'
                />
                <InputGroup 
                    type='text' 
                    name='delayForDelete' 
                    value={this.state.delayForDelete} 
                    onChange={this.handleChange} 
                    description='Delay For Delete'
                    placeholder='Enter toast delay for delete'
                />
                <Button type='submit'>
                     Add
                </Button>
            </Form>
    )
  }
}
