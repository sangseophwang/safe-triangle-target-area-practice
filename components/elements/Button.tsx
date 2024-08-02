'use client';
import { MouseEventHandler, ButtonHTMLAttributes } from 'react';

import clsx from 'clsx';

import ElementStyle from '@/components/elements/styles/elements.module.scss';

interface TypeButton extends ButtonHTMLAttributes<HTMLButtonElement> {
  callback?: MouseEventHandler<HTMLButtonElement>;
}

const Button = ({ className = '', callback, children, ...props }: TypeButton) => {
  return (
    <button className={clsx(ElementStyle.button, className)} onClick={callback} {...props}>
      {children}
    </button>
  );
};

export default Button;
