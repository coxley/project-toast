import React from "react";

import Toast from "../Toast";
import styles from "./ToastShelf.module.css";

function ToastShelf({ toasts }) {
  return (
    <ol
      className={styles.wrapper}
      role="region"
      aria-live="polite"
      aria-label="Notification"
    >
      {toasts.map((v) => {
        return (
          <li key={v?.key || Math.random()} className={styles.toastWrapper}>
            {v}
          </li>
        );
      })}
    </ol>
  );
}

export default ToastShelf;
