export interface ToastMessage {
    content: string;
    source: number;
}
export declare function showToast(message: ToastMessage): void;
