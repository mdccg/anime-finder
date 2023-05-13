import { useEffect, useState } from 'react';
import DeveloperCard from './../../components/DeveloperCard';
import Footer from './../../components/Footer';
import HomeCard from './../../components/HomeCard';
import Image1 from './../../assets/images/image-1.png';
import Image2 from './../../assets/images/image-2.png';
import Image3 from './../../assets/images/image-3.jpg';
import MatheusSource from './../../assets/images/matheus.png';
import PauloSource from './../../assets/images/paulo.png';
import SampleSource from './../../assets/images/sample.jpg';
import HeroImage from './../../components/HeroImage';
import { CloudArrowUpSolid, Explanation, Subheading, TestDrive, TestDriveBerthold, TestDriveBounds, TestDriveDescription, TestDriveExplanation, TestDriveForm, TestDriveSubmitButton, TestDriveSubmitButtonLabel, TestDriveTitle } from './styles';

const Home = () => {
  const [blob, setBlob] = useState<Blob | undefined>();

  const loadBlob = async () => {
    fetch(SampleSource)
      .then(async (response) => {
        setBlob(await response.blob());
      })
      .catch(error => console.error(error));
  }

  useEffect(() => {
    loadBlob();
  }, []);

  return (
    <div>
      <HeroImage />

      <Explanation>
        <Subheading>Como foi feito?</Subheading>

        <HomeCard
          cardPicture={Image1}
          cardPictureCustomHeight={320}
          alternativeText="Representação gráfica da comunicação entre APIs envolvendo a Trace Moe"
          title="Encontramos a API"
          paragraphs={[
            <>Nós encontramos uma API que é simplesmente incrível para quem adora assistir animes! Com essa ferramenta,
            você pode enviar uma <strong>screenshot</strong> de uma cena e obter informações detalhadas sobre o anime em questão, incluindo o título, episódio e <strong>até mesmo o tempo exato da cena</strong>.</>,
            <>Agora, se você se deparar com um edit fantástico ou engraçado no TikTok, mas não souber qual é o nome do anime ou qual episódio é, basta fazer uma captura de tela e enviá-la para a API. Ela irá analisar a imagem e fornecer todas as informações relevantes para que você possa encontrar facilmente o anime e a cena desejados.</>,
          ]} />

        <HomeCard
          cardPicture={Image2}
          alternativeText="Captura de tela do cliente original da API Trace Moe"
          title="全て日本語です！"
          paragraphs={[
            <>Você entendeu o que está escrito acima? Não? Oh, que pena&hellip; ;'( Mas, não se preocupe, eu vou traduzir para você. Está escrito:</>,
            <>"Está tudo em japonês!"</>,
            <>E é justamente esse o problema. A maioria das informações retornadas pela API está em japonês. Além disso, elas não estão tão organizadas de modo coeso e acabam por empobrecer a experiência do usuário.</>
          ]}
          isImageShadowed />

        <HomeCard
          cardPicture={Image3}
          alternativeText="Fotografia de um código-fonte em um notebook"
          title="A solução&hellip;"
          paragraphs={[
            <>Mas, não se preocupe novamente!</>,
            <>Pois dois estudantes do Curso Superior de TSI do IFMS de Aquidauana aproveitaram a deixa para trabalhar duro e entregar como atividade de Construção de Páginas Web IV um cliente dessa API completamente em português brasileiro.</>
          ]}
          emphasizedMessage="E esses dois estudantes são&hellip;"
          isImageShadowed
          hideImageWhenThereLowerResolution />
      </Explanation>

      <DeveloperCard
        align="left"
        developerName="Paulo Daniel Moraes Ribeiro"
        developerDescription="Fã nato de Sonic The Hedgehog, jogador de Mario Kart, rato de academia, doutorando em ChatGPT e sobrevivente da turma do meio do ano"
        socialMedia={{
          github: 'https://github.com/paulodanielribeiro',
          whatsApp: 'https://wa.me/+556784719682',
          gmail: 'mailto:paulo.ribeiro3@estudante.ifms.edu.br',
          instagram: 'https://www.instagram.com/paulodanielribeiro/',
        }}
        profilePicture={PauloSource}
        pictureHeight={512} />
      
      <DeveloperCard
        align="right"
        developerName="Matheus Daniel Cristal Comparotto Gomes"
        developerDescription="Viciado em cappuccino, jogador de Minecraft, speedrunner nas provas de programação, rato de academia, cristão muito pecador e sobrevivente da turma do meio do ano"
        socialMedia={{
          github: 'https://github.com/mdccg',
          whatsApp: 'https://wa.me/+5567992224129',
          gmail: 'mailto:matheus.gomes@estudante.ifms.edu.br',
          instagram: 'https://www.instagram.com/rondoallaturca.mid/',
        }}
        profilePicture={MatheusSource}
        pictureHeight={512} />

      <TestDrive>
        <TestDriveExplanation>
          <TestDriveTitle>Mas que tal um test drive?</TestDriveTitle>
          <TestDriveDescription>Para evitar spoilers escandalosos, optei por escolher uma screenshot do primeiro episódio de um anime muito conhecido que já foi lançado há algum tempo. Acredito que essa seja a melhor maneira de mostrar como o app funciona sem comprometer a experiência da comunidade otaku.</TestDriveDescription>
        </TestDriveExplanation>
        
        <TestDriveForm>
          <TestDriveBounds>
            <TestDriveBerthold />

            <TestDriveSubmitButton
              data-cy="test-drive-submit-button"
              state={{ blob }}
              to={blob ? '/screenshot-details' : '#'}>
              <CloudArrowUpSolid />
              <TestDriveSubmitButtonLabel>Enviar essa screenshot</TestDriveSubmitButtonLabel>
            </TestDriveSubmitButton>
          </TestDriveBounds>
        </TestDriveForm>
      </TestDrive>

      <Footer />
    </div>
  );
}

export default Home;