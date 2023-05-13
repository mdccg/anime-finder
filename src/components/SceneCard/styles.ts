import styled from 'styled-components';
import { smoothShadow } from './../../styles/global';

const borderRadius = '4px';

export const SceneCardWrapper = styled.div`
  ${smoothShadow.box};

  flex-direction: column;
  display: flex;

  border-bottom-left-radius: ${borderRadius};
  border-bottom-right-radius: ${borderRadius};
  
  &:not(:last-child) {
    margin-bottom: 32px;
  }
`;

export const SceneCardThumbnail = styled.img`
  border-top-left-radius: ${borderRadius};
  border-top-right-radius: ${borderRadius};

  width: 100%;
`;

export const SceneCardInformation = styled.div`

  flex-direction: column;
  display: flex;

  box-sizing: border-box;
  padding: 16px;

  line-height: 1.5;
`;

export const SceneCardAnimeTitle = styled.span`
  font-size: 125%;
  font-weight: bold;
`;

export const SceneCardEpisodeOrdinaryNumber = styled.span`
  font-size: 112.5%;
`;

export const SceneCardSimilarityPercentage = styled.span`
  margin-top: 32px;
  color: var(--american-river);
`;