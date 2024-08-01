import type { Metadata } from 'next';
import { PropsWithChildren } from 'react';

import { siteMeta } from '@/policy/meta';

import '@/styles/styles.scss';

export const metadata: Metadata = siteMeta;

const RootLayout = ({ children }: PropsWithChildren) => {
  return (
    <html lang="ko">
      <body>{children}</body>
    </html>
  );
};

export default RootLayout;
