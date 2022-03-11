import { useState, CSSProperties, useRef, useEffect } from 'react';
import ReactPlayer from 'react-player';
import { Transition, TransitionStatus } from 'react-transition-group';
import Header from '../../components/Header';
import { enableAnchorLinks } from '../../utils/anchor_links';

import {
  Page,
  HeroSection,
  FeatureSection,
  SectionBanner,
  TimelineContainer,
  SectionTitle,
  TimelineItem,
  TimelineMainContent,
  TimelineRow,
  CreatorCard,
  ComingSoonContainer,
} from './Home.styled';

const duration = 2000;
let timer: number | null = null;

const transitionStyles: Record<TransitionStatus, CSSProperties> = {
  entering: { opacity: 1 },
  entered: { opacity: 1 },
  exiting: { opacity: 0 },
  exited: { opacity: 0 },
  unmounted: { opacity: 0 },
};

const HomePage = () => {
  const [playing, setPlaying] = useState(false);
  // const [isStart, setIsStarted] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    enableAnchorLinks();
  }, []);

  const handleMouseEnter = () => {
    timer = window.setTimeout(() => {
      setPlaying(true);
    }, 3000);
  };

  const handleMouseLeave = () => {
    setPlaying(false);
    if (timer) window.clearTimeout(timer);
  };

  return (
    <Page>
      <Header isVideoStarted={playing} />
      <HeroSection className="container" id="home">
        <Transition
          in={!playing}
          timeout={duration}
          unmountOnExit={true}
          mountOnEnter={true}
          nodeRef={ref}
        >
          {(state) => (
            <div className="overlay" style={transitionStyles[state]} ref={ref}>
              <img
                src="/assets/images/logo-hero.svg"
                className="hero-image"
                onMouseEnter={handleMouseEnter}
              />
              {/* <img src="/assets/images/ic_play_icon.svg" width="60" onClick={() => setPlaying(true)} /> */}
            </div>
          )}
        </Transition>
        <div
          style={{ padding: '56.25% 0 0 0', position: 'relative', width: '100%' }}
          onMouseLeave={handleMouseLeave}
        >
          <ReactPlayer
            url={
              'https://player.vimeo.com/video/468255980?h=deba531f55&autopause=0&player_id=0&app_id=58479'
            }
            width="100%"
            height="100%"
            style={{ position: 'absolute', top: 0, left: 0 }}
            controls={true}
            loop={true}
            config={{ vimeo: { playerOptions: { pip: true } } }}
            playsinline={true}
            title="Todd of Los Feliz | Official Trailer |"
            playing={playing}
            onStart={() => {
              // setIsStarted(true)
            }}
          />
        </div>
      </HeroSection>
      <FeatureSection className="container" id="timeline">
        <SectionBanner>
          JOIN THE PRODUCTION OF THE SERIES VIA THE NFT MINTING OF OUR PILOT SCRIPT
        </SectionBanner>

        <TimelineContainer>
          <SectionTitle>TIMELINE</SectionTitle>
          <TimelineMainContent>
            <TimelineRow>
              <TimelineItem>
                <h5 className="title">MINT NFTS</h5>
              </TimelineItem>
              <TimelineItem>
                <h5 className="title">EXECUTE BUDGET + PILOT PRODUCTION</h5>
              </TimelineItem>
              <TimelineItem>
                <h5 className="title">METAVERSE PREMIERE TO NFT COMMUNITY</h5>
              </TimelineItem>
              <TimelineItem>
                <h5 className="title">SELL TO STREAMING</h5>
              </TimelineItem>
            </TimelineRow>
            <TimelineRow>
              <img src="/assets/images/img-timeline.png" width="100%" />
            </TimelineRow>
            <TimelineRow>
              <TimelineItem>
                <p className="description">
                  PRODUCTION IS FUNDED VIA MINTING AN NFT COLLECTION BASED ON OUR PILOT SCRIPT FOR
                  AN INVESTING COMMUNITY
                </p>
              </TimelineItem>
              <TimelineItem>
                <p className="description">
                  WE PRODUCE OUT PILOT INCLUDING ASPECTS SUCH AS CASTING, SHOOTING, AND MASTERING
                  OUT PREMIERE.
                </p>
              </TimelineItem>
              <TimelineItem>
                <p className="description">
                  THE FIRST EPISODE OF TODD OF LOS FELIZ PREMIERES INSIDE THE METAVERSE EXCLUSIVE
                  FIRST TO OUR FILM COMMUNITY.
                </p>
              </TimelineItem>
              <TimelineItem>
                <p className="description">
                  PILOT-IN-HAND WE PITCH OUR SERIES TO TOP STREAMING SERVICES IN ORDER TO EXECUTE A
                  FULL SEASON.
                </p>
              </TimelineItem>
            </TimelineRow>
          </TimelineMainContent>
        </TimelineContainer>
      </FeatureSection>

      <FeatureSection className="container" id="creators">
        <SectionTitle color="#df6c8f">CREATORS</SectionTitle>
        <div className="row">
          <CreatorCard className="col">
            <img className="avatar" src="/assets/images/img-todd.blumberg.jpg" />
            <span className="title">CREATOR / WRITER</span>
            <h4 className="author-name">TODD GLUMBERG</h4>
            <p className="description">
              TODD BLUMBERG IS A PRODUCER, WRITER AND ACTOR BASED IN LOS ANGELES, CA. MOST OF HIS
              WORK CENTERS AROUND HIS IDENTITY. WHETHER IT BE INSECURITIES, COMEDY, RELIGION, OR
              MENTAL ISSUES, HE USES FILMMAKING AS A MEANS OF EXPLORATION AND CATHARSIS TO BETTER
              UNDERSTAND WHO HE IS AND WORK THROUGH LIFE EXPERIENCES.
            </p>
          </CreatorCard>
          <CreatorCard className="col">
            <img className="avatar" src="/assets/images/img-kaz.firpo.jpg" />
            <span className="title">CREATOR / WRITER</span>
            <h4 className="author-name">KAZ FIRPO</h4>
            <p className="description">
              KAZ FIRPO IS AN AWARD-WINNING DIRECTOR, SCREENWRITER, AND PHOTOGRAPHER, AND A GRADUATE
              OF NYU’S TISCH SCHOOL OF THE ARTS. HIS WORK EXPLORES HUMANISM AND SYSTEMS OF POWER. AS
              A DOCUMENTARY MAKER, PHOTOGRAPHER, AND WRITER OF FILMS (SEVEN SO FAR), KAZ HAS WORKED
              WITH WORLD-RENOWNED ORGANIZATIONS, STUDIOS, AND INDIVIDUALS.
            </p>
          </CreatorCard>
          <CreatorCard className="col">
            <img className="avatar" src="/assets/images/img-marco.gentile.jpg" />
            <span className="title">DIRECTOR</span>
            <h4 className="author-name">MACRO GENTILE</h4>
            <p className="description">
              MARCO GENTILE IS AN INTERNATIONALLY RECOGNIZED ITALIAN DIRECTOR. GENTILE BEGAN MAKING
              FILMS AND MUSIC VIDEOS WHILE STILL STUDYING HUMANITIES. HE IMMEDIATELY CAUGHT THE
              ATTENTION OF FILMMASTER PRODUCTIONS, AND IN 2004 HE DIRECTED HIS FIRST MUSIC VIDEO FOR
              THE COMPANY. AFTER MOVING TO THE USA TO STUDY CINEMA, HE BEGAN HIS CAREER AS A
              DIRECTOR IN LOS ANGELES.
            </p>
          </CreatorCard>
        </div>
      </FeatureSection>
      <div className="container" id="partners" style={{ paddingTop: 80 }}>
        <SectionTitle color="#df6c8f">PARTNERS</SectionTitle>
        <div className="row align-items-center">
          <div className="col p-5">
            <img src="/assets/images/logo-rr.poster.png" width="100%" />
          </div>
          <div className="col p-5">
            <img src="/assets/images/logo-a24.png" width="100%" />
          </div>
          <div className="col p-5">
            <img src="/assets/images/logo-hulu.png" width="100%" />
          </div>
        </div>
      </div>
      <div className="container" id="community">
        <ComingSoonContainer>
          <h2 className="title">TODD OF LOS FELIZ</h2>
          <h2 className="banner">NFT MINT EVENT COMING SOON</h2>
          <img src="/assets/images/img-megaphone.png" width="60px" />
          <h3 className="signup-link">SIGN UP TO THE WHITELIST</h3>
          <h4 className="early-access">
            for early access to join our production
            <br />+
          </h4>
          <img src="/assets/images/img-join.discord.png" />
        </ComingSoonContainer>
      </div>
    </Page>
  );
};

export default HomePage;
