import { toast } from "react-toastify";

export const toastMessage = (message, toastId = null, type = "success") => {
  if (!toast.isActive(toastId)) toast[type](message, toastId);
};
