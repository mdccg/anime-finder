import styled from 'styled-components';

export const GenericPanelWrapper = styled.div`
  opacity: .75;
  user-select: none;

  flex-direction: column;
  justify-content: center;
  align-items: center;
  display: flex;

  min-height: 90vh;
`;

export const GenericPanelImage = styled.img`
  width: 64px;
  height: 64px;
`;

export const GenericPanelMessage = styled.span`
  margin-top: 32px;

  font-size: 150%;
  text-align: center;
  font-weight: bold;
  letter-spacing: 2px;
  text-transform: uppercase;
`;