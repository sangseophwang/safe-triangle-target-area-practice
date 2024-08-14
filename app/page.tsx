import BaseLayout from '@/components/common/BaseLayout';
import FixedTriangleTargetArea from '@/components/layout/FixedTriangleTargetArea';
import SafeTriangleTargetArea from '@/components/layout/SafeTriangleTargetArea';

const Page = () => {
  return (
    <BaseLayout>
      <SafeTriangleTargetArea />
      <FixedTriangleTargetArea />
    </BaseLayout>
  );
};

export default Page;
