import { useNavigate } from 'react-router-dom';
import Logo from './../Logo';
import { ButtonFileInput, ButtonFileInputLabel, Columns, DraggableFileInputBounds, Emphasis, Heading, HeroImageWrapper, ImagesSolid, LeftColumn, RightColumn, WebsiteDescription } from './styles';

const HeroImage = () => {
  const navigate = useNavigate();
  
  const handleFileSelect = (event: React.ChangeEvent<HTMLInputElement>) => {
    const files = event.target.files;
    if (files) {
      const file = files[0];
      const blob = new Blob([file], { type: file.type })
      navigate('/screenshot-details', { state: { blob } });
    }
  }

  return (
    <HeroImageWrapper>
      <Logo color="white" />
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
            <ButtonFileInput onClick={(event: React.MouseEvent<HTMLFormElement, MouseEvent>) => {
              const inputFile = document.getElementById('arquivo') as HTMLInputElement;
              inputFile.click();
            }}>
              <ImagesSolid />
              <ButtonFileInputLabel>
                Selecione um arquivo<br />
                do computador
              </ButtonFileInputLabel>
              <input
                data-cy="input"
                type="file"
                id="arquivo"
                onChange={handleFileSelect}
                style={{ display: 'none' }} />
            </ButtonFileInput>
          </DraggableFileInputBounds>
        </RightColumn>
      </Columns>
    </HeroImageWrapper>
  );
}

export default HeroImage;