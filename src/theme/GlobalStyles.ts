import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  @font-face {
    font-family: PPStellar;
    src: url('/assets/fonts/PPStellar-Light.otf') format('opentype');
    font-weight: 300;
  }

  @font-face {
    font-family: PPStellar;
    src: url('/assets/fonts/PPStellar-Bold.otf') format('opentype');
    font-weight: 700;
  }

  @font-face {
    font-family: AktivGroteskEx;
    src: url('/assets/fonts/AktivGroteskEx-Bold.ttf') format('truetype');
    font-weight: 700;
  }

  @font-face {
    font-family: AktivGroteskEx;
    src: url('/assets/fonts/AktivGroteskEx-XBold.ttf') format('truetype');
    font-weight: 800;
  }

  @font-face {
    font-family: Typeka;
    src: url('/assets/fonts/Typeka-Bold.otf') format('opentype');
    font-weight: 700;
  }


  body {
    margin: 0;
    font-family: PPStellar,
      sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }


  .container {
    @media (min-width: 1680px) {
      max-width: 1520px
    }

    @media (min-width: 2060px) {
      max-width: 1920px
    }
  }
  
`;

export default GlobalStyle;
