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
