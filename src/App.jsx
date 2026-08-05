// SECTION 1: IMPORTS (Gather your tools and styles)
import { useState } from "react";
import "./App.css";

// SECTION 2: COMPONENT FUNCTION (Write your JavaScript logic)
export default function App() {
  const [isOpen, setIsOpen] = useState(false);

  // SECTION 3: RETURN STATEMENT (Write your HTML markup)
  return (<>
<div className="App">
  <header className="header">
    <div className="spacer"></div>
    <div>
    <span className="current_page">Home</span>
    <span>Shop</span>
    <span>About</span>
    <span>Contact</span>
    </div>
    <span>Login</span>
    
    
  </header>
  <div className="main_content"><div className="intro">
    <img src="src/assets/skyrim.jpg" alt="Intro Image" />
    <div className="intro-text">
      <h1>Welcome to Our Website</h1>
    </div>
  </div>
  <div className="hot_deals">
    <h2>Hot Deals</h2>
    <div className="deals_row"> <div className="deal_container">
      <img src="src/assets/skyrim.webp" alt="deal1 image" />
      <p>Skyrim Special Edition</p>
      <div> <hr className="deal-divider"></hr>
      <price>£399 EGP</price>
      </div>
     
    </div>
    <div className="deal_container">
      <img src="src/assets/kcd2.webp" alt="deal2 image" />
      <p>KCD2</p>
      <div><hr className="deal-divider"></hr>
      <price>£699 EGP</price></div>
       
    </div>
    <div className="deal_container">
      <img src="src/assets/hades2.jpg" alt="deal3 image" />
      <p>Hades II</p>
      <div><hr className="deal-divider"></hr>
      <price>£649 EGP</price></div>
        
    </div>
    <div className="deal_container">
      <img src="src/assets/clair_obscur_expedition_33.webp" alt="deal4 image" />
      <p>Clair Obscur Expedition 33</p>
      <div> <hr className="deal-divider"></hr>
      <price>£1499 EGP</price></div>
      
    </div>
    <div className="deal_container">
      <img src="src/assets/death_stranding.webp" alt="deal5 image" />
      <p>Death Stranding</p>
      <div> <hr className="deal-divider"></hr>
      <price>£749 EGP</price></div>
    </div>
    </div>
      <div className="deals_row">
        <div className="deal_container">
          <img src="src/assets/death_stranding.webp" alt="deal1 image" />
          <p>Death Stranding</p>
          <div>
            <hr className="deal-divider" />
            <price>£749 EGP</price>
          </div>
        </div>
        <div className="deal_container">
          <img src="src/assets/skyrim.webp" alt="deal2 image" />
          <p>Skyrim Special Edition</p>
          <div>
            <hr className="deal-divider" />
            <price>£399 EGP</price>
          </div>
        </div>
        <div className="deal_container">
          <img src="src/assets/clair_obscur_expedition_33.webp" alt="deal3 image" />
          <p>Clair Obscur Expedition 33</p>
          <div>
            <hr className="deal-divider" />
            <price>£1499 EGP</price>
          </div>
        </div>
        <div className="deal_container">
          <img src="src/assets/hades2.jpg" alt="deal4 image" />
          <p>Hades II</p>
          <div>
            <hr className="deal-divider" />
            <price>£649 EGP</price>
          </div>
        </div>
        <div className="deal_container">
          <img src="src/assets/kcd2.webp" alt="deal5 image" />
          <p>KCD2</p>
          <div>
            <hr className="deal-divider" />
            <price>£699 EGP</price>
          </div>
        </div>
      </div>
      <div className="deals_row">
        <div className="deal_container">
          <img src="src/assets/kcd2.webp" alt="deal1 image" />
          <p>KCD2</p>
          <div>
            <hr className="deal-divider" />
            <price>£699 EGP</price>
          </div>
        </div>
        <div className="deal_container">
          <img src="src/assets/hades2.jpg" alt="deal2 image" />
          <p>Hades II</p>
          <div>
            <hr className="deal-divider" />
            <price>£649 EGP</price>
          </div>
        </div>
        <div className="deal_container">
          <img src="src/assets/skyrim.webp" alt="deal3 image" />
          <p>Skyrim Special Edition</p>
          <div>
            <hr className="deal-divider" />
            <price>£399 EGP</price>
          </div>
        </div>
        <div className="deal_container">
          <img src="src/assets/death_stranding.webp" alt="deal4 image" />
          <p>Death Stranding</p>
          <div>
            <hr className="deal-divider" />
            <price>£749 EGP</price>
          </div>
        </div>
        <div className="deal_container">
          <img src="src/assets/clair_obscur_expedition_33.webp" alt="deal5 image" />
          <p>Clair Obscur Expedition 33</p>
          <div>
            <hr className="deal-divider" />
            <price>£1499 EGP</price>
          </div>
        </div>
      </div>
   
  </div>
  <h1 style={{ textAlign: "center" }}>why choose us?</h1>
  <div className="features">
    <div className="feature_box">We offer the best price.
      <p>In our website we guarantee you the best price for the product and we offer a price-match guarantee.</p>
    </div>
    <div className="feature_box">We offer fast delivery.
      <p>We deliver your order within 24 hours of placement.</p>
    </div>
    <div className="feature_box">We offer local payments.
      <p>We accept various local payment methods for your convenience, you don't need a credit card.</p>
    </div>
  </div></div>
  
  <div className="bottom_bar">
    <div>made by Youssef Elsawy</div>
    <div> <img src="src/assets/visa.jpg" alt="Visa Logo" />
    <img src="src/assets/mastercard.png" alt="Mastercard Logo" />
    <img src="src/assets/paypal.png" alt="PayPal Logo" />
    <img src="src/assets/meeza.png" alt="meeza Logo" />
    <img src="src/assets/images2.png" alt="orange cash Logo" />
    <img src="src/assets/instapay.png" alt="instapay Logo" />
    <img src="src/assets/vodafone_cash.jpg" alt="vodafone cash logo" />
    </div>
    <div>© 2026 youssef's company. All rights reserved.</div>
   
  </div>
</div>
    </>
  );
}