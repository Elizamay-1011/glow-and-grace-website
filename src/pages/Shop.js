import React, { useEffect, useState } from 'react';
import './Shop.css';
import cartIcon from '../assets/images/cart-icon.png';

// Product images
import riceCleanser from '../assets/images/ricemilk-cleanser.jpg';
import botanicalCleanser from '../assets/images/botanical-cleanser.jpg';
import balmCleanser from '../assets/images/balm-cleanser.jpg';
import dailyCream from '../assets/images/daily-cream-moisturizer.jpg';
import ceramideCream from '../assets/images/ceramide-cream.jpg';
import serum from '../assets/images/serum.jpg';
import lipVelvet from '../assets/images/lip-velvet.jpg';
import blushBalm from '../assets/images/blush-balm.jpg';
import browGel from '../assets/images/brow-gel.jpg';
import bodyPolish from '../assets/images/body-polish.jpg';
import bodyOil from '../assets/images/body-oil.jpg';
import bodyButter from '../assets/images/body-butter.jpg';
import hairSerum from '../assets/images/hair-serum.jpg';
import hairMask from '../assets/images/hair-mask.jpg';
import shampoo from '../assets/images/shampoo.jpg';
import herbalTea from '../assets/images/herbal-tea.jpg';
import collagen from '../assets/images/collagen-powder.jpg';
import mist from '../assets/images/mist-spray.jpg';
import roller from '../assets/images/facial-roller.jpg';

