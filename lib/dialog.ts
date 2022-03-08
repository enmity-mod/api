import { getModule } from "./module";

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

/**
 * Show a dialog box
 */
function showDialog(options: DialogOptions = { title: "Default dialog" }) {
  window.enmity.dialog.showDialog(options);
}

export {
  showDialog
}