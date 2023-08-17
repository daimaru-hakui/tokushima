"use client";

export const useModal = (setIsModal: (payload: boolean) => void) => {
  const onOpen = () => setIsModal(true);
  const onClose = () => {
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
  return { onOpen, onClose };
};
