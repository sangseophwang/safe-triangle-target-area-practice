'use client';
import { ForwardedRef, MouseEventHandler } from 'react';

import clsx from 'clsx';

import MenuItem from '@/components/templates/MenuItem';
import MenuStyle from '@/components/templates/styles/Menu.module.scss';
import { TypeMenu } from '@/types/menu';

interface TypeMenuList {
  list: Array<TypeMenu>;
  className?: string;
  menuRef?: ForwardedRef<HTMLMenuElement>;
  menuItemRef?: ForwardedRef<HTMLLIElement>;
  updateCursorLocation?: MouseEventHandler<HTMLButtonElement>;
}

const Menu = ({ className, list, menuRef, menuItemRef, updateCursorLocation }: TypeMenuList) => {
  return (
    <menu ref={menuRef} className={clsx(MenuStyle.container, className)}>
      {list.map((item, index) => (
        <li ref={menuItemRef} key={index} className={MenuStyle.item}>
          <MenuItem {...item} updateCursorLocation={updateCursorLocation} />
        </li>
      ))}
    </menu>
  );
};

export default Menu;
