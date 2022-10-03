import { v4 as uuid } from 'uuid'
import { IRefUpdate, IToast } from '@src/interfaces/index';
import { toastsList } from '@src/data/toasts';
import { Delays } from '@src/constants';

export class ToastService {
    private static instance: ToastService;
    private toasts: IToast[]
    refUpdate: IRefUpdate

    constructor() {
        this.toasts = []
        this.refUpdate = { handleUpdate() {} }
    }

    public static getInstance(): ToastService {
        if (ToastService.instance) {
			return ToastService.instance
		}
		return (ToastService.instance = new ToastService())
    }

    public init(ref: IRefUpdate) {
        this.refUpdate = ref
    }

    public getAllToasts = (): IToast[] => {
        return this.toasts
    }

    private addToast = (toast: IToast): void => {
        if (this.toasts.length < 3) {
            this.toasts.push(toast)
            this.refUpdate?.handleUpdate()
        }
    }

    public removeToast = (toastToDeleteID: string): void => {
        this.toasts = this.toasts.filter(
            toast => toast.id !== toastToDeleteID
        )
        this.refUpdate?.handleUpdate()
    }

    public removeToastWithDelay = (toastToDeleteID: string, delayForDelete: number = Delays.DEFAULT_DELAY_DELETE): void => {
        setTimeout(() => {
            this.toasts = this.toasts.filter(
                toast => toast.id !== toastToDeleteID
            )
            this.refUpdate?.handleUpdate()
        }, delayForDelete)
    }

    public generateToast = (toastOptions: Omit<IToast, 'id'>): void => {
        this.addToast({
            id: uuid(),
            ...toastOptions
        })
    }
}

export const instanceToast = ToastService.getInstance();