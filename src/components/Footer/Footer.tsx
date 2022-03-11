import { FooterWrapper, CopyrightText, NavItem } from './Footer.styled';

const Footer = () => {
  return (
    <FooterWrapper>
      <div className="container d-flex align-items-center justify-content-between">
        <CopyrightText>COPYRIGHT © 2022 THE RESOURCE ROOM, INC.</CopyrightText>
        <div className="d-flex align-items-center gap-3">
          <NavItem>SITEMAP</NavItem>
          <NavItem>PRIVACY</NavItem>
          <NavItem>DISCLAIMER</NavItem>
          <NavItem>HOME</NavItem>
        </div>
      </div>
    </FooterWrapper>
  );
};

export default Footer;
