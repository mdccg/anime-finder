import styled from 'styled-components';
import SampleSource from './../../assets/images/sample.jpg';
import CloudArrowUpSolidSource from './../../assets/icons/cloud-arrow-up-solid.svg';
import { Link } from 'react-router-dom';

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

  padding: 192px 64px;
  box-sizing: border-box;

  @media only screen and (max-width: 768px) {
    flex-direction: column;
    padding: 32px;
  }
`;

export const TestDriveExplanation = styled.div`
  flex-direction: column;
  display: flex;
  flex: 1;
`;

export const TestDriveForm = styled.div`
  flex-direction: column;
  align-items: flex-end;
  display: flex;
  flex: 1;
`;

export const TestDriveTitle = styled.h2`
  font-size: 225%;
  font-weight: bold;
  
  margin-bottom: 16px;
`;

export const TestDriveDescription = styled.p`
  font-size: 125%;
  font-weight: 500;
  line-height: 2;
`;

export const TestDriveBounds = styled.div`
  flex-direction: column;
  align-items: flex-end;
  display: flex;
  width: 62.5%;

  @media only screen and (max-width: 768px) {
    margin-top: 32px;
    width: 100%;
  }
`;

export const TestDriveBerthold = styled.img`
  border-radius: 8px;
  width: 100%;
`;

export const TestDriveSubmitButton = styled(Link)`
  margin-top: 24px;

  border: none;
  background: none;
  cursor: pointer;

  flex-direction: row;
  align-items: center;
  align-self: center;
  display: flex;

  filter: invert(18%) sepia(5%) saturate(4993%) hue-rotate(170deg) brightness(90%) contrast(79%);
`;

export const CloudArrowUpSolid = styled.img`
  width: 32px;
  height: 32px;
  margin-right: 16px;
`;

export const TestDriveSubmitButtonLabel = styled.span`
  font-size: 162.5%;
  font-weight: bold;

  @media only screen and (max-width: 768px) {
    font-size: 125%;
  }
`;

TestDriveBerthold.defaultProps = {
  src: SampleSource,
  alt: 'Cena de um anime'
};

CloudArrowUpSolid.defaultProps = {
  src: CloudArrowUpSolidSource,
  alt: 'Ícone de nuvem com uma seta em seu centro apontando para cima'
};