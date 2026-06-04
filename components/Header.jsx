function Header({ cartCount = 1 }) {
  const [open, setOpen] = React.useState(false);
  return (
    <header className="hdr" data-screen-label="Header">
      <div className="container hdr__inner">
        <a href="#" className="hdr__logo" aria-label="Colla Bright home">
          <img src="assets/logo.svg" alt="Colla Bright" />
        </a>
        <nav className="hdr__nav" aria-label="Primary">
          <a href="#home">Home</a>
          <a href="#shop">Shop</a>
          <a href="#science">Science</a>
          <a href="#reviews">Reviews</a>
          <a href="#faq">FAQ</a>
        </nav>
        <div className="hdr__icons">
          <button className="hdr__icon-btn hdr__cart" aria-label="Cart">
            <Icon name="cart" size={18} />
            {cartCount > 0 && <span className="hdr__cart-badge">{cartCount}</span>}
          </button>
        </div>
      </div>
    </header>
  );
}
window.Header = Header;
