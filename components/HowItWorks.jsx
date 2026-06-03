function HowItWorks() {
  const steps = [
    { num: '01', title: 'Bersihkan kulit', desc: 'Mandi atau bersihkan area yang mau di-treat. Keringkan.', time: '2 mnt' },
    { num: '02', title: 'Aplikasi mask',  desc: 'Oleskan tipis ke kulit. Pijat lembut sampai meresap.', time: '3 mnt' },
    { num: '03', title: 'Tunggu & relax', desc: 'Diamkan 10 menit. Saatnya scrolling TikTok ✨', time: '10 mnt' },
    { num: '04', title: 'Bilas & glow',   desc: 'Bilas dengan air. Done — kulit langsung glowing!', time: '< 1 mnt' },
  ];
  return (
    <section className="section how" data-screen-label="06 How it works">
      <div className="container">
        <div className="section-head">
          <span className="eyebrow">✦ Cara pakai ✦</span>
          <h2 className="section-title">Glow dalam <span className="accent">4 langkah easy</span></h2>
          <p className="section-sub">Total 15 menit. Bisa sambil nonton K-drama. Gak ribet.</p>
        </div>
        <div className="how__steps">
          {steps.map((s) => (
            <div className="step" key={s.num}>
              <div className="step__time">{s.time}</div>
              <div className="step__num">{s.num}</div>
              <h3 className="step__title">{s.title}</h3>
              <p className="step__desc">{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
window.HowItWorks = HowItWorks;
