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
  onClick?: (e:any) => void;
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
    md: 'px-4 p-[9px] text-base',
    lg: 'px-5 py-3 text-lg',
  };

  return (
    <button
      onClick={onClick}
      type={type}
      className={`${w} flex items-center justify-center font-semibold rounded-md cursor-pointer ${color} ${bg} ${sizeObj[size]} hover:opacity-80 ${className}`}
    >
      {children}
    </button>
  );
};