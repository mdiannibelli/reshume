import type { ToastConfig } from "@/interfaces";
import type { ToastType } from "@/types";
import { Bounce, toast } from "react-toastify";

export const createToast = (
  message: string,
  type: ToastType,
  config?: ToastConfig
): void => {
  toast[type](message, {
    transition: Bounce,
    ...config,
  });
};
