export enum Types {
    INFO = 'info',
    WARNING = 'warning',
    ERROR = 'error',
    SUCCESS = 'success'
}

export enum Positions {
    LEFT_TOP = 'LEFT_TOP',
    LEFT_BOTTOM = 'LEFT_BOTTOM',
    RIGHT_TOP = 'RIGHT_TOP',
    RIGHT_BOTTOM = 'RIGHT_BOTTOM'
}

export enum Animations {
    FROM_LEFT = 'FROM_LEFT',
    FROM_TOP = 'FROM_TOP',
    FROM_RIGHT = 'FROM_RIGHT',
    FROM_BOTTOM = 'FROM_BOTTOM',
    TO_LEFT = 'TO_LEFT',
    TO_TOP = 'TO_TOP',
    TO_RIGHT = 'TO_RIGHT',
    TO_BOTTOM = 'TO_BOTTOM'
}

export enum Delays {
    DEFAULT_DELAY_DELETE = 3000,
    DEFAULT_ANIM_DELAY = 1000
}

export const inputNames: string[] = [
    'title', 
    'description', 
    'backgroundColor', 
    'textColor', 
    'delayForDelete'
]

export const inputDescipription: string[] = [
    'Toast Title*', 
    'Toast Description (optional)', 
    'Background Color (optional)', 
    'Text Color (optional)', 
    'Delay For Delete'
]

export const inputPlaceholder: string[] = [
    'Enter toast title', 
    'Enter toast description', 
    'Enter toast background color', 
    'Enter toast text color', 
    'Enter toast delay for delete'
]

export const selectNames: string[] = ['position','animation']
export const selectDescriptions: string[] = ['Position','Animation']
export const selectValues: [string[], string[]] = [
    ['RIGHT_TOP',
    'LEFT_TOP', 
    'LEFT_BOTTOM', 
    'RIGHT_BOTTOM'],
    ['FROM_RIGHT', 
    'FROM_LEFT', 
    'FROM_TOP', 
    'FROM_BOTTOM']
]
export const selectDescripValues: [string[], string[]] = [
    ['Right Top', 
    'Left Top', 
    'Left Bottom', 
    'Right Bottom'],
    ['From Right', 
    'From Left', 
    'From Top', 
    'From Bottom']
]