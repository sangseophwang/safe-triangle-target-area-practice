'use client';
import SafeTriangleTargetAreaStyle from '@/components/layout/styles/SafeTriangleTargetArea.module.scss';
import Menu from '@/components/templates/Menu';
import useMenu from '@/hooks/useMenu';
import MenuData from '@/mock/menu.json';

const SafeTriangleTargetArea = () => {
  const menuRefs = useMenu();
  return (
    <nav className={SafeTriangleTargetAreaStyle.container}>
      <Menu list={MenuData.list} {...menuRefs} />
    </nav>
  );
};

export default SafeTriangleTargetArea;
