function Bundle({ paymentUrl }) {
  return (
    <section className="section">
      <div className="container">
        <div className="bundle">
          <div className="bundle__hemat">
            HEMAT
            <b>44%</b>
          </div>
          <div className="bundle__row">
            <div className="bundle__copy">
              <span className="eyebrow" style={{color:'var(--lilac-700)'}}>✦ Bundle deal ✦</span>
              <h3>Glow lebih hemat — ambil bundling-nya!</h3>
              <p>2 PCS Colla Bright. Kulit hemat, hasil maksimal! Bonus pouch eksklusif.</p>
            </div>
            <div className="bundle__visual">
              <div className="bundle__pack"><img src="assets/product-main.jpg" alt="Colla Bright" style={{width:'100%',height:'100%',objectFit:'cover',borderRadius:12}} /></div>
              <span className="bundle__plus">+</span>
              <div className="bundle__pack"><img src="assets/product-main.jpg" alt="Colla Bright" style={{width:'100%',height:'100%',objectFit:'cover',borderRadius:12}} /></div>
            </div>
            <div className="bundle__cta">
              <div className="bundle__price">
                <s>Rp 198.000</s>
                <b>Rp 110.000</b>
                Hemat Rp 88.000
              </div>
              <a href={paymentUrl} className="btn btn--primary btn--lg btn--block">
                Ambil Bundle-nya <Icon name="arrow" size={16} stroke="#fff" />
              </a>
              <div style={{display:'flex', justifyContent:'space-around', fontSize:11, color:'var(--ink-soft)'}}>
                <span style={{display:'flex',alignItems:'center',gap:4}}><Icon name="truck" size={14}/> Bisa COD</span>
                <span style={{display:'flex',alignItems:'center',gap:4}}><Icon name="shield" size={14}/> Garansi Aman</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
window.Bundle = Bundle;
