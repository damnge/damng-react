import { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import Loader from '../components/Loader';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { useIntersectionObserver } from '../hooks/useIntersectionObserver';

import tonyImg    from '../assets/img/tonys-min.jpg';
import wantisGif  from '../assets/img/wantiscrop.gif';
import wantisImg  from '../assets/img/wantisl-min.jpg';
import spaceImg   from '../assets/img/spaces-min.jpg';
import uniteImg   from '../assets/img/unite-min.jpg';
import designSvg  from '../assets/img/design.svg';
import codeSvg    from '../assets/img/code.svg';
import artSvg     from '../assets/img/art.svg';

export default function Home() {
  const [loaded, setLoaded] = useState(false);

  /* Hero animation classes — applied sequentially after load */
  const [hero, setHero] = useState({
    h1: false, h2: false, h3: false,
    div: false, p: false, btn: false,
    logo: false, nav: false, line: false,
  });

  /* Refs for scroll-triggered sections */
  const proj1Ref    = useRef(null);
  const proj2Ref    = useRef(null);
  const proj3Ref    = useRef(null);
  const proj4Ref    = useRef(null);
  const skillBoxRef = useRef(null);
  const doTitleRef  = useRef(null);
  const fadeDivRef  = useRef(null);

  useIntersectionObserver([
    proj1Ref, proj2Ref, proj3Ref, proj4Ref,
    skillBoxRef, doTitleRef, fadeDivRef,
  ]);

  useEffect(() => {
    document.body.style.position = 'fixed';

    const timers = [
      setTimeout(() => { document.body.style.position = 'relative'; setLoaded(true); }, 300),
      setTimeout(() => setHero(h => ({ ...h, nav:  true })), 300),
      setTimeout(() => setHero(h => ({ ...h, h1:   true })), 500),
      setTimeout(() => setHero(h => ({ ...h, h2:   true })), 900),
      setTimeout(() => setHero(h => ({ ...h, h3:   true })), 1200),
      setTimeout(() => setHero(h => ({ ...h, div:  true })), 1600),
      setTimeout(() => setHero(h => ({ ...h, p:    true })), 2000),
      setTimeout(() => setHero(h => ({ ...h, btn:  true })), 2500),
      setTimeout(() => setHero(h => ({ ...h, logo: true })), 2700),
      setTimeout(() => setHero(h => ({ ...h, line: true })), 3000),
    ];

    return () => timers.forEach(clearTimeout);
  }, []);

  return (
    <>
      <Loader visible={!loaded} />
      <Navbar isHome />

      {/* ── HERO ── */}
      <section id="hero-section">
        <div id="gothere" className="hero-container">
          <div className="container">
            <div className="headline-container">
              <div>
                <h1 className={`main-h animated ${hero.h1 ? 'faded-hero' : ''}`}>
                  Hi, I am Dam
                </h1>
                <h2 className={`sub-title animated ${hero.h2 ? 'faded-hero' : ''}`}>
                  <span className="ux">Web</span> Designer &amp;
                </h2>
                <h2 className={`sub-title animated ${hero.h3 ? 'faded-hero' : ''}`}>
                  Front-end Developer
                </h2>
              </div>
              <div className={`animated ${hero.div ? 'fade-headline-div' : ''}`}>
                <div className={`divider-headline ${hero.line ? 'shine' : ''}`} />
              </div>
            </div>

            <p className={`my-description animated ${hero.p ? 'faded-description' : ''}`}>
              I design and code beautiful websites for clients around the world.
              Feel free to roam around, and if you need a powerful website for yourself
              or your business, shoot me an email.
            </p>

            <div className="down">
              <div className={`main-btn-wrapper animated ${hero.btn ? 'fade' : ''}`}>
                <a href="#project-one" className="main-btn btn-effect" data-sm-link-text="Let's go">
                  <span>SEE MY WORK</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── PROJECTS ── */}
      <section id="page-section">
        <div className="container">
          <div className="divider" />

          {/* Project 1 — Tony Snufkin */}
          <div ref={proj1Ref} className="project observer-play" id="project-one">
            <div className="left-block">
              <h4>Website</h4>
              <h1>Tony Snufkin</h1>
              <div className="divider" />
            </div>
            <div className="paragraph-action">
              <p>
                Photography portfolio website created for artist Tony Snufkin.
                The website is built from scratch. The main idea was to keep it
                minimalistic, with a clean content structure and simple interactions,
                so visitors can pay full attention to the art.
              </p>
              <div className="btn-container">
                <Link to="/tonysnufkin">
                  <button className="button-project2 button-slide">
                    <span><span>See this project</span></span>
                  </button>
                </Link>
              </div>
            </div>
            <Link to="/tonysnufkin" className="right-block inline">
              <img src={tonyImg} alt="Photography portfolio website" loading="lazy" />
            </Link>
          </div>

          {/* Project 2 — Wantis */}
          <div ref={proj2Ref} className="project observer-play">
            <div className="left-block">
              <h4>Mobile App</h4>
              <h1>Wantis App</h1>
              <div className="divider shorter" />
            </div>
            <div className="paragraph-action">
              <p>
                This is a shopping application designed for the concept project Wantis.
                The whole process involved: sketching UX flows, sitemaps, wireframing,
                prototyping, and designing a logo.
              </p>
              <div className="btn-container">
                <Link to="/wantis">
                  <button className="button-project2 button-slide">
                    <span><span>See this project</span></span>
                  </button>
                </Link>
              </div>
            </div>
            <Link to="/wantis" className="right-block inline">
              <div className="phone-frame">
                <img className="wantis" src={wantisGif} alt="Wantis shopping app" loading="lazy" />
              </div>
              <img src={wantisImg} id="wantis-splash" alt="Wantis shopping app" loading="lazy" />
            </Link>
          </div>

          {/* Project 3 — NASA Space */}
          <div ref={proj3Ref} className="project observer-play">
            <div className="left-block">
              <h4>Web App</h4>
              <h1>NASA – Space</h1>
              <div className="divider shorter" />
            </div>
            <div className="paragraph-action">
              <p>
                A web app using NASA's API that displays the astronomical picture of
                the day alongside an article. Favourite photos and articles can be
                saved locally using the browser's Local Storage. For similar JavaScript
                projects, check out my GitHub.
              </p>
              <div className="btn-container">
                <Link to="/space">
                  <button className="button-project2 button-slide">
                    <span><span>See this project</span></span>
                  </button>
                </Link>
              </div>
            </div>
            <Link to="/space" className="right-block inline">
              <img src={spaceImg} alt="NASA APOD project" loading="lazy" />
            </Link>
          </div>

          {/* Project 4 — Unite */}
          <div ref={proj4Ref} className="project observer-play">
            <div className="left-block">
              <h4>Website</h4>
              <h1>Unite App</h1>
              <div className="divider shorter" />
            </div>
            <div className="paragraph-action">
              <p>
                A complete website built for a concept team collaboration platform.
                It includes a well-designed landing page and a beautiful blog.
                Both were built in Webflow, which provides an excellent and intuitive
                CMS for blog hosting.
              </p>
              <div className="btn-container">
                <Link to="/unite">
                  <button className="button-project2 button-slide">
                    <span><span>See this project</span></span>
                  </button>
                </Link>
              </div>
            </div>
            <Link to="/unite" className="right-block inline">
              <img src={uniteImg} alt="Unite platform website" loading="lazy" />
            </Link>
          </div>

          <div className="divider" />
        </div>
      </section>

      {/* ── SKILLS ── */}
      <section id="page-section">
        <div className="container observer-play">
          <h1 ref={doTitleRef} className="do-title observer-play">
            I specialise in
          </h1>
          <div ref={fadeDivRef} className="fade-divider observer-play">
            <div className="divider-headline shine short-center" />
          </div>
          <div ref={skillBoxRef} className="skill-box observer-play">

            <div className="skill-column">
              <div className="icon-wrapper">
                <img src={designSvg} alt="Design icon" loading="lazy" />
              </div>
              <div className="skill-description">
                <h4 className="skill-tittle">Design</h4>
                <p>
                  It can be a logo, a website, or a mobile app. In design, I value
                  simple content structure with a minimalistic touch and thoughtful
                  interactions. My clients always receive products with an outstanding
                  user experience.
                </p>
              </div>
            </div>

            <div className="skill-column">
              <div className="icon-wrapper">
                <img className="code-icon" src={codeSvg} alt="Code icon" loading="lazy" />
              </div>
              <div className="skill-description">
                <h4>Front-end</h4>
                <p>
                  Thanks to my knowledge of HTML, CSS, and JavaScript, I can code things
                  from scratch and bring your website to life. All websites are fully
                  responsive and interactive, with clean, semantic code. I can also build
                  products using website builders like Webflow.
                </p>
              </div>
            </div>

            <div className="skill-column">
              <div className="icon-wrapper">
                <img src={artSvg} alt="Visual art icon" style={{ marginTop: '5px' }} loading="lazy" />
              </div>
              <div className="skill-description">
                <h4>Visual Art</h4>
                <p>
                  Years of experience in the photography industry have trained my eye
                  for detail. With knowledge of Adobe programs and tools like Figma,
                  I can create visuals that will make your website look outstanding.
                </p>
              </div>
            </div>

          </div>
          <div className="divider skill-divider" />
        </div>
      </section>

      <Footer />
    </>
  );
}
