function Reviews() {
  const [filter, setFilter] = React.useState('semua');
  const data = [
    { stars: 5, name: 'Cindeniaa',  init: 'C', date: '3 hari lalu', tag: 'cerah', text: 'Jujur awalnya ragu, tapi ini works! Kulitku jadi lebih cerah dan gak kusam banget. Wangi-nya juga enak ✨' },
    { stars: 5, name: 'Belleefh',   init: 'B', date: '1 minggu lalu', tag: 'lembab', text: 'Wangi enak, gampang dipake, hasilnya langsung kelihatan! Kulit auto lembab dan halus.' },
    { stars: 5, name: 'Hetelyy',    init: 'H', date: '2 minggu lalu', tag: 'cerah', text: 'Udah repurchase ke 3 kali nih! Body mask favorit aku banget. Worth every rupiah 💕' },
    { stars: 5, name: 'Naysarrr',   init: 'N', date: '3 minggu lalu', tag: 'belang', text: 'Tone belang aku gara-gara sering kena matahari mulai samar setelah 2 minggu pake. Surprised banget.' },
    { stars: 4, name: 'Devinaaaa',  init: 'D', date: '1 bulan lalu', tag: 'lembab', text: 'Bagus banget buat kulit kering kayak aku. Tekstur creamy gak lengket. Bintang 4 karena pengen ukuran tube juga 🥺' },
    { stars: 5, name: 'Sashaa.r',   init: 'S', date: '1 bulan lalu', tag: 'cerah', text: 'Pertama kali pake langsung notice kulit lebih bright. Pas dipake malem, paginya kulit super lembab. The best!' },
  ];
  const filtered = filter === 'semua' ? data : data.filter(r => r.tag === filter);
  const filters = [
    { id: 'semua', label: 'Semua review' },
    { id: 'cerah', label: 'Cerah' },
    { id: 'lembab', label: 'Lembab' },
    { id: 'belang', label: 'Tone belang' },
  ];
  return (
    <section className="section" id="reviews" data-screen-label="08 Reviews">
      <div className="container">
        <div className="reviews__head">
          <h2>
            Mereka udah <span style={{fontStyle:'italic', background:'linear-gradient(95deg,var(--lilac-700),var(--pink-600))', WebkitBackgroundClip:'text', backgroundClip:'text', color:'transparent'}}>buktiin!</span>
            <small>4.8/5 · 5.247 reviews · 96% akan repurchase</small>
          </h2>
          <button className="btn btn--secondary">Lihat semua review <Icon name="chevron" size={14} /></button>
        </div>
        <div className="reviews__filter">
          {filters.map(f => (
            <button
              key={f.id}
              className={`review-chip ${filter === f.id ? 'is-active' : ''}`}
              onClick={() => setFilter(f.id)}
            >{f.label}</button>
          ))}
        </div>
        <div className="reviews__grid">
          {filtered.map((r, i) => (
            <article className="review" key={i}>
              <div className="review__top">
                <span className="review__stars">{'★'.repeat(r.stars)}{'☆'.repeat(5 - r.stars)}</span>
                <span className="review__verified"><Icon name="check" size={12} stroke="#2eb872" /> Verified</span>
              </div>
              <p className="review__text">{r.text}</p>
              <div className="review__bottom">
                <div className="review__author">
                  <span className="review__avatar">{r.init}</span>
                  <span className="review__name">@{r.name}</span>
                </div>
                <span className="review__date">{r.date}</span>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
window.Reviews = Reviews;
