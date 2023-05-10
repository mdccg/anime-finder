import styled from 'styled-components';
import NarutoIconSource from './../../assets/icons/naruto.svg';

export const LogoWrapper = styled.div`
  flex-direction: row;
  align-items: center;
  display: flex;
  user-select: none;

  @media only screen and (max-width: 768px) {
    margin-bottom: 16px;
  }
`;

export const NarutoIcon = styled.img`
  width: 64px;
  height: 64px;
  margin-right: 16px;

  @media only screen and (max-width: 768px) {
    width: 48px;
    height: 48px;
  }
`;

export const WebsiteTitle = styled.h1`
  color: black;
  font-size: 300%;

  @media only screen and (max-width: 768px) {
    font-size: 175%;
  }
`;

NarutoIcon.defaultProps = {
  src: NarutoIconSource,
  alt: 'Ícone do símbolo de Konoha'
};