function Shop() {

  useEffect(() => {
    document.title = 'Glow and Grace Beauty | Shop';
  }, []);

  const [search, setSearch] = useState('');
  const [cartItems, setCartItems] = useState([]);
  const [showCart, setShowCart] = useState(false);
  const [showConfirm, setShowConfirm] = useState(false);
  const [confirmItem, setConfirmItem] = useState(null);
  const [confirmQty, setConfirmQty] = useState(1);

  // Add to cart confirmation
  const handleAddClick = (item) => {
    setConfirmItem(item);
    setConfirmQty(1);
    setShowConfirm(true);
  };

  const confirmAddToCart = () => {
    const existingIndex = cartItems.findIndex(ci => ci.name === confirmItem.name);
    if (existingIndex >= 0) {
      const updated = [...cartItems];
      updated[existingIndex].qty += confirmQty;
      setCartItems(updated);
    } else {
      setCartItems([...cartItems, { ...confirmItem, qty: confirmQty, checked: true }]);
    }
    setShowConfirm(false);
  };

  // Cart item quantity change
  const handleQtyChange = (index, value) => {
    const updated = [...cartItems];
    updated[index].qty = parseInt(value) || 1;
    setCartItems(updated);
  };

  // Toggle cart item checkbox
  const handleCartCheck = (index) => {
    const updated = [...cartItems];
    updated[index].checked = !updated[index].checked;
    setCartItems(updated);
  };

  const handleCheckout = () => {
    const checkedItems = cartItems.filter(item => item.checked);
    if (checkedItems.length === 0) return alert('Select at least one item to checkout!');
    alert(`Checked out ${checkedItems.length} item(s)!`);
    setCartItems(cartItems.filter(item => !item.checked));
  };

  // Sample product data
  const productData = [
    {
      category: 'Skin Care',
      products: [
        { img: riceCleanser, name: 'Gentle Rice Milk Cleanser', desc: 'Softens and brightens with fermented rice extract.', oldPrice: 'Php 1,200', newPrice: 'Php 1,000', rating: '★★★★★', reviews: '(69 Reviews)' },
        { img: botanicalCleanser, name: 'Gentle Botanical Cleanser', desc: 'Infused with green tea and chamomile for calming clarity.', oldPrice: 'Php 999.99', newPrice: 'Php 749.99', rating: '★★★★', reviews: '(53 Reviews)' },
        { img: balmCleanser, name: 'Enzyme Balm Cleanser', desc: 'Melts away makeup while nourishing with papaya enzymes.', oldPrice: 'Php 799.99', newPrice: 'Php 599.99', rating: '★★★', reviews: '(114 Reviews)' },
        { img: dailyCream, name: 'HydraBloom Daily Cream', desc: 'Hydrates all day with a light, silky texture.', oldPrice: 'Php 1,500', newPrice: 'Php 1,200', rating: '★★★★', reviews: '(87 Reviews)' },
        { img: ceramideCream, name: 'Ceramide Comfort Cream', desc: 'Strengthens skin barrier with ceramides and shea butter.', oldPrice: 'Php 1,800', newPrice: 'Php 1,450', rating: '★★★★★', reviews: '(92 Reviews)' },
        { img: serum, name: 'Radiance Revival Serum', desc: 'Boosts glow with vitamin C and hyaluronic acid.', oldPrice: 'Php 2,000', newPrice: 'Php 1,650', rating: '★★★★', reviews: '(76 Reviews)' },
      ],
    },
    {
      category: 'Makeup',
      products: [
        { img: lipVelvet, name: 'Lip Velvet Tint', desc: 'Long-lasting matte color with nourishing oils.', oldPrice: 'Php 650', newPrice: 'Php 499', rating: '★★★★', reviews: '(120 Reviews)' },
        { img: blushBalm, name: 'Blush Balm', desc: 'Creamy blush that blends effortlessly for a natural flush.', oldPrice: 'Php 550', newPrice: 'Php 420', rating: '★★★', reviews: '(68 Reviews)' },
        { img: browGel, name: 'Brow Sculpt Gel', desc: 'Shapes and tints brows for a polished look all day.', oldPrice: 'Php 700', newPrice: 'Php 560', rating: '★★★★', reviews: '(54 Reviews)' },
      ],
    },
    {
      category: 'Body Care',
      products: [
        { img: bodyPolish, name: 'Botanical Body Polish', desc: 'Exfoliates and smooths skin with natural sugar crystals.', oldPrice: 'Php 950', newPrice: 'Php 750', rating: '★★★★', reviews: '(88 Reviews)' },
        { img: bodyOil, name: 'Glow Body Oil', desc: 'Lightweight oil for radiant, hydrated skin.', oldPrice: 'Php 1,200', newPrice: 'Php 950', rating: '★★★★★', reviews: '(102 Reviews)' },
        { img: bodyButter, name: 'Coconut Body Butter', desc: 'Rich cream with coconut and shea for deep moisturization.', oldPrice: 'Php 1,100', newPrice: 'Php 880', rating: '★★★★', reviews: '(75 Reviews)' },
      ],
    },
    {
      category: 'Hair Care',
      products: [
        { img: hairSerum, name: 'Silk Repair Hair Serum', desc: 'Repairs damaged ends and adds silky shine.', oldPrice: 'Php 1,400', newPrice: 'Php 1,120', rating: '★★★★', reviews: '(66 Reviews)' },
        { img: hairMask, name: 'Deep Nourish Hair Mask', desc: 'Intense hydration for dry and brittle hair.', oldPrice: 'Php 1,600', newPrice: 'Php 1,280', rating: '★★★★★', reviews: '(80 Reviews)' },
        { img: shampoo, name: 'Botanical Shampoo', desc: 'Gentle cleansing with herbal extracts for healthy scalp.', oldPrice: 'Php 900', newPrice: 'Php 720', rating: '★★★★', reviews: '(91 Reviews)' },
      ],
    },
    {
      category: 'Wellness & Inner Beauty',
      products: [
        { img: herbalTea, name: 'DreamEase Herbal Tea', desc: 'Calms the mind and aids restful sleep.', oldPrice: 'Php 450', newPrice: 'Php 350', rating: '★★★★★', reviews: '(60 Reviews)' },
        { img: collagen, name: 'Glow Collagen Powder', desc: 'Supports skin elasticity and overall radiance.', oldPrice: 'Php 1,200', newPrice: 'Php 950', rating: '★★★★', reviews: '(72 Reviews)' },
        { img: mist, name: 'Mood Mist Spray', desc: 'Refreshing facial mist with uplifting botanicals.', oldPrice: 'Php 550', newPrice: 'Php 420', rating: '★★★★', reviews: '(48 Reviews)' },
      ],
    },
    {
      category: 'Beauty Accessories',
      products: [
        { img: roller, name: 'Rose Quartz Facial Roller', desc: 'Promotes circulation and lymphatic drainage for glowing skin.', oldPrice: 'Php 850', newPrice: 'Php 680', rating: '★★★★', reviews: '(101 Reviews)' },
      ],
    },
  ];

  // Filter products by search
  const filteredData = productData.map(cat => ({
    ...cat,
    products: cat.products.filter(product =>
      product.name.toLowerCase().includes(search.toLowerCase())
    ),
  }));

  const cartCount = cartItems.reduce((acc, item) => acc + item.qty, 0);

  const totalAmount = cartItems
  .filter(item => item.checked)
  .reduce((acc, item) => {
    const price = parseFloat((item.newPrice || item.oldPrice).replace(/[^0-9.-]+/g,""));
    return acc + price * item.qty;
  }, 0)
  .toLocaleString('en-PH', { style: 'currency', currency: 'PHP' });

  return (
    <section className="featured" id="shop">
      {/* Top bar */}
      <div className="shop-top-bar">
        <input
          type="text"
          placeholder="Search products..."
          className="search-input"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
        <div className="cart-wrapper">
          <img
            src={cartIcon}
            alt="Cart"
            className="cart-img"
            onClick={() => setShowCart(true)}
          />
          {cartCount > 0 && <span className="cart-badge">{cartCount}</span>}
        </div>
      </div>

      <h2>Our Products</h2>
      <p className="section-intro">From skin rituals to soul care, every product we craft is a reflection of your story — a celebration of your journey, your heritage, your glow.</p>
      <p className="section-intro">This is beauty reimagined — inclusive, intuitive, and deeply personal.</p>

      {/* Render categories */}
      {filteredData.map((cat, idx) => (
        <div className="product-category" key={idx}>
          <h3>{cat.category}</h3>
          <div className="product-grid">
            {cat.products.length > 0 ? (
              cat.products.map((prod, i) => (
                <ProductCard
                  key={i}
                  img={prod.img}
                  name={prod.name}
                  desc={prod.desc}
                  oldPrice={prod.oldPrice}
                  newPrice={prod.newPrice}
                  rating={prod.rating}
                  reviews={prod.reviews}
                  onAdd={() => handleAddClick(prod)}
                />
              ))
            ) : (
              <p>No products found.</p>
            )}
          </div>
        </div>
      ))}

      {/* Confirmation Modal */}
      {showConfirm && confirmItem && (
        <div className="confirm-modal">
          <div className="confirm-content">
            <h4>Add to Cart</h4>
            <img src={confirmItem.img} alt={confirmItem.name} className="confirm-img" />
            <p>{confirmItem.name}</p>
            <p>{confirmItem.newPrice || confirmItem.oldPrice}</p>
            <div className="quantity-selector">
              <button
                onClick={() => setConfirmQty(prev => Math.max(1, prev - 1))}
                className="qty-btn"
              >
                −
              </button>
              <span className="qty-number">{confirmQty}</span>
              <button
                onClick={() => setConfirmQty(prev => prev + 1)}
                className="qty-btn"
              >
                +
              </button>
            </div>
            <div className="confirm-buttons">
              <button onClick={confirmAddToCart}>Confirm</button>
              <button onClick={() => setShowConfirm(false)}>Cancel</button>
            </div>
          </div>
        </div>
      )}

      {/* Cart Tab */}
      {showCart && (
        <div className="cart-tab">
          <button className="cart-close-btn" onClick={() => setShowCart(false)}>×</button>
          <h3>Shopping Cart</h3>
          {cartItems.length === 0 && <p>Your cart is empty.</p>}
          {cartItems.map((item, idx) => (
            <div className="cart-item" key={idx}>
              <input
                type="checkbox"
                checked={item.checked}
                onChange={() => handleCartCheck(idx)}
              />
              <img src={item.img} alt={item.name} className="cart-item-img" />
              <div className="cart-item-info">
                <span className="cart-item-name">{item.name}</span>
                <span className="cart-item-price">{item.newPrice || item.oldPrice}</span>
                <input
                  type="number"
                  value={item.qty}
                  min="1"
                  onChange={(e) => handleQtyChange(idx, e.target.value)}
                  className="cart-item-qty"
                />
              </div>
              {/* Delete button */}
              <button
                className="cart-item-delete"
                onClick={() => {
                  const updatedCart = cartItems.filter((_, i) => i !== idx);
                  setCartItems(updatedCart);
                }}
              >
                🗑️
              </button>
            </div>
          ))}

          {/* Total Amount */}
          {cartItems.filter(item => item.checked).length > 0 && (
            <div className="cart-total">
              <span>Total:</span>
              <span>{totalAmount}</span>
            </div>
          )}

          {cartItems.length > 0 && (
            <button className="checkout-btn" onClick={handleCheckout}>Checkout</button>
          )}
        </div>
      )}

          </section>
        );
      }

      // ProductCard component
      function ProductCard({ img, name, desc, oldPrice, newPrice, rating, reviews, onAdd }) {
        return (
          <div className="product-card">
            <img src={img} alt={name} className="product-img" />
            <div className="product-info">
              <h4 className="product-name">{name}</h4>
              {desc && <p className="product-desc">{desc}</p>}
              {(oldPrice || newPrice) && (
                <div className="product-price">
                  {oldPrice && <span className="old-price">{oldPrice}</span>}
                  {newPrice && <span className="new-price">{newPrice}</span>}
                </div>
              )}
              {rating && (
                <div className="product-rating">
                  {rating} <span className="review-count">{reviews}</span>
                </div>
              )}
              <button className="add-to-cart" onClick={onAdd}>Add to Cart</button>
            </div>
          </div>
        );
}

export default Shop;
