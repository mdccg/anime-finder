import { ReactNode } from 'react';
import {
  Card,
  CardArticle,
  CardArticleDescription,
  CardArticleHighlightedDescription,
  CardArticleTitle,
  CardNonLastFrame,
  CardNonShadowedImage,
  CardLastFrame,
  CardShadowedImage,
} from './styles';

type HomeCardProps = {
  cardPicture: string;
  alternativeText: string;
  title: string;
  paragraphs: ReactNode[];
  isImageShadowed?: boolean;
  hideImageWhenThereLowerResolution?: boolean;
  emphasizedMessage?: string;
}

const HomeCard = ({
  cardPicture,
  alternativeText,
  title,
  paragraphs,
  isImageShadowed,
  hideImageWhenThereLowerResolution,
  emphasizedMessage
}: HomeCardProps) => {
  const CardImage = isImageShadowed ? CardShadowedImage : CardNonShadowedImage;
  const CardFrame = hideImageWhenThereLowerResolution ? CardLastFrame : CardNonLastFrame;

  return (
    <Card>
      <CardFrame>
        <CardImage
          src={cardPicture}
          alt={alternativeText}
        />
      </CardFrame>
      <CardArticle>
        <CardArticleTitle>{title}</CardArticleTitle>
        
        {paragraphs.map((paragraph, index) => (
          <CardArticleDescription key={index}>{paragraph}</CardArticleDescription>
        ))}

        {emphasizedMessage && (
          <CardArticleHighlightedDescription>{emphasizedMessage}</CardArticleHighlightedDescription>
        )}
      </CardArticle>
    </Card>
  );
}

export default HomeCard;