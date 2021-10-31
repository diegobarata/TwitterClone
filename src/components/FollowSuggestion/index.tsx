import React from 'react';

import { Container, Avatar, Info, FollowButton } from './styles';

interface Props {
  name: string;
  nickname: string;
}

const FollowSuggestion: React.FC<Props> = ({ name, nickname }) => {
  return (
    <Container>
      <div>
        <Avatar>
          <img
            src="https://pbs.twimg.com/media/FC_qr2CX0AAGVjQ?format=jpg&name=large"
            alt="Avatar"
            className="FollowAvatar"
          />
        </Avatar>
        <Info>
          <strong>{name}</strong>
          <span>{nickname}</span>
        </Info>
      </div>

      <FollowButton outlined>Seguir</FollowButton>
    </Container>
  );
};

export default FollowSuggestion;