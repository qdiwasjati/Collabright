// Root App
const { useState, useEffect } = React;

function App() {
  const [t, setTweak] = useTweaks(window.SITE_DEFAULTS);

  // Apply body-level data-attrs for theme/density/animations/hero
  useEffect(() => {
    document.body.dataset.tint = t.themeTint;
    document.body.dataset.density = t.density;
    document.body.dataset.anim = t.animations ? 'on' : 'off';
    document.body.dataset.hero = t.heroVariant;
  }, [t.themeTint, t.density, t.animations, t.heroVariant]);

  const [cart, setCart] = useState(0);
  const onAdd = (qty = 1) => setCart(c => c + qty);

  const scrollToShop = () => {
    document.getElementById('shop')?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  return (
    <div className="site">
      <Header cartCount={cart} />
      <main>
        <Hero onShop={scrollToShop} />
        <Marquee />
        <ProblemGrid />
        <Ingredients />
        <BeforeAfter />
        <HowItWorks />
        <ProductDetail
          priceNow={t.priceNow}
          priceWas={t.priceWas}
          paymentUrl={t.paymentUrl}
          onAdd={onAdd}
        />
        <FlashSale stockLeft={t.stockLeft} stockTotal={t.stockTotal} paymentUrl={t.paymentUrl} />
        <Bundle paymentUrl={t.paymentUrl} />
        <Faq />
        <section className="section">
          <div className="container">
            <div className="cta-banner">
              <div className="cta-banner__inner">
                <h2>Glow balik <span className="gradient">dimulai sekarang</span></h2>
                <p>Bergabung dengan 12.000+ Gen Z yang udah ketemu glow-nya. Stok terbatas — hari ini diskon 29%.</p>
                <a href={t.paymentUrl} className="btn btn--primary btn--xl">
                  Beli Colla Bright Sekarang ✨
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
      <StickyCta priceNow={t.priceNow} priceWas={t.priceWas} paymentUrl={t.paymentUrl} enabled={t.stickyCta} />

      <TweaksPanel title="Tweaks">
        <TweakSection label="Payment">
          <TweakText
            label="Payment URL"
            value={t.paymentUrl}
            placeholder="https://checkout..."
            onChange={(v) => setTweak('paymentUrl', v)}
          />
        </TweakSection>

        <TweakSection label="Hero">
          <TweakRadio
            label="Layout"
            value={t.heroVariant}
            options={[{ value: 'split', label: 'Split' }, { value: 'centered', label: 'Centered' }]}
            onChange={(v) => setTweak('heroVariant', v)}
          />
        </TweakSection>

        <TweakSection label="Look & feel">
          <TweakSelect
            label="Theme tint"
            value={t.themeTint}
            options={[
              { value: 'balanced', label: 'Balanced' },
              { value: 'pink',     label: 'Pink' },
              { value: 'lilac',    label: 'Lilac' },
              { value: 'mint',     label: 'Mint accent' },
            ]}
            onChange={(v) => setTweak('themeTint', v)}
          />
          <TweakRadio
            label="Density"
            value={t.density}
            options={[{value:'tight',label:'Tight'},{value:'cozy',label:'Cozy'},{value:'airy',label:'Airy'}]}
            onChange={(v) => setTweak('density', v)}
          />
          <TweakToggle
            label="Animations"
            value={t.animations}
            onChange={(v) => setTweak('animations', v)}
          />
          <TweakToggle
            label="Sticky bottom CTA (mobile)"
            value={t.stickyCta}
            onChange={(v) => setTweak('stickyCta', v)}
          />
        </TweakSection>

        <TweakSection label="Pricing">
          <TweakText label="Price (now)" value={t.priceNow} onChange={(v) => setTweak('priceNow', v)} />
          <TweakText label="Price (was)" value={t.priceWas} onChange={(v) => setTweak('priceWas', v)} />
          <TweakNumber label="Stock left" value={t.stockLeft} min={0} max={t.stockTotal} onChange={(v) => setTweak('stockLeft', v)} />
          <TweakNumber label="Stock total" value={t.stockTotal} min={1} max={500} onChange={(v) => setTweak('stockTotal', v)} />
        </TweakSection>
      </TweaksPanel>
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);
