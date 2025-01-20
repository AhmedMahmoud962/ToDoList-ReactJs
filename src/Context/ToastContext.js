import { useContext, useState } from "react";
import { createContext } from "react";
import MySnackBar from "../Components/MysnakBar";

const ToastContext = createContext();

export const ToastProvider = ({ children }) => {
  const [open, setOpen] = useState(false);
  const [toastMessage, setToastMessage] = useState("");
  function HideShowToast(message) {
    setToastMessage(message);
    setOpen(true);
    setTimeout(() => {
      setOpen(false);
    }, 3000);
  }
  return (
    <ToastContext.Provider value={{ HideShowToast }}>
      <MySnackBar open={open} toastMessage={toastMessage} />
      {children}
    </ToastContext.Provider>
  );
};

// this line is used to access the context from any component
export const useToast = () => {
  return useContext(ToastContext);
};
