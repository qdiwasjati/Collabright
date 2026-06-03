function Ingredients() {
  const items = [
    { ico: 'drop',  tone: 'pink',   name: 'Niacinamide',          desc: 'Mencerahkan kulit dan menyamarkan noda hitam' },
    { ico: 'flask', tone: 'lilac',  name: 'Hydrolyzed Collagen',  desc: 'Melembabkan & menjaga elastisitas kulit' },
    { ico: 'leaf',  tone: 'butter', name: 'Curcuma Extract',      desc: 'Anti-inflamasi & meratakan warna kulit' },
    { ico: 'sparkle', tone: 'mint', name: 'Sodium Hyaluronate',   desc: 'Hydrating booster — kulit auto plump' },
  ];
  return (
    <section className="section ingredients" id="science" data-screen-label="04 Ingredients">
      <div className="container">
        <div className="section-head">
          <span className="eyebrow">✦ Bahan aktif ✦</span>
          <h2 className="section-title">Yang bikin <span className="accent">beneran works</span></h2>
          <p className="section-sub">4 hero ingredients diformulasikan dengan dosis efektif. Aman untuk semua jenis kulit, terdaftar BPOM.</p>
        </div>
        <div className="ing-grid">
          {items.map((i) => (
            <div className="ing-card" key={i.name}>
              <div className={`ing-card__ico ing-card__ico--${i.tone}`}>
                <Icon name={i.ico} size={28} stroke="#5C23B6" />
              </div>
              <h3 className="ing-card__name">{i.name}</h3>
              <p className="ing-card__desc">{i.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
window.Ingredients = Ingredients;
