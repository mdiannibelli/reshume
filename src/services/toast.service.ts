import type { ToastConfig } from "@/interfaces";
import { ToastType } from "@/enums";
import { createToast } from "@/lib";

export const ToastService = () => {
  return {
    success: (message: string, config?: ToastConfig) => {
      createToast(message, ToastType.SUCCESS, config);
    },
    error: (message: string, config?: ToastConfig) => {
      createToast(message, ToastType.ERROR, config);
    },
    info: (message: string, config?: ToastConfig) => {
      createToast(message, ToastType.INFO, config);
    },
    warning: (message: string, config?: ToastConfig) => {
      createToast(message, ToastType.WARNING, config);
    },
  };
};

export default ToastService;
