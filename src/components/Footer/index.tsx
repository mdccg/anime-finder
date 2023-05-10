import { Link } from 'react-router-dom';
import { FooterWrapper, Github } from './styles';

const Footer = () => {
  return (
    <FooterWrapper>
      <Link target="_blank" to="https://github.com/mdccg/anime-snap/">
        <Github />
      </Link>
    </FooterWrapper>
  );
}

export default Footer;