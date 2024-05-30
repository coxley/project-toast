import React from "react";

import Button from "../Button";

import styles from "./ToastPlayground.module.css";
import Toast from "../Toast";
import ToastShelf from "../ToastShelf";
import { ToastContext } from "../ToastProvider";

const VARIANT_OPTIONS = ["notice", "warning", "success", "error"];
const DEFAULT_VARIANT = VARIANT_OPTIONS[0];

function ToastPlayground() {
  const textAreaRef = React.useRef();
  const [msg, setMsg] = React.useState("");
  const [variant, setVariant] = React.useState(DEFAULT_VARIANT);
  const [toasts, addToast, removeToast] = React.useContext(ToastContext);

  function handleSubmit(e) {
    e.preventDefault();

    const id = Math.random();

    // @ts-ignore
    addToast({
      id,
      variant,
      msg,
    });

    setMsg("");
    setVariant(DEFAULT_VARIANT);
    textAreaRef.current.focus();
  }

  return (
    <div className={styles.wrapper}>
      <header>
        <img alt="Cute toast mascot" src="/toast.png" />
        <h1>Toast Playground</h1>
      </header>

      <ToastShelf toasts={toasts} />

      <form className={styles.controlsWrapper} onSubmit={handleSubmit}>
        <div className={styles.row}>
          <label
            htmlFor="message"
            className={styles.label}
            style={{ alignSelf: "baseline" }}
          >
            Message
          </label>
          <div className={styles.inputWrapper}>
            <textarea
              ref={textAreaRef}
              id="message"
              className={styles.messageInput}
              value={msg}
              onChange={(e) => {
                setMsg(e.target.value);
              }}
            />
          </div>
        </div>

        <div className={styles.row}>
          <div className={styles.label}>Variant</div>
          <div className={`${styles.inputWrapper} ${styles.radioWrapper}`}>
            {VARIANT_OPTIONS.map((v) => (
              <label key={v} htmlFor={`variant-${v}`}>
                <input
                  id={`variant-${v}`}
                  type="radio"
                  name="variant"
                  value={v}
                  checked={variant == v}
                  onChange={(e) => {
                    setVariant(e.target.value);
                  }}
                />
                {v}
              </label>
            ))}
          </div>
        </div>

        <div className={styles.row}>
          <div className={styles.label} />
          <div className={`${styles.inputWrapper} ${styles.radioWrapper}`}>
            <Button>Pop Toast!</Button>
          </div>
        </div>
      </form>
    </div>
  );
}

export default ToastPlayground;
