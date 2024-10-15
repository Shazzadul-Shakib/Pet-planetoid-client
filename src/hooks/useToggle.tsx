import { TUseToggleReturn } from "@/types";
import { useState, useCallback } from "react";

const useToggle = (initialState: boolean = false): TUseToggleReturn => {
  const [isOpen, setIsOpen] = useState(initialState);

  const toggle = useCallback(() => {
    setIsOpen((prev) => !prev);
  }, []);

  return [isOpen, toggle];
};

export default useToggle;
