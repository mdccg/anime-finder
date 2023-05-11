import styled from 'styled-components';

export const ReadOnlyProgressBarWrapper = styled.div`
  margin-top: 24px;

  flex-direction: row;
  align-items: center;
  display: flex;
  flex: 1;
`;

export const SideColumn = styled.div``;

export const MainColumn = styled.div`
  flex-direction: column;
  flex: 1;
`;

export const BarWrapper = styled.div`
  padding: 0 8px;
`;

export const MarkerWrapper = styled.div``;

export const Bar = styled.div`
  display: flex;
  height: 1px;
  flex: 1;

  background-color: black;
`;

export const Marker = styled.div`
  flex-direction: column;
  align-items: center;
  display: flex;
`;

export const MarkerSign = styled.div`
  width: 1px;
  height: 16px;
  background-color: black;
`;

export const Moment = styled.span`
  font-size: 90%;
`;

export const StartOrEndMoment = styled(Moment)`
  position: relative;
  top: -18px;
`;