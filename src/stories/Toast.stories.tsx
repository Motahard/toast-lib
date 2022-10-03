import React from "react";
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Toast } from "../components/Toast/Toast";
import { ContainerForToasts } from "../components/ToastContainer/styled";

export default {
    title: 'Toast',
    component: Toast,
    argTypes: {
        type: {
            type: 'string',
            description: 'Toast Type',
            defaultValue: 'success',
            options: ['success', 'info', 'warning', 'error'],
            control: {
                type: 'select'
            }
        },
        position: {
            type: 'string',
            description: 'Toast Position',
            defaultValue: 'LEFT_TOP',
            options: ['LEFT_TOP', 'LEFT_BOTTOM', 'RIGHT_TOP', 'RIGHT_BOTTOM'],
            control: {
                type: 'select'
            }
        },
        animation: {
            type: 'string',
            description: 'Toast Animation',
            defaultValue: 'FROM_LEFT',
            options: ['FROM_LEFT', 'FROM_RIGHT', 'FROM_TOP', 'FROM_BOTTOM'],
            control: {
                type: 'select'
            }
        }
    }
} as ComponentMeta<typeof Toast>

export const ToastTemplate: ComponentStory<typeof Toast> = args => {
    return <ContainerForToasts {...args}>
                <Toast story={true} {...args}/>
            </ContainerForToasts>
}

ToastTemplate.args = {
    id: '0',
    title: 'Toast Title',
    description: 'Toast Description',
    autoDelete: false,
    delayForDelete: 10000,
    space: '0'
}