import styled from 'styled-components';

export const HeaderWrapper = styled.header<{ isVideoStarted: boolean }>`
  position: fixed;
  left: 0;
  top: ${props => props.isVideoStarted ? '-60px' : 0};
  transition: top 0.5s ease-in-out;
  right: 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 2rem;
  height: 60px;
  background: url('/assets/images/bg-header.png');
  background-repeat: no-repeat repeat;
  background-size: 100% auto;
  z-index: 99;

  .logo-wrapper {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);

    .logo-header {
      height: 50px;
    }
  }
`;

export const Nav = styled.nav`
  display: flex;

  .nav-action {
    margin-right: 28px;

    img {
      width: 28px;
    }
  }
`;

export const SideNav = styled.ul<{open: boolean}>`
  position: fixed;
  z-index: 100;
  top: 60px;
  left: 0;
  bottom: 0;
  left: ${props => props.open ? 0 : -300}px;
  width: 300px;
  background: black;
  list-style: none;
  color: white;
  transition: left 0.3s ease-in-out;
  padding: 0;
  border-right: 1px solid #fff;

  a {
    width: 100%;
    border-bottom: 1px solid #fff;
    padding: 25px 15px;
    font-size: 20px;
    font-family: Typeka;
    font-weight: 700;
    display: block;
    text-decoration: none;
    color: inherit;
  }
`