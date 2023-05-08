import { Link } from 'react-router-dom';
import { LogoWrapper, NarutoIcon, WebsiteTitle } from './styles';

const Logo = () => (
  <LogoWrapper>
    <NarutoIcon />
    <WebsiteTitle>
      <Link to="/">anime.snap</Link>
    </WebsiteTitle>
  </LogoWrapper>
);

export default Logo;