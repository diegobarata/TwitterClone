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
            src="https://pbs.twimg.com/media/FC_pHpqXIAAu90D?format=jpg&name=large"
            alt="Avatar"
            className="profile-picture"
          />
        </Avatar>
      </Banner>
      <ProfileData>
        <EditButton outlined>Editar Perfil</EditButton>
        <h1>Mai Cabeça</h1>
        <h2>@maicabeça</h2>

        <p>
          developer: <a href="https://twitter.com/testettk2021">@InstaCatGrup</a>
        </p>
        <ul>
          <li>
            <LocationIcon />
            Rio de Janeiro, Brasil
          </li>
          <li>
            <CakeIcon />
            Nascido(a) em 04 de abril de 2020
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