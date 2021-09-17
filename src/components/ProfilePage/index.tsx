import React from 'react';

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
        <Avatar />
      </Banner>
      <ProfileData>
        <EditButton outlined>Editar perfil</EditButton>
        <h1>Diego Barata</h1>
        <h2>@diegobarata_</h2>

        <p>
          developer at <a href="https://www.instagram.com/diegobarata_/">@diegobarata_</a>
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
            seguindo <strong>???</strong>
          </span>
          <span>
            <strong>??? </strong> seguidores
          </span>
        </Followage>
      </ProfileData>
    </Container>
  )
}

export default ProfilePage;