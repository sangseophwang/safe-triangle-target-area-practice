import { MouseEvent, useEffect, useRef } from 'react';

const useMenu = () => {
  const menuRef = useRef<HTMLMenuElement>(null);
  const menuItemRef = useRef<HTMLLIElement>(null);

  const updateCursorLocation = (event: MouseEvent<HTMLButtonElement>) => {
    const { left } = event.currentTarget?.getBoundingClientRect();
    const mouseX = event.clientX;
    const localX = mouseX - left;
    const menuWidth = menuRef.current?.clientWidth || 0;
    const percentageX = (localX / menuWidth) * 100;

    menuRef.current?.style.setProperty('--percentage-x', `${percentageX}%`);
  };

  useEffect(() => {
    if (!menuRef.current || !menuItemRef.current) return;
    menuRef.current.style.setProperty('--menu-width', `${menuRef.current.clientWidth}px`);
    menuRef.current.style.setProperty('--menu-item-height', `${menuItemRef.current.clientHeight}px`);

    // FixedTriangleTargetArea 초기값 설정
    menuRef.current?.style.setProperty('--percentage-x', `${(2 / 3) * 100}%`);
  }, []);

  return { menuRef, menuItemRef, updateCursorLocation };
};

export default useMenu;
