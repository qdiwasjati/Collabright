function UgcReels() {
  const reels = [
    { caption: '"WANGI BANGET & langsung cerah!"', handle: '@kirana11', views: '2.3M', img: 'assets/photo-hero-girl.jpg' },
    { caption: '"Kulit jadi halus dan lembap"',    handle: '@aaklara',  views: '890K', img: 'assets/photo-girl-arm.jpg' },
    { caption: '"15 menit udah keliatan bedanya 😱"', handle: '@dianinda', views: '1.5M', img: 'assets/photo-arm-shimmer.jpg' },
    { caption: '"Gampang dipake, hasilnya wow"',   handle: '@stellaaonn', views: '720K', img: 'assets/photo-legs-ba.jpg' },
    { caption: '"Teksturnya enak, super lembut"',  handle: '@orange8live', views: '410K', img: 'assets/photo-cream-hand.jpg' },
    { caption: '"Re-order ke 4 — beneran works"',  handle: '@nayssr',    views: '320K', img: 'assets/photo-two-packs.jpg' },
  ];
  return (
    <section className="section ugc" data-screen-label="03 UGC Reels">
      <div className="container">
        <div className="section-head" style={{textAlign:'left', maxWidth: 'unset', display:'flex', justifyContent:'space-between', alignItems:'flex-end', flexWrap:'wrap', gap:16}}>
          <div>
            <span className="eyebrow">✦ Real result ✦</span>
            <h2 className="section-title" style={{marginBottom:8}}>Real Result, <span className="accent">No Filter</span></h2>
            <p className="section-sub" style={{marginBottom:0}}>Bukan iklan — ini real reaction dari mereka ✨</p>
          </div>
          <button className="btn btn--secondary">
            Lihat semua <Icon name="chevron" size={14} />
          </button>
        </div>
        <div className="ugc__strip">
          {reels.map((r, i) => (
            <div className="reel" key={i}>
              <div className="reel__thumb">
                <img src={r.img} alt={r.caption} loading="lazy" />
                <span className="reel__play"><Icon name="play" size={14} stroke="none" fill="#1a1a1a" /></span>
                <span className="reel__views"><Icon name="eye" size={12} stroke="#fff" /> {r.views}</span>
              </div>
              <p className="reel__cap">{r.caption}</p>
              <div className="reel__handle">{r.handle}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
window.UgcReels = UgcReels;
