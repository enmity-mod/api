interface ToastMessage {
  content: string;
  source: number;
}

function showToast(message: ToastMessage) {
  window.enmity.toast.showToast(message);
}

export {
  showToast
}