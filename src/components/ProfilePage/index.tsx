import React from 'react';
import Feed from '../Feed';

import { 
  Container,
  Banner,
  Avatar,
  ProfileData, 
  LocationIcon, 
  CakeIcon, 
  Followage,
  EditButton
} from './styles';

const ProfilePage: React.FC = () => {
  return (
    <Container>
      <Banner>
        <img
            src="https://pbs.twimg.com/profile_banners/882008711560126464/1634608249/1500x500"
            alt="Avatar"
            className="banner"
          />
        <Avatar>
          <img
            src="https://pbs.twimg.com/profile_images/1492197673159512072/Yg45a5-V_400x400.jpg"
            alt="Avatar"
            className="profile-picture"
          />
        </Avatar>
      </Banner>
      <ProfileData>
        <EditButton outlined>Editar Perfil</EditButton>
        <h1>Diego Barata de Oliveira</h1>
        <h2>@diegobarata_</h2>

        <p>
          developer: <a href="https://twitter.com/testettk2021">@diegobarata_</a>
        </p>
        <ul>
          <li>
            <LocationIcon />
            Rio de Janeiro, Brasil
          </li>
          <li>
            <CakeIcon />
            Nascido(a) em 01 de abril de 2003
          </li>
        </ul>
        <Followage>
          <span>
            seguindo <strong>393</strong>
          </span>
          <span>
            <strong>400</strong> seguidores
          </span>
        </Followage>
      </ProfileData>
      <Feed/>
    </Container>
  )
}

export default ProfilePage;