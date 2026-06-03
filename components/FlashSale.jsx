function FlashSale({ stockLeft = 43, stockTotal = 100, paymentUrl }) {
  const [time, setTime] = React.useState({ h: 3, m: 45, s: 27 });
  React.useEffect(() => {
    const t = setInterval(() => {
      setTime(({ h, m, s }) => {
        let ns = s - 1, nm = m, nh = h;
        if (ns < 0) { ns = 59; nm -= 1; }
        if (nm < 0) { nm = 59; nh -= 1; }
        if (nh < 0) return { h: 23, m: 59, s: 59 };
        return { h: nh, m: nm, s: ns };
      });
    }, 1000);
    return () => clearInterval(t);
  }, []);
  const fmt = (n) => String(n).padStart(2, '0');
  const pct = ((stockTotal - stockLeft) / stockTotal) * 100;
  return (
    <section className="section">
      <div className="container">
        <div className="flash">
          <div className="flash__inner">
            <div className="flash__head">
              <span className="ico"><Icon name="flame" size={22} stroke="#e83a86" /></span>
              <h3 className="flash__title">
                Harga Spesial Hari Ini
                <small>Berakhir dalam:</small>
              </h3>
            </div>
            <div className="flash__timer">
              <div className="flash__cell">{fmt(time.h)}<small>JAM</small></div>
              <div className="flash__cell">{fmt(time.m)}<small>MENIT</small></div>
              <div className="flash__cell">{fmt(time.s)}<small>DETIK</small></div>
            </div>
            <div style={{display:'flex', flexDirection:'column', gap:10, minWidth: 200}}>
              <div className="flash__progress">
                <div className="flash__bar"><i style={{width: `${pct}%`}} /></div>
              </div>
              <div className="flash__progress-label">Sisa stok hari ini · {stockLeft} pcs</div>
              <a href={paymentUrl} target="_blank" rel="noopener noreferrer" className="btn btn--primary">
                Checkout Sekarang <Icon name="arrow" size={14} stroke="#fff" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
window.FlashSale = FlashSale;
