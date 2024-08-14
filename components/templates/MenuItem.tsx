'use client';
import { IconArrow } from '@/assets';
import Button from '@/components/elements/Button';
import Icon from '@/components/elements/Icon';
import Menu from '@/components/templates/Menu';
import MenuItemStyle from '@/components/templates/styles/MenuItem.module.scss';
import { TypeMenu } from '@/types/menu';

const MenuItem = ({ title, items, updateCursorLocation }: TypeMenu) => {
  return (
    <>
      <Button
        type="button"
        className={MenuItemStyle.container}
        onMouseMove={(event) => {
          if (!items || !updateCursorLocation) return;
          updateCursorLocation(event);
        }}
      >
        <span className={MenuItemStyle.title}>{title}</span>
        {!!items && <Icon svg={IconArrow} />}
      </Button>

      {!!items && <Menu className={MenuItemStyle.subMenu} list={items} />}
    </>
  );
};

export default MenuItem;
