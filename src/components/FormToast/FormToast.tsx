import React, { ChangeEvent, Component, FormEvent } from 'react'
import { Delays } from '@src/constants'
import { instanceToast } from '@src/logic/ToastService'
import { IToast } from '@src/interfaces'

interface IProps {}
interface IState extends Omit<IToast, 'id'> {}

export default class FormToast extends Component<IProps, IState> {  
    constructor(props: IProps) {
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
            } as Pick<IState, any>)
        }
    }

    handleSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        instanceToast.generateToast({...this.state})
    }
    
    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <div>
                    <label htmlFor="type">Type Toast*</label>
                    <select
                       name="type" 
                       id="type" 
                       onChange={this.handleChange} 
                       value={this.state.type}
                    >
                        <option value="success">Success</option>
                        <option value="info">Information</option>
                        <option value="warning">Warning</option>
                        <option value="error">Error</option>
                    </select>
                </div>
                <div>
                    <label htmlFor="title">Toast Title*</label>
                    <input 
                        type="text" 
                        id='title'
                        name='title' 
                        placeholder='Title'
                        value={this.state.title}
                        onChange={this.handleChange}
                    />
                </div>
                <div>
                    <label htmlFor="description">Toast Description (optional)</label>
                    <input 
                        type="text" 
                        id='description' 
                        name='description' 
                        placeholder='Description'
                        value={this.state.description}
                        onChange={this.handleChange}
                    />
                </div>
                <div>
                    <label htmlFor="backgroundColor">Background Color (optional)</label>
                    <input 
                        type="text" 
                        id='backgroundColor' 
                        name='backgroundColor' 
                        placeholder='Background color'
                        value={this.state.backgroundColor}
                        onChange={this.handleChange}
                    />
                </div>
                <div>
                    <label htmlFor="textColor">Text Color (optional)</label>
                    <input 
                        type="text" 
                        id='textColor' 
                        name='textColor' 
                        placeholder='Text color'
                        value={this.state.textColor}
                        onChange={this.handleChange}
                    />
                </div>
                <div>
                    <label htmlFor="autoDelete">Auto delete</label>
                    <input 
                        type="checkbox" 
                        id="autoDelete" 
                        name='autoDelete'
                        onChange={this.handleChange}
                        checked={this.state.autoDelete}
                    />
                </div>
                <div>
                    <label htmlFor="delayForDelete">Delay For Delete</label>
                    <input 
                        type="text"
                        id="delayForDelete" 
                        name='delayForDelete'
                        value={this.state.delayForDelete}
                        onChange={this.handleChange}
                     />
                </div>
                <button type='submit'>
                     Add
                </button>
            </form>
    )
  }
}
