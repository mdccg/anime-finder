import { Link } from 'react-router-dom';
import { LogoWrapper, NarutoIcon, WebsiteTitle } from './styles';

type LogoProps = {
  color: 'black' | 'white';
}

const Logo = ({ color }: LogoProps) => (
  <LogoWrapper style={{
    filter: `invert(${color === 'black' ? 0 : 1})`
  }}>
    <NarutoIcon />
    <WebsiteTitle>
      <Link to="/">anime.snap</Link>
    </WebsiteTitle>
  </LogoWrapper>
);

export default Logo;