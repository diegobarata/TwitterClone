import React from 'react';

import ProfilePage from '../ProfilePage';

import { 
  Container, 
  Header,
  BackIcon,
  ProfileInfo,
  BottomMenu,
  HomeIcon,
  SearchIcon,
  EmailIcon,
  BellIcon
  
} from './styles';

// import { Container } from './styles';

const Main: React.FC = () => {
  return (
    <Container>
      <Header>
        <button>
          <BackIcon />
        </button>
        <ProfileInfo>
          <strong>Diego Barata</strong>
          <span>612 tweet</span>
        </ProfileInfo>
      </Header>
      <ProfilePage />
        
      <BottomMenu>
        <HomeIcon  className="active"/>
        <SearchIcon />
        <BellIcon />
        <EmailIcon />
      </BottomMenu>
    </Container>
  )
}

export default Main;