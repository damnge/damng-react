import { useState, useEffect, useRef } from 'react';
import Loader from '../components/Loader';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { useIntersectionObserver } from '../hooks/useIntersectionObserver';
import '../styles/project.css';

import uniteImg from '../assets/mockups/unite-min.jpg';

export default function Unite() {
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
            <h1 className={`main-title animated ${anim.title ? 'faded-hero' : ''}`}>Unite App</h1>
            <div className={`animated ${anim.line ? 'faded-hero' : ''}`}>
              <div className="divider-project shine" />
            </div>
            <p className={`animated ${anim.desc  ? 'faded-hero' : ''}`}>
              A complete website built for a concept team collaboration platform.
              It includes a well-designed landing page and a beautiful blog. Both
              were built in Webflow, which provides an excellent and intuitive CMS
              for blog hosting.
            </p>
            <div className={`main-btn-wrapper live-btn animated ${anim.btn ? 'fade' : ''}`}>
              <a
                href="https://unite-app.webflow.io/"
                target="_blank"
                rel="noreferrer"
                className="main-btn btn-effect"
                data-sm-link-text="Let's go"
              >
                <span>Live Website</span>
              </a>
            </div>
          </div>
        </div>
      </header>

      <section id="page-section">
        <div className="photo-container">
          <img ref={shotRef} className="screenshot observer-play" src={uniteImg} alt="Unite app mockup" loading="lazy" />
        </div>
        <div className="container">
          <div className="divider skill-divider" />
        </div>
      </section>

      <Footer />
    </>
  );
}
