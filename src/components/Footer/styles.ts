import styled from 'styled-components';
import GithubSource from './../../assets/icons/github.svg';

export const FooterWrapper = styled.footer`
  background-color: black;
  height: 64px;

  justify-content: center;
  align-items: center;
  display: flex;
`;

export const Github = styled.img`
  width: 48px;
  height: 48px;
  filter: invert(1);
`;

Github.defaultProps = {
  src: GithubSource,
  alt: 'Ícone da rede social Github'
};