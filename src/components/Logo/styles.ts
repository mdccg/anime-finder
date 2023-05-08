import styled from 'styled-components';
import NarutoIconSource from './../../assets/icons/naruto.svg';

export const LogoWrapper = styled.div`
  flex-direction: row;
  align-items: center;
  display: flex;
  user-select: none;
  filter: invert(1);
`;

export const NarutoIcon = styled.img`
  width: 64px;
  height: 64px;
  margin-right: 16px;
`;

export const WebsiteTitle = styled.h1`
  color: black;
  font-size: 300%;
`;

NarutoIcon.defaultProps = {
  src: NarutoIconSource,
  alt: 'Ícone do símbolo de Konoha'
};