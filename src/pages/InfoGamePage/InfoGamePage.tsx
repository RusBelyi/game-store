import { FC } from 'react';

import { FullInfoGame } from '@/features';

interface InfoGamePageProps {
  className?: string;
}

const InfoGamePage: FC<InfoGamePageProps> = () => {
  return (
    <>
      <FullInfoGame />
    </>
  );
};

export default InfoGamePage;
