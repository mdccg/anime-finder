import styled, { css } from 'styled-components';
import GithubSource from './../../assets/icons/github.svg';
import GmailSource from './../../assets/icons/gmail.svg';
import InstagramSource from './../../assets/icons/instagram.svg';
import WhatsAppSource from './../../assets/icons/whatsapp.svg';

export const LeftDeveloperCardWrapper = styled.div`
  background-color: var(--dracula-orchid);
  color: white;
`;

export const RightDeveloperCardWrapper = styled(LeftDeveloperCardWrapper)`
  background-color: var(--american-river);
`;

export const LeftDeveloperCardBody = styled.div`
  padding: 64px;
  box-sizing: border-box;

  flex-direction: row;
  align-items: center;
  display: flex;

  @media only screen and (max-width: 768px) {
    flex-direction: column;
    padding: 32px;
  }
`;

export const RightDeveloperCardBody = styled(LeftDeveloperCardBody)`
  flex-direction: row-reverse;
`;

export const LeftDeveloperCardFooter = styled.div`
  position: relative;
  display: flex;
  flex: 1;

  @media only screen and (max-width: 370px) {
    position: static;
    overflow-x: hidden;
  }
`;

export const RightDeveloperCardFooter = styled(LeftDeveloperCardFooter)`
  @media only screen and (max-width: 370px) {
    justify-content: flex-end;
    display: flex;
  }
`;

export const LeftDeveloperCardPhotoSpace = styled.div`
  user-select: none;
  flex: calc(3 / 4);
  display: flex;

  @media only screen and (max-width: 768px) {
    flex: 0;
  }
`;

export const RightDeveloperCardPhotoSpace = styled(LeftDeveloperCardPhotoSpace)`
  flex: calc(1 / 4);

  @media only screen and (max-width: 768px) {
    flex: 0;
  }
`;

export const LeftDeveloperCardContent = styled.div`
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

export const RightDeveloperCardContent = styled(LeftDeveloperCardContent)`
  align-items: flex-start;
  text-align: left;

  @media only screen and (max-width: 768px) {
    align-items: flex-end;
    text-align: right;
  }
`;

export const LeftDeveloperName = styled.span`
  font-weight: bold;
  font-size: 300%;

  margin-bottom: 16px;
`;

export const RightDeveloperName = styled(LeftDeveloperName)`
  font-size: 262.5%;
`;

export const DeveloperCourse = styled.span`
  font-weight: 300;
  font-size: 200%;

  margin-bottom: 16px;
`;

export const LeftDeveloperDescription = styled.span`
  font-weight: 300;
  font-size: 112.5%;

  line-height: 2;
`;

export const RightDeveloperDescription = styled(LeftDeveloperDescription)`
  width: 70%;
`;

export const LeftDeveloperSocialMediaList = styled.div`
  margin-top: 96px;

  flex-direction: row;
  align-items: center;
  display: flex;

  & > * {
    margin-left: 16px;
    margin-right: 0;
  }
  
  @media only screen and (max-width: 768px) {
    & > * {
      margin-right: 16px;
      margin-left: 0;
    }
  }
`;

export const RightDeveloperSocialMediaList = styled(LeftDeveloperSocialMediaList)`
  & > * {
    margin-right: 16px;
    margin-left: 0;
  }

  @media only screen and (max-width: 768px) {
    & > * {
      margin-left: 16px;
      margin-right: 0;
    }
  }
`;

const socialMediaIcon = css`
  width: 32px;
  height: 32px;
  filter: invert(1);
`;

export const Github = styled.img`
  ${socialMediaIcon};
`;

export const WhatsApp = styled.img`
  ${socialMediaIcon};
`;

export const Gmail = styled.img`
  ${socialMediaIcon};
`;

export const Instagram = styled.img`
  ${socialMediaIcon};
  margin-right: 0;
`;

export const developerPicture = css`
  position: absolute;

  @media only screen and (max-width: 370px) {
    position: static;
  }
`;

export const LeftDeveloperImage = styled.img`
  ${developerPicture};
  left: 64px;

  @media only screen and (max-width: 768px) {
    left: 6.25%;
  }
`;

export const RightDeveloperImage = styled.img`
  ${developerPicture};
  right: 0;
`;

Github.defaultProps = {
  src: GithubSource,
  alt: 'Ícone da rede social Github'
};

WhatsApp.defaultProps = {
  src: WhatsAppSource,
  alt: 'Ícone da rede social WhatsApp'
};

Gmail.defaultProps = {
  src: GmailSource,
  alt: 'Ícone da rede social Gmail'
};

Instagram.defaultProps = {
  src: InstagramSource,
  alt: 'Ícone da rede social Instagram'
};