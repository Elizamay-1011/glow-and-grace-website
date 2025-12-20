// src/pages/SkinQuiz.js
import React, { useState, useEffect } from 'react';
import './SkinQuiz.css';

export default function SkinQuiz() {

  useEffect(() => {
    document.title = 'Glow and Grace Beauty | Skin Quiz';
  }, []);
  
  const [answers, setAnswers] = useState({
    skinType: '',
    skinConcern: '',
    routine: ''
  });

  const [showModal, setShowModal] = useState(false);
  const [email, setEmail] = useState('');

  const progress = Math.round(
    (Object.values(answers).filter(ans => ans !== '').length / 3) * 100
  );

  const handleChange = (question, value) => {
    setAnswers(prev => ({ ...prev, [question]: value }));
  };

  // Generate recommendations based on answers
  const getRecommendations = () => {
    const recs = [];

    if (answers.skinType === 'Dry') recs.push('Use a hydrating cleanser and moisturizer.');
    if (answers.skinType === 'Oily') recs.push('Use a gentle foaming cleanser and oil-free moisturizer.');
    if (answers.skinType === 'Combination') recs.push('Focus on balancing the T-zone while moisturizing cheeks.');
    if (answers.skinType === 'Sensitive') recs.push('Use fragrance-free and calming skincare products.');

    if (answers.skinConcern === 'Acne') recs.push('Consider products with salicylic acid or benzoyl peroxide.');
    if (answers.skinConcern === 'Dryness') recs.push('Look for rich moisturizers with ceramides.');
    if (answers.skinConcern === 'Aging') recs.push('Use serums with retinol or peptides.');
    if (answers.skinConcern === 'Dullness') recs.push('Incorporate vitamin C and exfoliation.');

    if (answers.routine === 'Daily') recs.push('Maintain a consistent morning and evening routine.');
    if (answers.routine === 'Weekly') recs.push('Try to incorporate key steps a few times a week.');
    if (answers.routine === 'Rarely') recs.push('Start with a simple daily routine to see improvements.');

    return recs;
  };

  // 🔁 FORCE PAGE REFRESH AFTER SUBMIT
  const handleGetGlowPlan = () => {
    if (!email) {
      alert('Please enter your email!');
      return;
    }

    alert(`Glow Plan sent to ${email}!`);

    // Force refresh (resets quiz completely)
    window.location.reload();
  };

  return (
    <div className="skinquiz-page">
      {/* Quiz Header */}
      <div className="quiz-header">
        <h1 className="text-pink">
          <span className="star">★</span> Find Your Glow <span className="star">★</span>
        </h1>
        <p>Take our skin quiz to discover your perfect skincare match.</p>
      </div>

      {/* Progress Bar */}
      <div className="progress-container">
        <div className="progress-bar-bg">
          <div className="progress-bar-fill" style={{ width: `${progress}%` }} />
        </div>
      </div>

      {/* Quiz Form */}
      <div className="quiz-form">
        <form onSubmit={(e) => e.preventDefault()}>
          {/* Question 1 */}
          <div className="question-card">
            <h5>1. What’s your skin type?</h5>
            <div className="options">
              {['Dry', 'Oily', 'Combination', 'Sensitive'].map(type => (
                <label key={type} className="option-label">
                  <input
                    type="radio"
                    name="skinType"
                    value={type}
                    checked={answers.skinType === type}
                    onChange={() => handleChange('skinType', type)}
                  />
                  {type}
                </label>
              ))}

              <div className="skin-guide-cards">
                <div className="skin-guide-card">
                  <h6>Dry Skin</h6>
                  <p>Feels tight, flaky, or rough. Needs extra hydration.</p>
                </div>

                <div className="skin-guide-card">
                  <h6>Oily Skin</h6>
                  <p>Shiny appearance, enlarged pores, prone to breakouts.</p>
                </div>

                <div className="skin-guide-card">
                  <h6>Combination Skin</h6>
                  <p>Oily T-zone with dry or normal cheeks.</p>
                </div>

                <div className="skin-guide-card">
                  <h6>Sensitive Skin</h6>
                  <p>Easily irritated, reacts to fragrance or harsh products.</p>
                </div>
              </div>

            </div>
          </div>

          {/* Question 2 */}
          <div className="question-card">
            <h5>2. What’s your top skin concern?</h5>
            <select
              value={answers.skinConcern}
              onChange={(e) => handleChange('skinConcern', e.target.value)}
            >
              <option value="">Choose one...</option>
              <option value="Acne">Acne & Blemishes</option>
              <option value="Dryness">Dryness & Flakiness</option>
              <option value="Aging">Fine Lines & Wrinkles</option>
              <option value="Dullness">Dullness & Uneven Tone</option>
            </select>
          </div>

          {/* Question 3 */}
          <div className="question-card">
            <h5>3. How often do you use skincare products?</h5>
            <div className="options">
              {[
                { value: 'Daily', label: 'Daily' },
                { value: 'Weekly', label: 'A few times a week' },
                { value: 'Rarely', label: 'Rarely' }
              ].map(opt => (
                <label key={opt.value} className="option-label">
                  <input
                    type="radio"
                    name="routine"
                    value={opt.value}
                    checked={answers.routine === opt.value}
                    onChange={() => handleChange('routine', opt.value)}
                  />
                  {opt.label}
                </label>
              ))}
            </div>
          </div>

          {/* Show Modal Button */}
          <div className="button-group">
            <button
              type="button"
              className="btn-gg"
              disabled={progress < 100}
              onClick={() => setShowModal(true)}
            >
              Get My Recommendations
            </button>
          </div>
        </form>
      </div>

      {/* Modal */}
      {showModal && (
        <div className="modal-overlay">
          <div className="modal-content">
            <h3>Your Glow Recommendations</h3>
            <ul>
              {getRecommendations().map((rec, index) => (
                <li key={index}>{rec}</li>
              ))}
            </ul>

            <div className="email-input">
              <input
                type="email"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>

            <button className="btn-gg" onClick={handleGetGlowPlan}>
              Get My Glow Plan
            </button>

            <button className="btn-close" onClick={() => setShowModal(false)}>
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
