import styled from 'styled-components';
import CloudArrowUpSolidSource from './../../assets/icons/cloud-arrow-up-solid.svg';
import ImagesSolidSource from './../../assets/icons/images-solid.svg';
import Wallpaper from './../../assets/images/wallpaper.png';
import { smoothShadow } from './../../styles/global';

export const HeroImageWrapper = styled.div`
  background: 
    linear-gradient(rgba(0, 0, 0, .375), rgba(0, 0, 0, .375)),
    url(${Wallpaper});
  background-size: cover;
  background-position-y: bottom;
  background-position-x: center;

  padding: 32px 64px;
  min-height: 100vh;
  box-sizing: border-box;
  color: white;
  
  flex-direction: column;
  display: flex;

  @media only screen and (max-width: 768px) {
    padding: 32px;
  }
`;

export const Columns = styled.div`
  flex-direction: row;
  align-items: center;
  display: flex;
  flex: 1;

  @media only screen and (max-width: 768px) {
    flex-direction: column;
  }
`;

export const LeftColumn = styled.div`
  justify-content: center;
  flex-direction: column;
  display: flex;
  flex: 1;

  @media only screen and (max-width: 768px) {
    margin-bottom: 64px;
  }
`;

export const RightColumn = styled.div`
  flex-direction: column;
  align-items: flex-end;
  display: flex;
  flex: 1;
`;

export const Heading = styled.h2`
  ${smoothShadow.text};
  font-size: 225%;
  margin-bottom: 16px;

  @media only screen and (max-width: 768px) {
    font-size: 175%;
  }
`;

export const Emphasis = styled.span`
  color: var(--faded-poster);
`;

export const WebsiteDescription = styled.span`
  font-size: 112.5%;
  line-height: 1.5;
`;

export const DraggableFileInputBounds = styled.div`
  flex-direction: column;
  display: flex;
`;

export const DraggableFileInput = styled.form`
  flex-direction: column;
  align-items: center;
  display: flex;

  border: 4px dashed white;
  box-sizing: border-box;
  border-radius: 2px;
  padding: 64px;

  cursor: grab;
  user-select: none;
`;

export const CloudArrowUpSolid = styled.img`
  width: 64px;
  height: 64px;
  filter: invert(1);
`;

CloudArrowUpSolid.defaultProps = {
  src: CloudArrowUpSolidSource,
  alt: 'Ícone de nuvem com uma seta em seu centro apontando para cima'
};

export const DraggableFileInputLabel = styled.label`
  margin-top: 8px;
  
  font-size: 150%;
  text-align: center;
  font-weight: bold;
  line-height: 1.5;

  cursor: grab;
`;

export const ButtonFileInput = styled.form`
  margin-top: 32px;

  align-items: flex-start;
  flex-direction: row;
  align-self: center;
  display: flex;

  cursor: pointer;
  user-select: none;
`;

export const ImagesSolid = styled.img`
  width: 32px;
  height: 32px;
  filter: invert(1);

  margin-right: 16px;
`;

ImagesSolid.defaultProps = {
  src: ImagesSolidSource,
  alt: 'Ícone de uma fotografia de uma paisagem montanhosa'
};

export const ButtonFileInputLabel = styled.label`
  font-size: 137.5%;
  text-align: center;
  font-weight: bold;
  line-height: 1.5;
  
  cursor: pointer;
`;