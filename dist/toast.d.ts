interface ToastMessage {
    content: string;
    source: number;
}
declare function showToast(message: ToastMessage): void;
export { showToast };
