'use client';
import { ForwardedRef } from 'react';

import clsx from 'clsx';

import MenuItem from '@/components/templates/MenuItem';
import MenuStyle from '@/components/templates/styles/Menu.module.scss';
import { TypeMenu } from '@/types/menu';

interface TypeMenuList {
  className?: string;
  menuRef?: ForwardedRef<HTMLMenuElement>;
  list: Array<TypeMenu>;
}

const Menu = ({ className, list, menuRef }: TypeMenuList) => {
  return (
    <menu ref={menuRef} className={clsx(MenuStyle.container, className)}>
      {list.map((item, index) => (
        <li key={index} className={MenuStyle.item}>
          <MenuItem {...item} />
        </li>
      ))}
    </menu>
  );
};

export default Menu;
