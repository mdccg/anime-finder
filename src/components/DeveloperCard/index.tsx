import { Link } from 'react-router-dom';
import {
  LeftDeveloperCardWrapper,
  LeftDeveloperCardBody,
  LeftDeveloperCardContent,
  LeftDeveloperCardFooter,
  LeftDeveloperCardPhotoSpace,
  DeveloperCourse,
  LeftDeveloperDescription,
  LeftDeveloperName,
  LeftDeveloperSocialMediaList,
  Github,
  Gmail,
  Instagram,
  RightDeveloperImage,
  LeftDeveloperImage,
  RightDeveloperCardWrapper,
  RightDeveloperCardBody,
  RightDeveloperCardContent,
  RightDeveloperCardPhotoSpace,
  RightDeveloperDescription,
  RightDeveloperName,
  WhatsApp,
  RightDeveloperSocialMediaList,
  RightDeveloperCardFooter,
} from './styles';

type DeveloperCardProps = {
  align: 'left' | 'right';
  developerName: string;
  developerDescription: string;
  socialMedia: {
    github: string;
    whatsApp: string;
    gmail: string;
    instagram: string;
  };
  profilePicture: string;
  pictureHeight: number;
}

const DeveloperCard = ({
  align,
  developerName,
  developerDescription,
  socialMedia: {
    github,
    whatsApp,
    gmail,
    instagram
  },
  profilePicture,
  pictureHeight,
}: DeveloperCardProps) => {
  const isLeft = align === 'left';
  const DeveloperCardWrapper = isLeft ? LeftDeveloperCardWrapper : RightDeveloperCardWrapper;
  const DeveloperCardBody = isLeft ? LeftDeveloperCardBody : RightDeveloperCardBody;
  const DeveloperCardPhotoSpace = isLeft ? LeftDeveloperCardPhotoSpace : RightDeveloperCardPhotoSpace;
  const DeveloperCardContent = isLeft ? LeftDeveloperCardContent : RightDeveloperCardContent;
  const DeveloperName = isLeft ? LeftDeveloperName : RightDeveloperName;
  const DeveloperDescription = isLeft ? LeftDeveloperDescription : RightDeveloperDescription;
  const DeveloperCardFooter = isLeft ? LeftDeveloperCardFooter : RightDeveloperCardFooter;
  const DeveloperImage = isLeft ? LeftDeveloperImage : RightDeveloperImage;
  const DeveloperSocialMediaList = isLeft ? LeftDeveloperSocialMediaList : RightDeveloperSocialMediaList;
  const responsivePaddingBottom = document.body.offsetWidth <= 370 ? '32px' : (document.body.offsetWidth <= 768 ? `${pictureHeight + 32}px` : '64px');

  return (
    <DeveloperCardWrapper>
      <DeveloperCardBody style={{ paddingBottom: responsivePaddingBottom }}>
        <DeveloperCardPhotoSpace>&nbsp;</DeveloperCardPhotoSpace>
        <DeveloperCardContent>
          <DeveloperName>{developerName}</DeveloperName>
          <DeveloperCourse>Estudante do Curso Superior de TSI</DeveloperCourse>
          <DeveloperDescription>{developerDescription}</DeveloperDescription>
        
          <DeveloperSocialMediaList>
            <Link target="_blank" to={github}>
              <Github />
            </Link>
            
            <Link target="_blank" to={whatsApp}>
              <WhatsApp />
            </Link>
            
            <Link target="_blank" to={gmail}>
              <Gmail />
            </Link>

            <Link target="_blank" to={instagram}>
              <Instagram />
            </Link>
          </DeveloperSocialMediaList>
        </DeveloperCardContent>
      </DeveloperCardBody>
      <DeveloperCardFooter>
        <DeveloperImage
          src={profilePicture}
          alt={`Foto do desenvolvedor ${developerName}`}
          style={{ top: `-${pictureHeight}px` }} />
      </DeveloperCardFooter>
    </DeveloperCardWrapper>
  );
}

export default DeveloperCard;