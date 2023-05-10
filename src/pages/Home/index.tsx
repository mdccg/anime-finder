import { Link } from 'react-router-dom';
import Image1 from './../../assets/images/image-1.png';
import Image2 from './../../assets/images/image-2.png';
import Image3 from './../../assets/images/image-3.jpg';
import HeroImage from './../../components/HeroImage';
import {
  Card,
  CardArticle,
  CardArticleDescription,
  CardArticleHighlightedDescription,
  CardArticleTitle,
  CardFrame,
  CardImage,
  CardLastFrame,
  CardShadowedImage,
  DeveloperCard,
  DeveloperCardBody,
  DeveloperCardContent,
  DeveloperCardFooter,
  DeveloperCardPhotoSpace,
  DeveloperCourse,
  DeveloperDescription,
  DeveloperName,
  DeveloperSocialMediaList,
  Explanation,
  Github,
  Gmail,
  Instagram,
  Matheus,
  Paulo,
  SecondDeveloperCard,
  SecondDeveloperCardBody,
  SecondDeveloperCardContent,
  SecondDeveloperCardPhotoSpace,
  SecondDeveloperDescription,
  SecondDeveloperName,
  Subheading,
  WhatsApp
} from './styles';

const Home = () => {
  return (
    <div>
      <HeroImage />

      <Explanation>
        <Subheading>Como foi feito?</Subheading>

        <Card>
          <CardFrame>
            <CardImage
              src={Image1}
              alt="Representação gráfica da comunicação entre APIs envolvendo a Trace Moe"
            />
          </CardFrame>
          <CardArticle>
            <CardArticleTitle>Encontramos a API</CardArticleTitle>

            <CardArticleDescription>
              Nós encontramos uma API que é simplesmente incrível para quem
              adora assistir animes! Com essa ferramenta, você pode enviar uma{" "}
              <strong>screenshot</strong> de uma cena e obter informações
              detalhadas sobre o anime em questão, incluindo o título, episódio
              e <strong>até mesmo o tempo exato da cena</strong>.
            </CardArticleDescription>
            <CardArticleDescription>
              Agora, se você se deparar com um edit fantástico ou engraçado no
              TikTok, mas não souber qual é o nome do anime ou qual episódio é,
              basta fazer uma captura de tela e enviá-la para a API. Ela irá
              analisar a imagem e fornecer todas as informações relevantes para
              que você possa encontrar facilmente o anime e a cena desejados.
            </CardArticleDescription>
          </CardArticle>
        </Card>

        <Card>
          <CardFrame>
            <CardShadowedImage
              src={Image2}
              alt="Captura de tela do cliente original da API Trace Moe"
            />
          </CardFrame>
          <CardArticle>
            <CardArticleTitle>全て日本語です！</CardArticleTitle>

            <CardArticleDescription>
              Você entendeu o que está escrito acima? Não? Oh, que pena... ;'(
              Mas, não se preocupe, eu vou traduzir para você. Está escrito:
            </CardArticleDescription>
            <CardArticleDescription>
              "Está tudo em japonês!"
            </CardArticleDescription>
            <CardArticleDescription>
              E é justamente esse o problema. A maioria das informações
              retornadas pela API está em japonês. Além disso, elas não estão
              tão organizadas de modo coeso e acabam por empobrecer a
              experiência do usuário.
            </CardArticleDescription>
          </CardArticle>
        </Card>

        <Card>
          <CardLastFrame>
            <CardShadowedImage
              src={Image3}
              alt="Fotografia de um código-fonte em um notebook"
            />
          </CardLastFrame>
          <CardArticle>
            <CardArticleTitle>A solução&hellip;</CardArticleTitle>
            <CardArticleDescription>Mas, não se preocupe novamente!</CardArticleDescription>
            <CardArticleDescription>Pois dois estudantes do Curso Superior de TSI do IFMS de Aquidauana aproveitaram a deixa para trabalhar duro e entregar como atividade de Construção de Páginas Web IV um cliente dessa API completamente em português brasileiro.</CardArticleDescription>
            <CardArticleHighlightedDescription>E esses dois estudantes são...</CardArticleHighlightedDescription>
          </CardArticle>
        </Card>
      </Explanation>

      <DeveloperCard>
        <DeveloperCardBody>
          <DeveloperCardPhotoSpace>&nbsp;</DeveloperCardPhotoSpace>
          <DeveloperCardContent>
            <DeveloperName>Paulo Daniel Moraes Ribeiro</DeveloperName>
            <DeveloperCourse>Estudante do Curso Superior de TSI</DeveloperCourse>
            <DeveloperDescription>Viciado em Sonic The Hedgehog, jogador de Mario Kart, rato de academia, doutorando em ChatGPT e sobrevivente da turma do meio do ano</DeveloperDescription>
          
            <DeveloperSocialMediaList>
              <Link target="_blank" to="https://github.com/paulodanielribeiro">
                <Github />
              </Link>
              
              <Link target="_blank" to="https://wa.me/+556784719682">
                <WhatsApp />
              </Link>
              
              <Link target="_blank" to="mailto:paulo.ribeiro3@estudante.ifms.edu.br">
                <Gmail />
              </Link>

              <Link target="_blank" to="https://www.instagram.com/paulodanielribeiro/">
                <Instagram />
              </Link>
            </DeveloperSocialMediaList>
          </DeveloperCardContent>
        </DeveloperCardBody>
        <DeveloperCardFooter>
          <Paulo />
        </DeveloperCardFooter>
      </DeveloperCard>

      <SecondDeveloperCard>
        <SecondDeveloperCardBody>
          <SecondDeveloperCardPhotoSpace>&nbsp;</SecondDeveloperCardPhotoSpace>
          <SecondDeveloperCardContent>
            <SecondDeveloperName>Matheus Daniel Cristal Comparotto Gomes</SecondDeveloperName>
            <DeveloperCourse>Estudante do Curso Superior de TSI</DeveloperCourse>
            <SecondDeveloperDescription>Viciado em cappuccino, jogador de Minecraft, speedrunner nas provas de programação, rato de academia, cristão muito pecador e sobrevivente da turma do meio do ano</SecondDeveloperDescription>
          
            <DeveloperSocialMediaList>
              <Link target="_blank" to="https://github.com/mdccg">
                <Github />
              </Link>
              
              <Link target="_blank" to="https://wa.me/+5567992224129">
                <WhatsApp />
              </Link>
              
              <Link target="_blank" to="mailto:matheus.gomes@estudante.ifms.edu.br">
                <Gmail />
              </Link>

              <Link target="_blank" to="https://www.instagram.com/rondoallaturca.mid/">
                <Instagram />
              </Link>
            </DeveloperSocialMediaList>
          </SecondDeveloperCardContent>
        </SecondDeveloperCardBody>
        <DeveloperCardFooter>
          <Matheus />
        </DeveloperCardFooter>
      </SecondDeveloperCard>
    </div>
  );
}

export default Home;