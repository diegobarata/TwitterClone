import React from 'react';

import {  
  Container,
  Retweeted, 
  Body,
  Avatar,
  Content,
  Header,
  Dot,
  Description,
  ImageContent,
  Icons,
  Status,
  CommentIcon,
  RetweetIcon,
  RetweetI,
  LikeIcon,

} from './styles';

const Tweet: React.FC = () => {
  return (
    <Container>
      <Retweeted>
        <RetweetI />
        Você retweetou
      </Retweeted>

      <Body>
        <Avatar>
          <img
            src="https://pbs.twimg.com/media/FC_oNfdXIAEDNRZ?format=jpg&name=large"
            alt="Avatar"
            className="profile-picture"
          />
        </Avatar>

        <Content>
          <Header>
            <strong>Nina</strong>
            <span>@ninagatinha123</span>
            <Dot />
            <time> 16 de outubro</time>
          </Header>

          <Description>😍😍😍</Description>
          <ImageContent>
            <img
              src="https://pbs.twimg.com/media/FC_nfRpWEAE6R34?format=jpg&name=large"
              alt="Avatar"
              className="TweetImage"
            />
          </ImageContent>
          
          <Icons>
            <Status>
              <CommentIcon/>
              13
            </Status>
            <Status>
              <RetweetIcon/>
              20
            </Status>
            <Status>
              <LikeIcon/>
              400
            </Status>
          </Icons>
        </Content>
      </Body>
    </Container>
  );
}

export default Tweet;