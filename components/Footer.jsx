function Footer() {
  return (
    <footer className="footer" data-screen-label="Footer">
      <div className="container">
        <div className="footer__grid">
          <div className="footer__brand">
            <img src="assets/logo.svg" alt="Colla Bright" />
            <p>Body mask brightening favorit Gen Z Indonesia. Kulit glow, harga ramah, vibes selalu seru ✨</p>
            <div className="footer__social">
              <a href="#" aria-label="Instagram"><Icon name="instagram" size={18} /></a>
              <a href="#" aria-label="TikTok"><Icon name="tiktok" size={18} /></a>
              <a href="#" aria-label="WhatsApp"><Icon name="whatsapp" size={18} /></a>
              <a href="#" aria-label="YouTube"><Icon name="youtube" size={18} /></a>
            </div>
          </div>
          <div className="footer__col">
            <h4>Shop</h4>
            <ul>
              <li>Body Mask</li>
              <li>Bundling</li>
              <li>Coming Soon</li>
              <li>Track Order</li>
            </ul>
          </div>
          <div className="footer__col">
            <h4>About</h4>
            <ul>
              <li>Brand Story</li>
              <li>Ingredients</li>
              <li>Press & Media</li>
              <li>Sustainability</li>
            </ul>
          </div>
          <div className="footer__col footer__newsletter">
            <h4>Stay in the loop</h4>
            <input type="email" placeholder="email kamu nih ✨" />
            <button className="btn btn--primary btn--block">Subscribe</button>
            <p style={{fontSize: 11, color:'var(--fg-3)', marginTop: 8}}>Dapet diskon 10% untuk pembelian pertama 💕</p>
          </div>
        </div>
        <div className="footer__bottom">
          <span>© 2025 Colla Bright. Made with 💕 in Jakarta.</span>
          <span style={{display:'flex', gap: 18}}>
            <a href="#">Privacy</a>
            <a href="#">Terms</a>
            <a href="#">Shipping</a>
            <a href="#">Returns</a>
          </span>
        </div>
      </div>
    </footer>
  );
}
window.Footer = Footer;
