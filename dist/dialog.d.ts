interface DialogOptions {
    title: string;
    body?: string;
    confirmText?: string;
    confirmColor?: string;
    secondaryConfirmText?: string;
    cancelText?: string;
    onConfirm?: () => void;
    onSecondaryConfirm?: () => void;
    onCancel?: () => void;
}
declare function showDialog(options?: DialogOptions): void;
export { showDialog };
