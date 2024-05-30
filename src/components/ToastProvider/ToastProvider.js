import React from "react";
import Toast from "../Toast";
import useEscape from "../../hooks/useEscape";

export const ToastContext = React.createContext([
  [],
  ({ id, variant, msg }) => {},
  (id) => {},
]);

function ToastProvider({ children }) {
  const [toasts, setToasts] = React.useState([]);
  useEscape(() => setToasts([]));

  function addToast({ id, variant, msg }) {
    setToasts([
      <Toast key={id} variant={variant} onClose={() => removeToast(id)}>
        {msg}
      </Toast>,
      ...toasts,
    ]);
  }

  /**
   * @param {any} id
   */
  function removeToast(id) {
    setToasts((v) => v.filter((v) => v.key != id));
  }

  const value = React.useMemo(() => {
    return [toasts, addToast, removeToast];
  }, [toasts]);

  return (
    <ToastContext.Provider value={value}>{children}</ToastContext.Provider>
  );
}

export default React.memo(ToastProvider);
