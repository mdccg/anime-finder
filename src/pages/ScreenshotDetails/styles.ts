import styled from 'styled-components';
import ImagesSolidSource from './../../assets/icons/images-solid.svg';

export const PageWrapper = styled.div`
  padding: 24px 48px;
  box-sizing: border-box;
`;

export const Header = styled.header`
  justify-content: space-between;
  flex-direction: row;
  align-items: center;
  display: flex;

  @media only screen and (max-width: 768px) {
    flex-direction: column;
  }
`;

export const PickAnotherPictureButton = styled.button`
  border: none;
  background: none;
  cursor: pointer;
  
  flex-direction: row;
  align-items: center;
  display: flex;
`;

export const ImagesSolid = styled.img`
  width: 48px;
  height: 48px;
  margin-right: 16px;
`;

export const PickAnotherPictureButtonLabel = styled.label`
  font-size: 137.5%;
  font-weight: bold;

  cursor: pointer;
`;

ImagesSolid.defaultProps = {
  src: ImagesSolidSource,
  alt: 'Ícone de uma fotografia de uma paisagem montanhosa'
};

export const MainContent = styled.main`
  margin-top: 64px;

  flex-direction: row;
  align-items: center;
  display: flex;
`;

export const SelectedScene = styled.div`
  flex-direction: column;
  display: flex;
  flex: 1;
`;

export const OtherScenes = styled.div`
  flex-direction: column;
  display: flex;
  flex: calc(1 / 2);
`;