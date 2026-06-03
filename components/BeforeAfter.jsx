// Interactive before/after slider
function BeforeAfter() {
  const [split, setSplit] = React.useState(50);
  const ref = React.useRef(null);
  const dragging = React.useRef(false);

  const move = (clientX) => {
    const r = ref.current.getBoundingClientRect();
    const pct = ((clientX - r.left) / r.width) * 100;
    setSplit(Math.max(2, Math.min(98, pct)));
  };
  const onDown = (e) => { dragging.current = true; const cx = e.touches?.[0]?.clientX ?? e.clientX; move(cx); };
  const onMove = (e) => { if (!dragging.current) return; const cx = e.touches?.[0]?.clientX ?? e.clientX; move(cx); };
  const onUp = () => { dragging.current = false; };

  React.useEffect(() => {
    window.addEventListener('mousemove', onMove);
    window.addEventListener('mouseup', onUp);
    window.addEventListener('touchmove', onMove, { passive: true });
    window.addEventListener('touchend', onUp);
    return () => {
      window.removeEventListener('mousemove', onMove);
      window.removeEventListener('mouseup', onUp);
      window.removeEventListener('touchmove', onMove);
      window.removeEventListener('touchend', onUp);
    };
  }, []);

  return (
    <section className="section ba" data-screen-label="05 Before After">
      <div className="container">
        <div className="ba__row">
          <div
            className="ba-slider"
            ref={ref}
            style={{ '--split': `${split}%` }}
            onMouseDown={onDown}
            onTouchStart={onDown}
            role="slider" aria-valuemin="0" aria-valuemax="100" aria-valuenow={Math.round(split)}
            aria-label="Geser untuk membandingkan before dan after"
          >
            <img className="ba-slider__before" src="assets/photo-legs-ba.jpg" alt="Sebelum" />
            <img className="ba-slider__after" src="assets/photo-arm-shimmer.jpg" alt="Sesudah" />
            <span className="ba-slider__label ba-slider__label--before">BEFORE</span>
            <span className="ba-slider__label ba-slider__label--after">AFTER ✨</span>
            <div className="ba-slider__handle">
              <div className="ba-slider__knob">
                <Icon name="chevron" size={12} style={{transform:'rotate(180deg)'}} />
                <Icon name="chevron" size={12} />
              </div>
            </div>
          </div>
          <div>
            <span className="eyebrow">✦ Real testing ✦</span>
            <h2 className="section-title">Geser & lihat <span className="accent">perubahannya</span></h2>
            <p className="section-sub">Hasil dari Devina, 23 — pemakaian rutin 2 minggu, 3x seminggu. Foto belum diedit, lighting natural.</p>
            <div className="ba__metrics">
              <div className="ba-metric">
                <div className="ba-metric__num">+87%</div>
                <div className="ba-metric__label">Kulit terasa lebih lembab*</div>
              </div>
              <div className="ba-metric">
                <div className="ba-metric__num">+92%</div>
                <div className="ba-metric__label">Kulit terlihat lebih cerah*</div>
              </div>
              <div className="ba-metric">
                <div className="ba-metric__num">15 mnt</div>
                <div className="ba-metric__label">Hasil instan terasa</div>
              </div>
              <div className="ba-metric">
                <div className="ba-metric__num">96%</div>
                <div className="ba-metric__label">Akan repurchase**</div>
              </div>
            </div>
            <p style={{fontSize: 11, color: 'var(--fg-3)', marginTop: 14}}>
              *Survey 240 pengguna setelah 2 minggu pemakaian rutin. **Customer survey Q4 2024.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
window.BeforeAfter = BeforeAfter;
