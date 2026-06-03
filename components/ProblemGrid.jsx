function ProblemGrid() {
  const problems = [
    { chip: 'KUSAM', title: 'Kulit Kusam', sub: 'Keliatan lelah & gak segar', img: 'assets/photo-girl-arm.jpg' },
    { chip: 'BELANG', title: 'Tone Belang', sub: 'Warna kulit gak merata',     img: 'assets/photo-arm-shimmer.jpg' },
    { chip: 'KERING', title: 'Kulit Kering', sub: 'Kasar & gampang gatel',      img: 'assets/photo-legs-ba.jpg' },
  ];
  return (
    <section className="section problems" data-screen-label="02 Problems">
      <div className="container">
        <div className="section-head">
          <span className="eyebrow">✦ Masalah kulit ✦</span>
          <h2 className="section-title">Kulit kamu lagi <span className="accent">kenapa?</span></h2>
          <p className="section-sub">Pilih masalahmu, temukan solusi terbaik. Colla Bright works untuk semua jenis kulit.</p>
        </div>
        <div className="problems__grid">
          {problems.map((p) => (
            <div className="problem-card" key={p.chip}>
              <img src={p.img} alt={p.title} loading="lazy" />
              <div className="problem-card__chip">
                <Icon name="sparkle" size={12} /> {p.chip}
              </div>
              <div className="problem-card__caption">
                <b>{p.title}</b>
                {p.sub}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
window.ProblemGrid = ProblemGrid;
