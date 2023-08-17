"use client";
import React, { FC } from "react";
import styles from "./modal.module.css";
import { MdClose } from "react-icons/md";

type Props = {
  children: React.ReactNode;
  title: string;
  w?: string;
  isModal: boolean;
  setIsModal: (payload: boolean) => void;
};

export const Modal: FC<Props> = ({
  children,
  title,
  w = "auto",
  isModal,
  setIsModal,
}) => {

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
            setIsModal(false);
            window.document.body.style.overflowY = "auto";
            return;
          }
          fadeOut();
        }, 1);
      };
      fadeOut();
    }
  };

  return (
    <>
      {isModal && (
        <div id="modal" className={`modal ${styles.modal} ${isModal && styles.isActive}`}>
          <div className={`modal ${styles.overlay} ${isModal && styles.isActive}`}></div>
          <div onClick={onClose} className={`${styles.container}`} >
            <div
              onClick={(e) => e.stopPropagation()}
              style={{ width: w }}
              className={`modal ${styles.content} ${isModal && styles.isActive}`}
            >
              <div className={`${styles.header}`}>
                <div className={`${styles.title}`}>{title}</div>
                <div>
                  <MdClose className="cursor-pointer" onClick={onClose} />
                </div>
              </div>
              <div className={`${styles.body}`}>{children}</div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
