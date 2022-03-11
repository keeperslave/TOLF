import styled from 'styled-components';

export const Page = styled.div`
  background: #000;
`;

export const HeroSection = styled.div`
  position: relative;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;

  .overlay {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    background: rgb(0, 0, 0);
    z-index: 1;
    display: flex;
    flex-flow: column;
    align-items: center;
    justify-content: center;
    opacity: 1;
    transition: opacity 2000ms ease-in-out;

    .hero-image {
      height: 43%;
      min-height: 257px;
      width: auto;
    }
  }

  .my-overlay-enter {
    opacity: 0;
  }
  .my-overlay-enter-active {
    opacity: 1;
    transition: opacity 1000ms;
  }
  .my-overlay-exit {
    opacity: 1;
  }
  .my-overlay-exit-active {
    opacity: 0;
    transition: opacity 1000ms;
  }
`;

export const FeatureSection = styled.div`
  padding: 70px 0;
`;

export const SectionBanner = styled.h2`
  font-size: 38px;
  text-align: center;
  color: #befcfa;
  letter-spacing: 1px;
`;

export const TimelineContainer = styled.div`
  background: url('/assets/images/bg-header.png');
  background-repeat: no-repeat repeat;
  padding: 40px 80px 80px;
`;

export const SectionTitle = styled.h2`
  font-size: 50px;
  text-align: center;
  font-weight: bold;
  letter-spacing: 2px;
  color: transparent;
  -webkit-text-stroke: 1px ${(props) => props.color || '#3c26e9'};
`;

export const TimelineMainContent = styled.div`
  display: flex;
  flex-flow: column;
`;

export const TimelineRow = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const TimelineItem = styled.div`
  width: 275px;
  font-family: AktivGroteskEx;

  .title {
    font-size: 20px;
    color: #3c26e9;
    text-align: center;
    font-weight: 800;
  }

  .description {
    font-size: 11px;
    font-weight: 700;
    padding: 0 26px;
    text-align: justify;
  }
`;

export const CreatorCard = styled.div`
  display: flex;
  flex-flow: column;
  align-items: center;

  .avatar {
    width: 100%;
    margin-bottom: 20px;
  }

  .title {
    font-size: 12px;
    color: #df6c8f;
    font-family: AktivGroteskEx;
    font-weight: 700;
  }

  .author-name {
    font-size: 50px;
    font-weight: 700;
    color: #df6c8f;
    text-shadow: 0px 1px 1px #ffffff;
  }

  .description {
    font-size: 12px;
    text-align: justify;
    font-family: AktivGroteskEx;
    font-weight: 700;
    color: white;
  }
`;

export const ComingSoonContainer = styled.div`
  width: 100%;
  display: flex;
  flex-flow: column;
  align-items: center;
  background: white;
  padding: 24px;

  .title {
    font-size: 62.5px;
    font-weight: bold;
    letter-spacing: 2px;
    color: white;
    -webkit-text-stroke: 1px black;
    text-shadow: -1px 1px 1px #000;
    margin: 0;
    line-height: 50px;
  }

  .banner {
    font-size: 62.5px;
    font-weight: bold;
    color: black;
    line-height: 58px;
    margin-bottom: 24px;
  }

  .signup-link {
    font-family: AktivGroteskEx;
    font-weight: 800;
    color: #3c26e9;
    font-size: 40px;
    border-bottom: 1px solid #3c26e9;
    margin-top: 24px;
  }

  .early-access {
    font-family: Typeka;
    font-weight: 700;
    font-size: 40px;
    color: #000;
    text-align: center;
  }
`;
