'use client';
import React, { FC } from 'react';

type Props = {
  children: React.ReactNode;
  type?: 'button' | 'submit' | 'reset' | undefined;
  bg?: string;
  color?: string;
  size?: 'xs' | 'sm' | 'md' | 'lg';
  w?: string;
  className?: string;
  onClick?: () => void;
};

export const Button: FC<Props> = ({
  children,
  type = undefined,
  size = 'md',
  w = 'w-auto',
  bg = 'bg-transparent',
  color = 'text-white',
  className = '',
  onClick,
}) => {
  const sizeObj = {
    xs: 'px-2 py-1 text-xs',
    sm: 'px-3 py-2 text-sm',
    md: 'px-4 p-[10px] text-base',
    lg: 'px-5 py-3 text-lg',
  };

  return (
    <button
      onClick={onClick}
      type={type}
      className={`${w} font-semibold rounded-md shadow-sm cursor-pointer ${color} ${bg} ${sizeObj[size]} hover:opacity-90 ${className}`}
    >
      {children}
    </button>
  );
};