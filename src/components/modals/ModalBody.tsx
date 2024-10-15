"use client";

import { TModalBodyProps } from "@/types";
import { useEffect } from "react";

const ModalBody: React.FC<TModalBodyProps> = ({ modal }) => {
  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "auto";
    };
  }, []);

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
      {modal}
    </div>
  );
};

export default ModalBody;
