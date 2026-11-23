import { useScrollReveal } from '../hooks/useScrollReveal';
import styles from './About.module.css';

export default function About() {
  const reveal = useScrollReveal();

  return (
    <section id="about" className={styles.about}>
      <div className={`container ${styles.inner}`}>
        {/* Text side */}
        <div className={styles.textSide}>
          <p className={`section-label reveal ${styles.label}`} ref={reveal}>Our Story</p>
          <h2 className={`display reveal reveal-delay-1 ${styles.heading}`} ref={reveal}>
            A Place Born<br />from Passion
          </h2>
          <p className={`reveal reveal-delay-2 ${styles.body}`} ref={reveal}>
            Nestled in the heart of the city, Blanco Kitchen &amp; Terrace is more than a restaurant — it's an experience. 
            Our Mediterranean-inspired space, with its sun-drenched tones, classical columns, and open terraces, was 
            designed to make every visit feel like an escape.
          </p>
          <p className={`reveal reveal-delay-3 ${styles.body}`} ref={reveal}>
            We serve a thoughtfully curated menu — from wholesome kitchen favourites to vibrant terrace bites — 
            paired with handcrafted beverages and indulgent desserts. 
            Every dish carries the warmth and care of our kitchen's devotion to quality.
          </p>
          <div className={`reveal reveal-delay-4 ${styles.pillars}`} ref={reveal}>
            <div className={styles.pillar}>
              <span className={styles.pillarIcon}>🌿</span>
              <span className={styles.pillarLabel}>Open Terrace</span>
            </div>
            <div className={styles.pillar}>
              <span className={styles.pillarIcon}>🍽️</span>
              <span className={styles.pillarLabel}>Kitchen Cuisine</span>
            </div>
            <div className={styles.pillar}>
              <span className={styles.pillarIcon}>☀️</span>
              <span className={styles.pillarLabel}>Sunny Ambiance</span>
            </div>
          </div>
        </div>

        {/* Image side */}
        <div className={`reveal ${styles.imageSide}`} ref={reveal}>
          <div className={styles.imageFrame}>
            <img
              src="/assets/interior-4-DcTFBCIT.jpg"
              alt="Blanco Kitchen &amp; Terrace interior"
              className={styles.mainImage}
            />
          </div>
          <div className={styles.accentCard}>
            <img
              src="/assets/interior-5-B8079u3r.jpg"
              alt="Blanco cozy terrace corner"
              className={styles.accentImage}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
