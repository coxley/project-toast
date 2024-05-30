import React from "react";

/**
 * @param {() => void} cb
 */
function useEscape(cb) {
  React.useEffect(() => {
    /**
     * @param {{ key: string; }} e
     */
    function handleKey(e) {
      if (e.key == "Escape") {
        cb();
      }
    }
    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, [cb]);
}

export default useEscape;
