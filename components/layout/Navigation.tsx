'use client';

import { useEffect, useRef } from 'react';

import Menu from '@/components/templates/Menu';
import MenuData from '@/mock/menu.json';

const Navigation = () => {
  const menuRef = useRef<HTMLMenuElement>(null);

  useEffect(() => {
    if (!menuRef.current) return;
    menuRef.current.style.setProperty('--menu-width', `${menuRef.current.clientWidth}px`);
  }, []);

  return (
    <nav>
      <Menu menuRef={menuRef} list={MenuData.list} />
    </nav>
  );
};

export default Navigation;
