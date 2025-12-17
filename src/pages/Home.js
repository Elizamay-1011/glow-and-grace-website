// src/pages/Home.js
import React from 'react';
import { Link } from 'react-router-dom';
import './Home.css';
import titleBg from '../assets/images/titlecontent-bg.svg';
import skincareImg from '../assets/images/skincare.jpg';
import makeupImg from '../assets/images/makeup.jpg';
import bodycareImg from '../assets/images/bodycare.jpg';
import haircareImg from '../assets/images/haircare.jpg';
import wellnessImg from '../assets/images/wellness.jpg';
import accessoriesImg from '../assets/images/accessories.jpg';
import image1 from '../assets/images/image1.jpg';
import image2 from '../assets/images/image2.webp';

function Home() {
  return (
    <div>
      {/* NavBar is already imported in App.js, no need to repeat here */}

      {/* Title Section */}
      <div
        className="title-wrapper"
        style={{ backgroundImage: `url(${titleBg})` }}
      >
        <header className="title-bar" id="home">
          <div className="title-content">
            <div className="logo-title">
              <h1>GLOW AND GRACE <br /> BEAUTY</h1>
              <p>
                Where skincare meets soul care. Designed to reveal your
                natural brilliance, one ritual at a time.
              </p>
              <Link to="/shop" className="cta-button">Shop Now</Link>
            </div>
          </div>
        </header>
      </div>

      {/* Promo Banner */}
      <section className="promo-banner">
        <div className="promo-content">
          <h3>Get 20% Off Your First Purchase</h3>
          <p>
            Join the Glow & Grace ritual and receive exclusive offers, radiant
            tips, and soulful skincare straight to your inbox.
          </p>
          <Link to="/shop" className="promo-button">Shop Now & Glow</Link>
        </div>
      </section>

      {/* Featured Products */}
      <section className="featured" id="products">
        <h2>Our Products</h2>
        <div className="product-grid">
          <article className="product-card">
            <img src={skincareImg} alt="Skin Care" />
            <h3>Skin Care</h3>
            <p>Glow where no glow has gone before.</p>
            <Link to="/shop#skincare" className="product-button">Shop Skin Care</Link>
          </article>

          <article className="product-card">
            <img src={makeupImg} alt="Make Ups" />
            <h3>Make Ups</h3>
            <p>Your lips, but louder.</p>
            <Link to="/shop#makeup" className="product-button">Shop Make Ups</Link>
          </article>

          <article className="product-card">
            <img src={bodycareImg} alt="Body Care" />
            <h3>Body Care</h3>
            <p>Wash, rinse, slay.</p>
            <Link to="/shop#bodycare" className="product-button">Shop Body Care</Link>
          </article>
        </div>
      </section>

      {/* More Products */}
      <section className="featured" id="more-products">
        <h2>More to Explore</h2>
        <div className="product-grid">
          <article className="product-card">
            <img src={haircareImg} alt="Hair Care" />
            <h3>Hair Care</h3>
            <p>Bad hair day? Not on our watch—lather, laugh, and let it shine!</p>
            <Link to="/shop#haircare" className="product-button">Shop Hair Care</Link>
          </article>

          <article className="product-card">
            <img src={wellnessImg} alt="Wellness and Inner Beauty" />
            <h3>Wellness and Inner Beauty</h3>
            <p>Self-care isn’t selfish—it’s skincare for your soul.</p>
            <Link to="/shop#wellness" className="product-button">Shop Wellness</Link>
          </article>

          <article className="product-card">
            <img src={accessoriesImg} alt="Beauty Accessories" />
            <h3>Beauty Accessories</h3>
            <p>Beauty tools so good, your makeup might write them a thank-you note.</p>
            <Link to="/shop#accessories" className="product-button">Shop Accessories</Link>
          </article>
        </div>
      </section>

      {/* Ingredient Section */}
      <section className="ingredient" id="ingredients">
        <div className="ingredient-content">
          <h2>What We’re Made Of</h2>
          <p>
            Every formula begins with intention. We blend botanicals that whisper calm with science that speaks results—because your skin deserves both gentleness and truth.<br /><br />
            No fillers, no fakes, no compromises. Just clean ingredients, conscious choices, and care that goes deeper than the surface.<br /><br />
            We believe beauty should feel like clarity: honest, nourishing, and unapologetically you.
          </p>
        </div>
      </section>

      {/* Articles Section */}
      <section className="article-section" id="article-section">
        <h2>See Our Products In Action</h2>

        <article className="article-row">
          <div className="article-text">
            <h2>Glow Deeper: The Rituals Behind Radiant Skin</h2>
            <p>Discover how daily skincare becomes a mindful ritual of renewal and self-respect.</p>
            <a href="#" className="read-more">Read More →</a>
          </div>
          <div className="article-image1">
            <img src={image1} alt="Radiant skincare" />
          </div>
        </article>

        <article className="article-row reverse">
          <div className="article-image">
            <img src={image2} alt="Lip tint shades" />
          </div>
          <div className="article-text">
            <h2>Color Theory: How Your Lip Tint Speaks Louder Than Words</h2>
            <p>Explore how makeup choices reflect mood, identity, and cultural storytelling.</p>
            <a href="#" className="read-more">Read More →</a>
          </div>
        </article>
      </section>

      {/* Footer */}
      <footer className="site-footer">
        {/* ... Keep your footer HTML as-is; links can be converted to React Router Links if needed */}
      </footer>
    </div>
  );
}

export default Home;
