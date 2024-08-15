'use client';
import SafeTriangleTargetAreaStyle from '@/components/layout/styles/SafeTriangleTargetArea.module.scss';
import Menu from '@/components/templates/Menu';
import useMenu from '@/hooks/useMenu';
import MenuData from '@/mock/menu.json';

const SafeTriangleTargetArea = () => {
  const menuRefs = useMenu();
  return (
    <nav className={SafeTriangleTargetAreaStyle.container}>
      <h2 className={SafeTriangleTargetAreaStyle.title}>Safe Triangle Target Area</h2>
      <Menu list={MenuData.list} {...menuRefs} />
    </nav>
  );
};

export default SafeTriangleTargetArea;
