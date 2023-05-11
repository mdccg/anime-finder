import { Bar, MainColumn, ReadOnlyProgressBarWrapper, SideColumn, BarWrapper, MarkerWrapper, MarkerSign, Marker, Moment, StartOrEndMoment } from './styles';

type ReadOnlyProgressBarProps = {
  exactMoment: number;
  episodeDuration: number;
}

const ReadOnlyProgressBar = ({ exactMoment, episodeDuration }: ReadOnlyProgressBarProps) => {
  return (
    <ReadOnlyProgressBarWrapper>
      <SideColumn>
        <StartOrEndMoment>00:00</StartOrEndMoment>
      </SideColumn>

      <MainColumn>
        <BarWrapper>
          <Bar />
        </BarWrapper>

        <MarkerWrapper>
          <Marker>
            <MarkerSign />
            <Moment>16:30</Moment>
          </Marker>
        </MarkerWrapper>
      </MainColumn>

      <SideColumn>
        <StartOrEndMoment>25:40</StartOrEndMoment>
      </SideColumn>
    </ReadOnlyProgressBarWrapper>
  );
}

export default ReadOnlyProgressBar;