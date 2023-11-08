import { FC } from 'react';

import { UserProfile } from './UserProfile';

import { UserAvatar } from '..';

import { Modal } from '@/ui';

interface UserAvatarModalProps {
  className?: string;
}

export const UserAvatarModal: FC<UserAvatarModalProps> = ({ className }) => {
  return (
    <Modal>
      <Modal.Button>
        <UserAvatar className={className} />
      </Modal.Button>
      <Modal.Content>
        <UserProfile />
      </Modal.Content>
    </Modal>
  );
};
