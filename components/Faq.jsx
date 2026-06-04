function Faq() {
  const items = [
    { q: 'Apakah aman untuk kulit sensitif?', a: 'Aman banget! Colla Bright sudah BPOM-terdaftar, dermatologist-tested, dan formulanya gentle. Tapi kalau kulit kamu super reaktif, kami selalu saranin patch test 24 jam dulu di area dalam siku.' },
    { q: 'Berapa lama hasilnya kelihatan?', a: 'Kulit terasa lebih lembab dan terlihat lebih cerah seketika setelah pemakaian pertama (15 menit). Hasil maksimal — tone lebih merata, kulit lebih halus — biasanya kelihatan setelah 2-3 minggu pemakaian rutin (3x seminggu).' },
    { q: 'Bisa dipake di muka?', a: 'Colla Bright diformulasikan khusus untuk body (badan, lengan, kaki, leher). Untuk wajah, kami sarankan tunggu peluncuran Face Mask kami soon ✨' },
    { q: 'Aman buat ibu hamil & menyusui?', a: 'Bahan-bahan kami general-safe, tapi setiap kondisi berbeda. Kami selalu rekomendasikan konsultasi dulu dengan dokter kandungan kamu sebelum pakai produk skincare apapun.' },
    { q: 'Cara pemakaian yang benar?', a: '1) Bersihkan kulit. 2) Oleskan tipis dan merata. 3) Diamkan 10-15 menit (jangan sampai kering total). 4) Bilas dengan air hangat. Pakai 2-3x seminggu untuk hasil optimal.' },
    { q: 'Berapa lama isi 1 sachet bertahan?', a: 'Untuk full body application, 1 sachet (50 gr) cukup untuk 4-5x pemakaian. Untuk area tertentu (lengan/kaki saja), bisa sampai 8-10x pemakaian.' },
  ];
  const [open, setOpen] = React.useState(0);
  return (
    <section className="section" id="faq" data-screen-label="09 FAQ">
      <div className="container">
        <div className="section-head">
          <span className="eyebrow">✦ FAQ ✦</span>
          <h2 className="section-title">Pertanyaan yang sering <span className="accent">ditanyain</span></h2>
          <p className="section-sub">Masih ada yang bingung? DM kami di Instagram @collabright.id ✨</p>
        </div>
        <div className="faq__list">
          {items.map((it, i) => (
            <div key={i} className={`faq-item ${open === i ? 'is-open' : ''}`}>
              <button className="faq-item__q" onClick={() => setOpen(open === i ? -1 : i)} aria-expanded={open === i}>
                {it.q}
                <span className="faq-item__plus"><Icon name="plus" size={14} /></span>
              </button>
              <div className="faq-item__a">
                <p>{it.a}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
window.Faq = Faq;
