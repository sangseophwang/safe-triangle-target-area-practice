import type { Metadata } from 'next';
import { PropsWithChildren } from 'react';

import { siteMeta } from '@/policy/meta';
import CommonStyle from '@/styles/layout/Common.module.scss';

import '@/styles/styles.scss';

export const metadata: Metadata = siteMeta;

const RootLayout = ({ children }: PropsWithChildren) => {
  return (
    <html lang="ko">
      <body className={CommonStyle.body}>{children}</body>
    </html>
  );
};

export default RootLayout;
