import styles from './Hero.module.css';

export default function Hero({ onReserve }) {
  const scrollToMenu = () => {
    const el = document.querySelector('#menu');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="hero" className={styles.hero}>
      {/* Background image */}
      <div className={styles.bg} style={{ backgroundImage: "url('/assets/interior-1-Cw0K3cW9.jpg')" }} />

      {/* Layered overlays for depth */}
      <div className={styles.overlayBase} />
      <div className={styles.overlayVignette} />
      <div className={styles.overlayGrain} />

      {/* Ambient floating orbs */}
      <div className={styles.orb1} />
      <div className={styles.orb2} />

      {/* Content */}
      <div className={styles.content}>

        {/* Eyebrow label */}
        <div className={styles.eyebrow}>
          <span className={styles.eyebrowLine} />
          <p className={styles.label}>Welcome to</p>
          <span className={styles.eyebrowLine} />
        </div>

        {/* Main title */}
        <h1 className={styles.title}>
          <span className={styles.titleWordA}>Blanco</span>
          <span className={styles.titleWordB}>
            <em>Kitchen &amp; Terrace</em>
          </span>
        </h1>

        {/* Tagline */}
        <p className={styles.tagline}>
          Where every plate tells a story &amp; every sip becomes a memory.
        </p>

        {/* CTA Buttons */}
        <div className={styles.actions}>
          <button className={styles.btnPrimary} onClick={onReserve}>
            <span>Reserve a Table</span>
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M5 12h14M12 5l7 7-7 7" />
            </svg>
          </button>
          <button className={styles.btnGhost} onClick={scrollToMenu}>
            <span>View Menu</span>
          </button>
        </div>

        {/* Stats bar */}
        <div className={styles.statsBar}>
          <div className={styles.stat}>
            <span className={styles.statNum}>Rooftop</span>
            <span className={styles.statLabel}>Open Terrace</span>
          </div>
          <div className={styles.divider} />
          <div className={styles.stat}>
            <span className={styles.statNum}>Kitchen</span>
            <span className={styles.statLabel}>Multi Cuisine</span>
          </div>
          <div className={styles.divider} />
          <div className={styles.stat}>
            <span className={styles.statNum}>4.3 ★</span>
            <span className={styles.statLabel}>Google Rating</span>
          </div>
        </div>
      </div>

      {/* Scroll cue */}
      <div className={styles.scrollCue}>
        <div className={styles.scrollDot} />
        <div className={styles.scrollLine} />
        <span>Scroll</span>
      </div>

      {/* Diagonal cut at bottom */}
      <div className={styles.bottomCut} />
    </section>
  );
}
