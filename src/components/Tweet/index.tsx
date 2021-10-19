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
        <Avatar />

        <Content>
          <Header>
            <strong>Diego Barata</strong>
            <span>@diegobarata_</span>
            <Dot />
            <time> 16 de outubro</time>
          </Header>

          <Description>Loren ipsun</Description>
          <ImageContent/>
          
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