import styled from 'styled-components';
import { smoothShadow } from './../../styles/global';

export const Card = styled.div`
  align-items: flex-start;
  flex-direction: row;
  display: flex;

  margin: 64px 0;

  @media only screen and (max-width: 768px) {
    flex-direction: column-reverse;
  }
`;

export const CardNonLastFrame = styled.div`
  justify-content: center;
  align-items: center;
  display: flex;
  flex: 1;
`;

export const CardLastFrame = styled(CardNonLastFrame)`
  @media only screen and (max-width: 768px) {
    display: none;
  }
`;

export const CardNonShadowedImage = styled.img`
  width: 62.5%;
  max-width: 100%;

  @media only screen and (max-width: 768px) {
    margin-top: 16px;
    width: 100%;
    height: auto !important;
  }
`;

export const CardShadowedImage = styled(CardNonShadowedImage)`
  ${smoothShadow.box};
  border-radius: 4px;
`;

export const CardArticle = styled.article`
  flex-direction: column;
  display: flex;
  flex: 1;
`;

export const CardArticleTitle = styled.h3`
  font-size: 175%;

  margin-bottom: 16px;
`;

export const CardArticleDescription = styled.p`
  font-size: 112.5%;
  line-height: 1.5;
  margin-bottom: 16px;
`;

export const CardArticleHighlightedDescription = styled(CardArticleDescription)`
  margin-top: 16px;
  
  font-weight: bold;
  font-size: 137.5%;
`;