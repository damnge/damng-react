import { useState, useEffect, useRef } from 'react';
import Loader from '../components/Loader';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { useIntersectionObserver } from '../hooks/useIntersectionObserver';
import '../styles/project.css';

import tony    from '../assets/mockups/tony-min.jpg';
import about   from '../assets/mockups/about-min.jpg';
import contact from '../assets/mockups/contact-min.png';

export default function TonySnufkin() {
  const [loaded, setLoaded] = useState(false);
  const [anim, setAnim]     = useState({ tag: false, title: false, line: false, desc: false, btn: false });

  const shot1Ref = useRef(null);
  const shot2Ref = useRef(null);
  const shot3Ref = useRef(null);
  useIntersectionObserver([shot1Ref, shot2Ref, shot3Ref]);

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
            <h1 className={`main-title animated ${anim.title ? 'faded-hero' : ''}`}>Tony Snufkin</h1>
            <div className={`animated ${anim.line ? 'faded-hero' : ''}`}>
              <div className="divider-project shine" />
            </div>
            <p className={`animated ${anim.desc  ? 'faded-hero' : ''}`}>
              Photography portfolio website created for artist Tony Snufkin. The website
              is built from scratch. The main idea was to keep it minimalistic, with a
              clean content structure and simple interactions, so visitors are not
              distracted and can pay full attention to the art. The website also includes
              a contact form so users can send messages directly to the artist.
            </p>
            <div className={`main-btn-wrapper live-btn animated ${anim.btn ? 'fade' : ''}`}>
              <a
                href="https://www.damgrela.com/"
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
          <img ref={shot1Ref} className="screenshot observer-play" src={tony}    alt="Gallery page"  loading="lazy" />
          <img ref={shot2Ref} className="screenshot second observer-play" src={about}   alt="About page"    loading="lazy" />
          <img ref={shot3Ref} className="screenshot second observer-play" src={contact} alt="Contact page"  loading="lazy" />
        </div>
        <div className="container">
          <div className="divider skill-divider" />
        </div>
      </section>

      <Footer />
    </>
  );
}
