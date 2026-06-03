function SocialProof() {
  const items = [
    { ico: 'heart',  num: '12.000+', label: 'Happy users' },
    { ico: 'shield', num: 'BPOM',    label: 'Terdaftar resmi' },
    { ico: 'flame',  num: 'Best Seller', label: 'Body Mask Viral' },
    { ico: 'cart',   num: 'Repeat Order', label: 'Banyak yang beli lagi' },
  ];
  return (
    <section className="section">
      <div className="container">
        <div className="proof">
          <h3 className="proof__title">Dipakai 12.000+ orang minggu ini 💖</h3>
          <div className="proof__items">
            {items.map((it) => (
              <div className="proof-item" key={it.label}>
                <span className="proof-item__ico"><Icon name={it.ico} size={22} /></span>
                <span className="proof-item__num">{it.num}</span>
                <span className="proof-item__label">{it.label}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
window.SocialProof = SocialProof;
