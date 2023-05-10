import styled, { css } from 'styled-components';
import GithubSource from './../../assets/icons/github.svg';
import GmailSource from './../../assets/icons/gmail.svg';
import InstagramSource from './../../assets/icons/instagram.svg';
import WhatsAppSource from './../../assets/icons/whatsapp.svg';
import MatheusSource from './../../assets/images/matheus.png';
import PauloSource from './../../assets/images/paulo.png';
import { smoothShadow } from './../../styles/global';

export const Explanation = styled.div`
  padding: 64px;
  padding-bottom: 24px;
  box-sizing: border-box;

  @media only screen and (max-width: 768px) {
    padding: 32px;
  }
`;

export const Subheading = styled.h2`
  font-size: 200%;
  text-align: center;
`;

export const Card = styled.div`
  align-items: flex-start;
  flex-direction: row;
  display: flex;

  margin: 64px 0;

  @media only screen and (max-width: 768px) {
    flex-direction: column-reverse;
  }
`;

export const CardFrame = styled.div`
  justify-content: center;
  align-items: center;
  display: flex;
  flex: 1;
`;

export const CardLastFrame = styled(CardFrame)`
  @media only screen and (max-width: 768px) {
    display: none;
  }
`;

export const CardImage = styled.img`
  width: 62.5%;

  @media only screen and (max-width: 768px) {
    width: 100%;
  }
`;

export const CardShadowedImage = styled(CardImage)`
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

export const DeveloperCard = styled.div`
  background-color: var(--dracula-orchid);
  color: white;
`;

export const SecondDeveloperCard = styled(DeveloperCard)`
  background-color: var(--american-river);
`;

export const DeveloperCardBody = styled.div`
  padding: 96px 64px 40px;
  box-sizing: border-box;

  flex-direction: row;
  align-items: center;
  display: flex;

  @media only screen and (max-width: 768px) {
    flex-direction: column;
    padding: 32px;
    padding-bottom: calc(531px + 32px);
  }
`;

export const SecondDeveloperCardBody = styled(DeveloperCardBody)`
  flex-direction: row-reverse;
`;

export const DeveloperCardFooter = styled.div`
  position: relative;
  display: flex;
  flex: 1;
`;

export const DeveloperCardPhotoSpace = styled.div`
  user-select: none;
  flex: calc(3 / 4);
  display: flex;

  @media only screen and (max-width: 768px) {
    flex: 0;
  }
`;

export const SecondDeveloperCardPhotoSpace = styled(DeveloperCardPhotoSpace)`
  flex: calc(1 / 4);
`;

export const DeveloperCardContent = styled.div`
  flex-direction: column;
  align-items: flex-end;
  display: flex;
  flex: 1;

  text-align: right;

  @media only screen and (max-width: 768px) {
    align-items: flex-start;
    text-align: left;
  }
`;

export const SecondDeveloperCardContent = styled(DeveloperCardContent)`
  align-items: flex-start;
  text-align: left;
`;

export const DeveloperName = styled.span`
  font-weight: bold;
  font-size: 300%;

  margin-bottom: 16px;
`;

export const SecondDeveloperName = styled(DeveloperName)`
  font-size: 262.5%;
`;

export const DeveloperCourse = styled.span`
  font-weight: 300;
  font-size: 200%;

  margin-bottom: 16px;
`;

export const DeveloperDescription = styled.span`
  font-weight: 300;
  font-size: 112.5%;

  line-height: 2;
`;

export const SecondDeveloperDescription = styled(DeveloperDescription)`
  width: 70%;
`;

export const DeveloperSocialMediaList = styled.div`
  margin-top: 96px;

  flex-direction: row;
  align-items: center;
  display: flex;
`;

const socialMediaIcon = css`
  width: 32px;
  height: 32px;
  filter: invert(1);

  margin-right: 16px;
`;

export const Github = styled.img`
  ${socialMediaIcon};
`;

Github.defaultProps = {
  src: GithubSource,
  alt: 'Ícone da rede social Github'
};

export const WhatsApp = styled.img`
  ${socialMediaIcon};
`;

WhatsApp.defaultProps = {
  src: WhatsAppSource,
  alt: 'Ícone da rede social WhatsApp'
};

export const Gmail = styled.img`
  ${socialMediaIcon};
`;

Gmail.defaultProps = {
  src: GmailSource,
  alt: 'Ícone da rede social Gmail'
};

export const Instagram = styled.img`
  ${socialMediaIcon};
  margin-right: 0;
`;

Instagram.defaultProps = {
  src: InstagramSource,
  alt: 'Ícone da rede social Instagram'
};

export const developerPicture = css`
  position: absolute;
`;

export const Paulo = styled.img`
  ${developerPicture};
  top: -531px;
  left: 64px;

  @media only screen and (max-width: 768px) {
    left: 6.25%;
  }
`;

Paulo.defaultProps = {
  src: PauloSource,
  alt: 'Foto do desenvolvedor Paulo'
};

export const Matheus = styled.img`
  ${developerPicture};
  top: -531px;
  right: 64px;

  @media only screen and (max-width: 768px) {
    right: 6.25%;
  }
`;

Matheus.defaultProps = {
  src: MatheusSource,
  alt: 'Foto do desenvolvedor Matheus'
};