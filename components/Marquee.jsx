function Marquee() {
  const items = [
    { ico: 'sparkle', text: 'GLOW BALIK DALAM 15 MENIT' },
    { ico: 'shield', text: 'BPOM TERDAFTAR' },
    { ico: 'truck', text: 'GRATIS ONGKIR JABODETABEK' },
    { ico: 'star', text: '4.8 RATING · 5.000+ REVIEWS' },
    { ico: 'leaf', text: 'VEGAN & CRUELTY FREE' },
    { ico: 'heart', text: '12 RIBU+ HAPPY USERS' },
  ];
  // duplicate for seamless loop
  const all = [...items, ...items];
  return (
    <div className="marquee" aria-hidden="true">
      <div className="marquee__track">
        {all.map((it, i) => (
          <span className="marquee__item" key={i}>
            <Icon name={it.ico} size={16} stroke="#FFB6D2" />
            {it.text}
            <span className="dot">✦</span>
          </span>
        ))}
      </div>
    </div>
  );
}
window.Marquee = Marquee;
