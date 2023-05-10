import styled from 'styled-components';
import SampleSource from './../../assets/images/sample.jpg';

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

export const TestDrive = styled.div`
  background-color: var(--lynx-white);

  flex-direction: row;
  align-items: center;
  display: flex;

  min-height: 512px;
  padding: 0 64px;
`;

export const TestDriveExplanation = styled.div`
  flex-direction: column;
  display: flex;
  flex: 1;
`;

export const TestDriveForm = styled.div`
  display: flex;
  flex: 1;
`;

export const TestDriveTitle = styled.h2`
  font-size: 225%;
  font-weight: bold;

  margin-bottom: 16px;
`;

export const TestDriveDescription = styled.p`
  font-size: 112.5%;
  line-height: 2;
`;

export const TestDriveFrame = styled.div``;

export const TestDriveBerthold = styled.img``;

TestDriveBerthold.defaultProps = {
  src: SampleSource,
  alt: 'Cena de um anime'
};