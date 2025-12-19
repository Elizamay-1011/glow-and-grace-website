import { FaFacebookF, FaInstagram, FaPinterestP } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import './Footer.css';

function Footer() {
  return (
    <footer className="site-footer">
      <div className="footer-top">
        <div className="footer-about">
          <h4>Rooted in Ritual</h4>
          <p>
            Crafted with ethically sourced botanicals and clinically proven actives.
            Our formulas honor the skin’s rhythm and the earth’s wisdom—designed to
            glow deeper, not louder.
          </p>
        </div>

        <div className="footer-links">
          <h4>Explore</h4>
          <ul>
            <li><Link to="/faq">FAQs</Link></li>
            <li><Link to="/partners">Partner With Us</Link></li>
            <li><Link to="/subscribe">Subscribe & Save</Link></li>
            <li><Link to="/refer">Refer a Friend</Link></li>
            <li><Link to="/stores">Store Locator</Link></li>
            <li><Link to="/skin-quiz">Skin Quiz</Link></li>
            <li><Link to="/discounts">Student & Other Discounts</Link></li>
            <li><Link to="/contact">Contact Us</Link></li>
          </ul>
        </div>

        <div className="footer-newsletter">
          <h4>Stay Radiant</h4>
          <p>
            Join our newsletter for rituals, reflections, and 15% off your first order.
          </p>

          <form className="newsletter-form" onSubmit={(e) => e.preventDefault()}>
            <input
              type="email"
              placeholder="Your email"
              required
            />
            <button type="submit">Subscribe</button>
          </form>

          <div className="icon-heart-envelope">❤️📩</div>
        </div>
      </div>

      <div className="footer-bottom">
        <p>
          © 2025 Glow & Grace Beauty. All Rights Reserved. – Eliza May G. Calisa
        </p>

        <ul className="footer-policy-links">
          <li><Link to="/terms">Terms & Conditions</Link></li>
          <li><Link to="/privacy">Privacy Policy</Link></li>
          <li><Link to="/accessibility">Accessibility</Link></li>
          <li><Link to="/sitemap">Site Map</Link></li>
        </ul>

        <div className="flex items-center gap-5 mt-2 footer-social">
          <a
            href="https://facebook.com"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Facebook"
            className="text-gray-500 hover:text-[#ff7aa2] transition-colors duration-300"
          >
            <FaFacebookF size={22} />
          </a>

          <a
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Instagram"
            className="text-gray-500 hover:text-[#ff7aa2] transition-colors duration-300"
          >
            <FaInstagram size={22} />
          </a>

          <a
            href="https://pinterest.com"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Pinterest"
            className="text-gray-500 hover:text-[#ff7aa2] transition-colors duration-300"
          >
            <FaPinterestP size={22} />
          </a>
        </div>


      </div>
    </footer>
  );
}

export default Footer;
