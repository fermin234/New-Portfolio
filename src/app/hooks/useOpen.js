import { useState } from "react";

export default function useOpen(initialValue = false) {
  const [isOpen, setIsOpen] = useState(initialValue);

  const open = () => {
    setIsOpen(true);
  };

  const close = () => {
    setIsOpen(false);
  };

  return { isOpen, open, close };
}
