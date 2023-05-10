import Logo from './../Logo';
import { CloudArrowUpSolid, Columns, DraggableFileInput, Emphasis, Heading, HeroImageWrapper, DraggableFileInputLabel, LeftColumn, RightColumn, WebsiteDescription, ButtonFileInput, ImagesSolid, ButtonFileInputLabel, DraggableFileInputBounds } from './styles';

const HeroImage = () => {
  return (
    <HeroImageWrapper>
      <Logo />
      <Columns>
        <LeftColumn>
          <Heading>
            Descubra o nome do anime que você não sabe só com o <Emphasis>print</Emphasis> que
            tirou dele
          </Heading>
          <WebsiteDescription>
            Explore o mundo dos animes! Encontre suas séries favoritas através
            de <i>screenshots</i> em nossa plataforma com centenas de títulos
            disponíveis. Junte-se a nós agora e comece sua busca por aventura,
            drama, romance ou qualquer outro gênero que você preferir!
          </WebsiteDescription>
        </LeftColumn>

        <RightColumn>
          <DraggableFileInputBounds>
            <DraggableFileInput>
              <CloudArrowUpSolid />
              <DraggableFileInputLabel>Jogue a imagem aqui</DraggableFileInputLabel>
            </DraggableFileInput>

            <ButtonFileInput>
              <ImagesSolid />
              <ButtonFileInputLabel>
                Ou selecione um arquivo<br />
                do computador
              </ButtonFileInputLabel>
            </ButtonFileInput>
          </DraggableFileInputBounds>
        </RightColumn>
      </Columns>
    </HeroImageWrapper>
  );
}

export default HeroImage;