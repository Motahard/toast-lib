import React from "react";
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { Toast } from '../components/Toast/Toast'

export default {
    title: 'Toast',
    component: Toast,
    argTypes: {
        type: {
            type: 'string',
            description: 'Toast type',
            defaultValue: 'success',
            options: ['success', 'info', 'warning', 'error'],
            control: {
                type: 'radio',
            },
        },
        position: {
            type: 'string',
            description: 'Toast positon',
            defaultValue: 'LEFT_TOP',
            options: ['LEFT_TOP', 'LEFT_BOTTOM', 'RIGHT_TOP', 'RIGHT_BOTTOM'],
            control: {
                type: 'radio',
            },
        },
        animation: {
            type: 'string',
            description: 'Toast animation',
            defaultValue: 'FROM_LEFT',
            options: ['FROM_LEFT', 'FROM_RIGHT', 'FROM_TOP', 'FROM_BOTTOM'],
            control: {
                type: 'radio',
            },
        }
    }
} as ComponentMeta<typeof Toast>

export const ToastTemplate: ComponentStory<typeof Toast> = (args) => {
    return <Toast {...args}/>
}
ToastTemplate.args = {
    title: 'Success Toast',
    description: 'Success Toast Description',
    autoDelete: true
}