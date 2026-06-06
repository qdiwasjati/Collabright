function ProductDetail({ priceNow, priceWas, paymentUrl, onAdd }) {
  const [qty, setQty] = React.useState(1);
  const [active, setActive] = React.useState(0);
  const thumbs = [
    'assets/EB641AD7-BACA-4182-8046-A1F6BEC47F54.png',
    'assets/photo-pack-flatlay.jpg',
    'assets/photo-two-packs.jpg',
    'assets/photo-cream-hand.jpg',
  ];
  return (
    <section className="section pdp" id="shop" data-screen-label="07 Product Detail">
      <div className="container">
        <div className="pdp__row">
          <div className="pdp__gallery">
            <img src={thumbs[active]} alt="Product photo" style={{width:'100%', height:'100%', objectFit:'cover', borderRadius:18}} />
            <div className="pdp__thumbs">
              {thumbs.map((src, i) => (
                <button
                  key={i}
                  className={`pdp__thumb ${active === i ? 'is-active' : ''}`}
                  onClick={() => setActive(i)}
                  aria-label={`View image ${i + 1}`}
                >
                  <img src={src} alt="" />
                </button>
              ))}
            </div>
          </div>
          <div>
            <span className="eyebrow">✦ Best seller ✦</span>
            <h2 className="pdp__name">Colla Bright<br/>Brightening Body Mask ✨</h2>
            <div className="pdp__sub">50 gr · Sachet</div>
            <div className="pdp__rating">
              <span className="stars">★★★★★</span>
              <span><b style={{color:'var(--ink)'}}>4.8/5</b> · 5.247 reviews</span>
            </div>
            <div className="pdp__bullets">
              <div className="pdp__bullet">
                <span className="check"><Icon name="check" size={12} stroke="#1f7d4d" /></span>
                <div><b>Cerahkan dalam 15 menit</b><span>Kulit tampak lebih cerah seketika</span></div>
              </div>
              <div className="pdp__bullet">
                <span className="check"><Icon name="check" size={12} stroke="#1f7d4d" /></span>
                <div><b>Lembabkan & haluskan kulit</b><span>Bikin kulit terasa kenyal dan lembut</span></div>
              </div>
              <div className="pdp__bullet">
                <span className="check"><Icon name="check" size={12} stroke="#1f7d4d" /></span>
                <div><b>Bantu samarkan belang</b><span>Kulit lebih merata dan glowing</span></div>
              </div>
              <div className="pdp__bullet">
                <span className="check"><Icon name="check" size={12} stroke="#1f7d4d" /></span>
                <div><b>Aman untuk semua kulit</b><span>BPOM terdaftar · Vegan friendly</span></div>
              </div>
            </div>
            <div className="pdp__price-row">
              <span className="now">{priceNow}</span>
              <span className="was">{priceWas}</span>
              <span className="pdp__discount">HEMAT 30%</span>
            </div>
            <p className="pdp__shipping">Gratis ongkir Jabodetabek · COD tersedia · Kirim hari ini sebelum 14:00</p>
            <div className="pdp__qty">
              <span className="pdp__qty-label">Qty</span>
              <div className="pdp__qty-stepper">
                <button onClick={() => setQty(Math.max(1, qty - 1))} aria-label="Kurangi">−</button>
                <span>{qty}</span>
                <button onClick={() => setQty(qty + 1)} aria-label="Tambah">+</button>
              </div>
              <span style={{fontSize:12, color:'var(--fg-3)'}}>Stok terbatas — 43 tersisa</span>
            </div>
            <div className="pdp__cta-row">
              <a href={paymentUrl} className="btn btn--primary btn--lg btn--block">
                Beli Sekarang <Icon name="arrow" size={16} stroke="#fff" />
              </a>
            </div>
            <div className="pdp__guarantee">
              <Icon name="shield" size={14} /> Garansi 100% Ori · Tidak Cocok? Uang Kembali
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
window.ProductDetail = ProductDetail;
