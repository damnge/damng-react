import { useState, useEffect, useRef } from 'react';
import Loader from '../components/Loader';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { useIntersectionObserver } from '../hooks/useIntersectionObserver';
import '../styles/project.css';

import wantisImg from '../assets/mockups/wantis-min.jpg';

export default function Wantis() {
  const [loaded, setLoaded] = useState(false);
  const [anim, setAnim]     = useState({ tag: false, title: false, line: false, desc: false, btn: false });

  const shotRef = useRef(null);
  useIntersectionObserver([shotRef]);

  useEffect(() => {
    document.body.style.position = 'fixed';
    const timers = [
      setTimeout(() => { document.body.style.position = 'relative'; setLoaded(true); }, 300),
      setTimeout(() => setAnim(a => ({ ...a, tag:   true })), 400),
      setTimeout(() => setAnim(a => ({ ...a, title: true })), 700),
      setTimeout(() => setAnim(a => ({ ...a, line:  true })), 1000),
      setTimeout(() => setAnim(a => ({ ...a, desc:  true })), 1300),
      setTimeout(() => setAnim(a => ({ ...a, btn:   true })), 1600),
    ];
    return () => timers.forEach(clearTimeout);
  }, []);

  return (
    <>
      <Loader visible={!loaded} />
      <Navbar />

      <header id="hero-section">
        <div className="header-container">
          <div className="container center">
            <h4 className={`animated ${anim.tag   ? 'faded-hero' : ''}`}>Work Showcase</h4>
            <h1 className={`main-title animated ${anim.title ? 'faded-hero' : ''}`}>Wantis App</h1>
            <div className={`animated ${anim.line ? 'faded-hero' : ''}`}>
              <div className="divider-project shine" />
            </div>
            <p className={`animated ${anim.desc  ? 'faded-hero' : ''}`}>
              A shopping application designed for the concept project Wantis. The whole
              process involved sketching UX flows, sitemaps, wireframing, prototyping,
              and designing a logo. With this base structure, further exploration of
              visual styles, colour, and typography led to the final product — a
              beautiful, interactive experience with a thoughtful user experience.
            </p>
            <div className={`main-btn-wrapper live-btn animated ${anim.btn ? 'fade' : ''}`}>
              <a
                href="https://www.behance.net/damgrela"
                target="_blank"
                rel="noreferrer"
                className="main-btn btn-effect"
                data-sm-link-text="Let's go"
              >
                <span>Take a Look</span>
              </a>
            </div>
          </div>
        </div>
      </header>

      <section id="page-section">
        <div className="photo-container">
          <img ref={shotRef} className="screenshot observer-play" src={wantisImg} alt="Wantis app mockup" loading="lazy" />
        </div>
        <div className="container">
          <div className="divider skill-divider" />
        </div>
      </section>

      <Footer />
    </>
  );
}
