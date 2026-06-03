function StickyCta({ priceNow, priceWas, paymentUrl, enabled }) {
  const [show, setShow] = React.useState(false);
  React.useEffect(() => {
    if (!enabled) { setShow(false); return; }
    const onScroll = () => setShow(window.scrollY > 600 && window.scrollY < document.body.scrollHeight - 1200);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, [enabled]);
  if (!enabled) return null;
  return (
    <div className={`sticky-cta ${show ? 'is-visible' : ''}`}>
      <div className="sticky-cta__price">
        <span className="now">{priceNow}</span>
        <span className="was">{priceWas}</span>
        <small>Gratis ongkir · COD tersedia</small>
      </div>
      <a href={paymentUrl} target="_blank" rel="noopener noreferrer" className="btn btn--primary sticky-cta__btn">
        Beli Sekarang
      </a>
    </div>
  );
}
window.StickyCta = StickyCta;
