import React from 'react';
import Feed from '../Feed';

 import { Container, Banner, Avatar,
  ProfileData, LocationIcon, CakeIcon, Followage, EditButton} from './styles';

const ProfilePage: React.FC = () => {
  return (
    <Container>
      <Banner>
        <Avatar/>
      </Banner>
      <ProfileData>
        <EditButton outlined>Editar perfil</EditButton>

        <h1>Matheus Ferreira</h1>
        <h2>@MathFerreira</h2>

        <p>
          Developer junior <a href="https://github.com/MathFerreira01">@MyGitHub</a>
        </p>

        <ul>
          <li>
            <LocationIcon/>
            Brasilia, Brasil
          </li>
          <li>
            <CakeIcon/>
            Nascido(a) em 1 de julho de 2001
          </li>
        </ul>

        <Followage>
          <span>
            Seguindo <strong>94</strong>
          </span>
          <span>
            <strong>672 </strong> Seguidores
          </span>
        </Followage>
      </ProfileData>

      <Feed/>
    </Container>
  )
}

export default ProfilePage;