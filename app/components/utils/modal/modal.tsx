"use client";
import React, { FC, useState } from "react";
import styles from "./modal.module.css";
import { Button } from "../button";
import { MdClose } from "react-icons/md";

type Props = {
  children: React.ReactNode;
  title: string;
  size?: "xs" | "sm" | "md" | "lg";
  isModal: boolean;
  setIsModal: (payload: boolean) => void;
};

export const Modal: FC<Props> = ({
  children,
  title,
  size = "md",
  isModal,
  setIsModal,
}) => {
  const [isActive, setIsActive] = useState(false);

  const onClose = () => {
    const modal = document.getElementById("modal");
    if (modal) {
      let i = 1;
      const fadeOut = () => {
        setTimeout(() => {
          modal.style.opacity = i.toString();
          i = i - 0.02;
          if (i < 0) {
            setIsModal(false);
            setIsActive(false);
            return;
          }
          fadeOut();
        }, 1);
      };
      fadeOut();
    }
  };

  const onOpen = (e:any) => {
    setIsModal(true);
    setIsActive(true);
  };

  return (
    <>
      <Button type="button" bg="bg-black" size={size} onClick={(e)=>onOpen(e)}>
        {title}
      </Button>
      {isModal && (
        <div id="modal">
          <div
            className={`modal ${styles.overlay} ${isActive && styles.isActive}`}
            onClick={onClose}
          ></div>
          <div
            className={`modal ${styles.content} ${isActive && styles.isActive}`}
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
      )}
    </>
  );
};
