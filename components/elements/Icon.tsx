'use client';
import { HTMLAttributes, FunctionComponent, SVGProps, createElement, DetailedHTMLProps } from 'react';

import clsx from 'clsx';

import ElementStyle from '@/components/elements/styles/elements.module.scss';

interface TypeIcon extends DetailedHTMLProps<HTMLAttributes<HTMLElement>, HTMLElement> {
  svg: FunctionComponent<SVGProps<SVGSVGElement>>;
}

const Icon = ({ svg, className, ...props }: TypeIcon) => {
  const element = createElement(svg);
  return (
    <i className={clsx(ElementStyle.icon, className)} {...props}>
      {element}
    </i>
  );
};

export default Icon;
