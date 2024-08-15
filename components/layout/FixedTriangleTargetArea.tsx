'use client';
import SafeTriangleTargetAreaStyle from '@/components/layout/styles/SafeTriangleTargetArea.module.scss';
import Menu from '@/components/templates/Menu';
import useMenu from '@/hooks/useMenu';
import MenuData from '@/mock/menu.json';

const FixedTriangleTargetArea = () => {
  const { updateCursorLocation, ...menuRefs } = useMenu();
  return (
    <nav className={SafeTriangleTargetAreaStyle.container}>
      <h2 className={SafeTriangleTargetAreaStyle.title}>Fixed Triangle Target Area</h2>
      <Menu list={MenuData.list} {...menuRefs} />
    </nav>
  );
};

export default FixedTriangleTargetArea;
