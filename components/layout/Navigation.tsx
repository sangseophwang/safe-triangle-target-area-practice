'use client';

import { useEffect, useRef } from 'react';

import Menu from '@/components/templates/Menu';
import MenuData from '@/mock/menu.json';

const Navigation = () => {
  const menuRef = useRef<HTMLMenuElement>(null);
  const menuItemRef = useRef<HTMLLIElement>(null);

  useEffect(() => {
    if (!menuRef.current || !menuItemRef.current) return;
    menuRef.current.style.setProperty('--menu-width', `${menuRef.current.clientWidth}px`);
    menuRef.current.style.setProperty('--menu-item-height', `${menuItemRef.current.clientHeight}px`);
  }, []);

  return (
    <nav>
      <Menu menuRef={menuRef} menuItemRef={menuItemRef} list={MenuData.list} />
    </nav>
  );
};

export default Navigation;
