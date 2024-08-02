import { PropsWithChildren } from 'react';

import CommonStyle from '@/components/common/styles/Common.module.scss';

const BaseLayout = ({ children }: PropsWithChildren) => {
  return <main className={CommonStyle.main}>{children}</main>;
};

export default BaseLayout;
