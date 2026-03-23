import { useState, useEffect, useRef } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import dghSvg from '../assets/img/dgh.svg';

export default function Navbar({ isHome = false }) {
  const [menuOpen, setMenuOpen]         = useState(false);
  const [isSticky, setIsSticky]         = useState(false);
  const [emailCopied, setEmailCopied]   = useState(false);
  const [emailCopiedMob, setEmailCopiedMob] = useState(false);
  const [logoVisible, setLogoVisible]   = useState(!isHome);
  const logoRef = useRef(null);
  const navigate = useNavigate();

  /* Delay logo fade-in on homepage to match hero animation sequence */
  useEffect(() => {
    if (!isHome) return;
    const t = setTimeout(() => setLogoVisible(true), 2000);
    return () => clearTimeout(t);
  }, [isHome]);

  /* Sticky logo on scroll */
  useEffect(() => {
    function handleScroll() {
      setIsSticky(window.pageYOffset > 0);
    }
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  /* Close mobile menu on route change */
  useEffect(() => {
    setMenuOpen(false);
  }, [navigate]);

  function rotateLogo() {
    const img = logoRef.current;
    if (!img) return;
    img.classList.add('rotated-logo');
    setTimeout(() => img.classList.add('rotated-back'), 900);
    setTimeout(() => img.classList.remove('rotated-logo'), 1500);
    setTimeout(() => img.classList.remove('rotated-back'), 1500);
  }

  function copyEmail() {
    navigator.clipboard?.writeText('dam.grela@gmail.com').catch(() => {
      const d = document.createElement('input');
      document.body.appendChild(d);
      d.value = 'dam.grela@gmail.com';
      d.select();
      document.execCommand('copy');
      document.body.removeChild(d);
    });
  }

  function handleEmailTop(e) {
    e.preventDefault();
    copyEmail();
    setEmailCopied(true);
    setTimeout(() => setEmailCopied(false), 3000);
  }

  function handleEmailMob(e) {
    e.preventDefault();
    copyEmail();
    setEmailCopiedMob(true);
    setTimeout(() => setEmailCopiedMob(false), 3000);
  }

  function handleLogoClick(e) {
    e.preventDefault();
    rotateLogo();
    if (isHome) {
      const hero = document.getElementById('hero-section');
      if (hero) hero.scrollIntoView({ behavior: 'smooth' });
      else window.scrollTo({ top: 0, behavior: 'smooth' });
    } else if (isSticky) {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else {
      navigate('/');
    }
  }

  return (
    <nav id="nav-bar">
      {/* Desktop nav */}
      <div className="container n-container">
        <div className={`logo ${isSticky ? 'sticky' : ''}`} id="logo">
          <div id="f-that-logo" className={`animated-logo ${logoVisible ? 'fade-logo' : ''}`}>
            <a href="/" id="logo-link" onClick={handleLogoClick}>
              <img
                id="sign"
                ref={logoRef}
                src={dghSvg}
                alt="Dam Grela logo"
                className="sign"
              />
            </a>
          </div>
        </div>

        <div className="nav-menu fade" id="animate-nav">
          <button className="portfolio link under">
            {isHome
              ? <a href="#project-one">PORTFOLIO</a>
              : <Link to="/">PORTFOLIO</Link>
            }
          </button>
          <div className="button-wrapper">
            <div className="button">
              <a
                id="myEmailTop"
                href="mailto:dam.grela@gmail.com"
                onClick={handleEmailTop}
              >
                Say Hello.
              </a>
              <svg>
                <polyline className="o1" points="0 0, 130 0, 130 35, 0 35, 0 0" />
                <polyline className="o2" points="0 0, 130 0, 130 35, 0 35, 0 0" />
              </svg>
              <div className={emailCopied ? 'email-copied' : 'hide'} id="show-email">
                Email Copied
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile nav */}
      <input
        className="check"
        id="burger"
        type="checkbox"
        checked={menuOpen}
        onChange={() => setMenuOpen(o => !o)}
      />
      <label htmlFor="burger" id="burger-label">
        <span /><span /><span />
      </label>
      <nav className={menuOpen ? 'mobile-open' : ''}>
        <ul>
          <li>
            {isHome
              ? <a href="#project-one" onClick={() => setMenuOpen(false)}>PORTFOLIO</a>
              : <Link to="/" onClick={() => setMenuOpen(false)}>PORTFOLIO</Link>
            }
          </li>
          <li style={{ maxHeight: '80px' }}>
            <a id="myEmailMob" href="mailto:dam.grela@gmail.com" onClick={handleEmailMob}>
              SAY HELLO.
            </a>
            <a href="#" className={emailCopiedMob ? 'email-mobile' : 'hide'} id="email-mobile">
              EMAIL COPIED
            </a>
          </li>
          <li className="mob-link">
            <a href="https://www.linkedin.com/in/damian-grela-2405a31b8/" target="_blank" rel="noreferrer">
              <i className="fab fa-linkedin-in" />
            </a>
            <a href="https://github.com/damnge" target="_blank" rel="noreferrer">
              <i className="fab fa-github" />
            </a>
            <a href="https://codepen.io/damgrela" target="_blank" rel="noreferrer">
              <i className="fab fa-codepen" />
            </a>
          </li>
        </ul>
      </nav>
    </nav>
  );
}
