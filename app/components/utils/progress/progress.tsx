"use client";
import React, { FC, useState, useEffect } from "react";
import Styles from "./progress.module.css";

type Props = {
  progressNumber?: number;
  progressArray: string[];
  className?:string;
};

export const Progress: FC<Props> = ({
  progressNumber = 1,
  progressArray = [],
  className
}) => {
  const circles = progressArray;
  const TOTAL = circles.length;
  const [currentNumber, setCurrentNumber] = useState(progressNumber);
  const [progressLength, setProgressLength] = useState(0);

  const handleNext = () => {
    if (currentNumber >= TOTAL) {
      setCurrentNumber(TOTAL);
    } else {
      setCurrentNumber((prev) => prev + 1);
    }
  };
  const handlePrev = () => {
    if (currentNumber <= 1) {
      setCurrentNumber(1);
    } else {
      setCurrentNumber((prev) => prev - 1);
    }
  };

  useEffect(() => {
    setProgressLength((currentNumber - 1) / (TOTAL - 1));
  }, [currentNumber, TOTAL]);

  return (
    <>
      <div className={`${Styles.container} ${className}`}>
        <div className={`${Styles.progressContainer}`}>
          <div
            className={`${Styles.progress}`}
            style={{ width: progressLength * 100 + "%" }}
          ></div>
          {circles.map((circle, idx) => (
            <div
              key={circle}
              className={`${Styles.circle}`}
              style={
                currentNumber >= idx + 1
                  ? {
                      borderColor: "black",
                      backgroundColor: "black",
                      color: "white",
                    }
                  : {
                      borderColor: "rgb(215, 210, 210)",
                      backgroundColor: "white",
                      color: "black",
                    }
              }
            >
              {circle}
            </div>
          ))}
        </div>
      </div>
    </>
  );
};
