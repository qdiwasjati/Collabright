function Hero({ onShop }) {
  return (
    <section className="hero" id="home" data-screen-label="01 Hero">
      <span className="sparkle sparkle--1">✦</span>
      <span className="sparkle sparkle--2">✧</span>
      <span className="sparkle sparkle--3">✦</span>
      <div className="container hero__inner">
        <div className="hero__copy">
          <h1 className="hero__title">
            Kulit kusam?<br />
            <span className="gradient">Glow balik</span> dalam{' '}
            <span className="timer">
              <Icon name="timer" size={20} stroke="#fff" /> 15 menit
            </span>
          </h1>
          <p className="hero__sub">
            Body mask berbahan Hydrolyzed Collagen + Niacinamide yang lagi
            dipake ribuan Gen Z. Sekali pakai, kulit langsung terasa lembab,
            cerah, dan glowing — gak pake ribet.
          </p>
          <div className="hero__ctas">
            <button className="btn btn--primary btn--lg" onClick={onShop}>
              Cobain Sekarang <Icon name="arrow" size={16} stroke="#fff" />
            </button>
            <button className="btn btn--secondary btn--lg">
              Lihat Hasilnya
            </button>
          </div>
          <div className="hero__features">
            <div className="hero__feat">
              <span className="ico"><Icon name="bolt" size={16} /></span>
              <b>Cerah Instan</b>
              <span>Hasil sekali pakai</span>
            </div>
            <div className="hero__feat">
              <span className="ico"><Icon name="shield" size={16} /></span>
              <b>BPOM Terdaftar</b>
              <span>Aman & teruji</span>
            </div>
            <div className="hero__feat">
              <span className="ico"><Icon name="leaf" size={16} /></span>
              <b>Vegan Friendly</b>
              <span>Cruelty free</span>
            </div>
          </div>
        </div>
        <div className="hero__visual">
          <img src="assets/photo-hero-girl.jpg" alt="Pengguna Colla Bright menunjukkan hasil glow" />
          <div className="hero__pack">
            <img src="assets/logo.svg" alt="" />
          </div>
          <div className="hero__stats">
            <div className="stat-pill">
              <div className="stat-pill__avatars" aria-hidden="true">
                <span></span><span></span><span></span>
              </div>
              <div>
                <div className="stat-pill__num">12.000+</div>
                <div className="stat-pill__label">Happy users</div>
              </div>
            </div>
            <div className="stat-pill">
              <Icon name="star" size={20} stroke="#FFD25A" fill="#FFD25A" />
              <div>
                <div className="stat-pill__num">4.8/5</div>
                <div className="stat-pill__label">5.000+ reviews</div>
              </div>
            </div>
            <div className="stat-pill">
              <span style={{fontSize: 20}}>🚚</span>
              <div>
                <div className="stat-pill__num">Gratis Ongkir</div>
                <div className="stat-pill__label">Min. Belanja 99K</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
window.Hero = Hero;
