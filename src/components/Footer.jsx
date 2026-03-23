import { useState, useRef } from 'react';
import { useIntersectionObserver } from '../hooks/useIntersectionObserver';

export default function Footer() {
  const [tooltip, setTooltip] = useState('Copy to clipboard');

  const titleRef  = useRef(null);
  const divRef    = useRef(null);
  const secondRef = useRef(null);
  const linksRef  = useRef(null);

  useIntersectionObserver([titleRef, divRef, secondRef, linksRef]);

  function handleEmailBot(e) {
    e.preventDefault();
    navigator.clipboard?.writeText('dam.grela@gmail.com').catch(() => {
      const d = document.createElement('input');
      document.body.appendChild(d);
      d.value = 'dam.grela@gmail.com';
      d.select();
      document.execCommand('copy');
      document.body.removeChild(d);
    });
    setTooltip('Email copied!');
  }

  return (
    <footer id="call-to-action">
      <div className="container center">

        <h1 ref={titleRef} className="footer-title observer-play">
          Want to create?
        </h1>

        <div ref={divRef} className="fade-divider observer-play">
          <div className="divider-headline shine short-center" />
        </div>

        <div ref={secondRef} className="second-footer observer-play">
          <p>
            If you are interested in working together, let's chat to set the ball rolling.
            Don't worry, the coffee is on me. If we are a good fit, I will give you a time
            and cost estimate.
          </p>

          <div className="tooltip">
            <a
              id="myEmailBot"
              className="main-btn btn-effect"
              data-sm-link-text="Let's talk"
              href="mailto:dam.grela@gmail.com"
              onClick={handleEmailBot}
              onMouseOut={() => setTooltip('Copy to clipboard')}
            >
              <span>say hello.</span>
            </a>
            <span className="tooltiptext">{tooltip}</span>
          </div>

          <div ref={linksRef} className="links observer-play">
            <a href="https://www.linkedin.com/in/damian-grela-2405a31b8/" target="_blank" rel="noreferrer">
              <i className="fab fa-linkedin-in" />
            </a>
            <a href="https://github.com/damnge" target="_blank" rel="noreferrer">
              <i className="fab fa-github" />
            </a>
            <a href="https://codepen.io/damgrela" target="_blank" rel="noreferrer">
              <i className="fab fa-codepen" />
            </a>
          </div>

          <div className="copyright">© Copyright – Damian Grela</div>
        </div>

      </div>
    </footer>
  );
}
