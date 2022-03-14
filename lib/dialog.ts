/**
 * Options for a dialog box.
 */
export interface DialogOptions {
  /**
   * Title of the dialog.
   */
  title: string;

  /**
   * Body of the dialog.
   */
  body?: string;

  /**
   * Text for the confirmation button.
   */
  confirmText?: string;

  /**
   * Color of the confirmation button.
   */
  confirmColor?: string;

  /**
   * Text for the secondary confirmation button.
   */
  secondaryConfirmText?: string;

  /**
   * Text for the cancel button.
   */
  cancelText?: string;

  /**
   * Function for when the confirmation button is clicked.
   */
  onConfirm?: () => void;

  /**
   * Function for when the secondary confirmation button is clicked.
   */
  onSecondaryConfirm?: () => void;

  /**
   * Function for when the cancel button is clicked.
   */
  onCancel?: () => void;
}

/**
 * Show a dialog box.
 * @param {DialogOptions} options Options for the dialog box
 */
export function showDialog(options: DialogOptions = { title: 'Default dialog' }): void {
  window.enmity.dialog.showDialog(options);
}
