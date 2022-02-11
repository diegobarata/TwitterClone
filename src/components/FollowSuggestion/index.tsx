import React from 'react';

import { Container, Avatar, Info, FollowButton } from './styles';

interface Props {
  name: string;
  nickname: string;
  image: string;
}

const FollowSuggestion: React.FC<Props> = ({ name, nickname, image }) => {
  return (
    <Container>
      <div>
        <Avatar>
          <img
            src={image}
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