import BaseLayout from '@/components/common/BaseLayout';
import Menu from '@/components/templates/Menu';
import MenuData from '@/mock/menu.json';

const Page = () => {
  const { list } = MenuData;
  return (
    <BaseLayout>
      <Menu list={list} />
    </BaseLayout>
  );
};

export default Page;
