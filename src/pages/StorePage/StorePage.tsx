import { FC } from 'react';

import { Games } from '@/features';

interface StorePageProps {
  className?: string;
}

const StorePage: FC<StorePageProps> = () => (
  <>
    <Games />
  </>
);

export default StorePage;
