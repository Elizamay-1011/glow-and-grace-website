import React, { useEffect } from 'react';
import './About.css';
import founderImg from '../assets/images/founder.png'; // update path if needed
import { Link } from 'react-router-dom';

export default function About() {
  useEffect(() => {
    document.title = 'About Glow and Grace Beauty';
  }, []);
  
  return (
    <div className="about-page">

      {/* Hero */}
      <section className="about-hero">
        <h1>About Glow & Grace</h1>
        <p>
          Rooted in ritual, crafted with care — skincare designed to nourish
          both your skin and confidence.
        </p>
      </section>

      {/* Core Values */}
      <section className="about-values">
        <h2 className="text-center">Our Core Values</h2>

        <div className="values-cards">
          <div className="card">
            <h4>Ethically Sourced Ingredients</h4>
            <p>
              We carefully select botanicals from sustainable and responsible
              sources. Every ingredient supports your skin while respecting
              nature and the communities behind it.
            </p>
          </div>

          <div className="card">
            <h4>Clinically Proven Formulas</h4>
            <p>
              Our products blend science and nature, ensuring each formula is
              tested for safety, effectiveness, and visible results you can
              trust.
            </p>
          </div>

          <div className="card">
            <h4>Empowerment Through Skincare</h4>
            <p>
              Skincare is more than appearance — it’s self-care. We create
              products that help you feel confident, radiant, and comfortable
              in your own skin.
            </p>
          </div>

          <div className="card">
            <h4>Transparency</h4>
            <p>
              No hidden ingredients, no false promises. We believe honesty
              builds trust, so you always know exactly what goes on your skin.
            </p>
          </div>
        </div>
      </section>

      {/* Founder */}
      <section className="founder-profile">
        <h2 className="text-center">Meet the Founder</h2>

        <div className="profile-card">
          {/* Image LEFT */}
          <img
            src={founderImg}
            alt="Founder of Glow & Grace"
            className="founder-img"
          />

          {/* Text RIGHT */}
          <div className="profile-text">
            <h3>Eliza May G. Calisa</h3>
            <p>
              Glow & Grace was founded from a personal journey to find skincare
              that felt gentle, honest, and effective. What began as self-care
              quickly grew into a mission to help others feel confident in their
              natural glow.
            </p>
            <p>
              By combining ethically sourced botanicals with clinically proven
              ingredients, Eliza aims to create skincare that feels like a daily
              ritual — calming, empowering, and rooted in grace.
            </p>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="mission-vision">
        <div className="card">
          <h4>Our Mission</h4>
          <p>
            To create thoughtful skincare that nurtures skin health while
            encouraging mindful self-care.
          </p>
        </div>

        <div className="card">
          <h4>Our Vision</h4>
          <p>
            A world where skincare is inclusive, transparent, and empowering
            for everyone.
          </p>
        </div>
      </section>

      {/* CTA */}
        <section className="about-cta text-center">
          <h3>Discover Your Glow</h3>
          <Link to="/skinquiz" className="btn-gg">
            Take the Skin Quiz
          </Link>
        </section>

    </div>
  );
}
