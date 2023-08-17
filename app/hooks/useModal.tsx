"use client";
import { useState } from "react";

export const useModal = () => {
  const [isModal, setIsModal] = useState(false);
  const onOpen = () => setIsModal(true);
  const onClose = (e: any) => {
    const modal = document.getElementById("modal");
    if (modal) {
      let i = 1;
      const fadeOut = () => {
        setTimeout(() => {
          modal.style.opacity = i.toString();
          i = i - 0.02;
          if (i <= 0) {
            setIsModal && setIsModal(false);
            window.document.body.style.overflowY = "auto";
            return;
          }
          fadeOut();
        }, 1);
      };
      fadeOut();
    }
  };
  return{isModal,setIsModal,onOpen,onClose}
};
