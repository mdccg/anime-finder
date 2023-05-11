import { Link } from 'react-router-dom';
import { LogoWrapper, NarutoIcon, WebsiteTitle } from './styles';

type LogoProps = {
  color: 'black' | 'white';
}

const Logo = ({ color }: LogoProps) => (
  <Link to="/">
    <LogoWrapper style={{ filter: `invert(${color === 'black' ? 0 : 1})` }}>
      <NarutoIcon />
      <WebsiteTitle>anime.snap</WebsiteTitle>
    </LogoWrapper>
  </Link>
);

export default Logo;