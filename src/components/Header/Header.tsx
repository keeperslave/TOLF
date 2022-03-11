import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { HeaderWrapper, Nav, SideNav } from './Header.styled';
import { Button } from '../../components/Buttons';

const Header = ({ isVideoStarted }: { isVideoStarted: boolean }) => {
  const [open, setOpen] = useState(false);
  useEffect(() => {
    if (isVideoStarted) {
      setOpen(false);
    }
  }, [isVideoStarted])
  return (
    <HeaderWrapper isVideoStarted={isVideoStarted}>
      <Nav>
        <Button className="nav-action" onClick={() => setOpen(!open)}>
          <img src="/assets/images/ic-hamburger.png" alt="mintgate" />
        </Button>
        <Button className="nav-action">
          <img src="/assets/images/ic-resource-room.png" alt="resource-room" />
        </Button>
        <Button className="nav-action">
          <img src="/assets/images/ic-instagram.png" alt="instagram" />
        </Button>
        <Button className="nav-action">
          <img src="/assets/images/ic-discord.png" alt="discord" />
        </Button>
      </Nav>
      <Link to="/" className="logo-wrapper">
        <img src="/assets/images/logo-header.svg" alt="TLF-logo" className="logo-header" />
      </Link>
      <Button>
        <img src="/assets/images/btn-mintgate.png" alt="mintgate" />
      </Button>
      <SideNav open={open}>
        <a href="/#home">HOME</a>
        <a href="/#timeline">TIMELINE</a>
        <a href="/#creators">CREATORS</a>
        <a href="/#partners">PARTNERS</a>
        <a href="/#community">OUR COMMUNITY</a>
      </SideNav>
    </HeaderWrapper>
  );
};

export default Header;
