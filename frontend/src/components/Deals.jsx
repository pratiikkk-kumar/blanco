import { useScrollReveal } from '../hooks/useScrollReveal';
import styles from './Deals.module.css';

export default function Deals() {
  const reveal = useScrollReveal();

  return (
    <section id="experiences" className={styles.section}>
      {/* Decorative Mediterranean architectural ambiance */}
      <div className={styles.ambientGlow1} aria-hidden />
      <div className={styles.ambientGlow2} aria-hidden />
      <div className={styles.geometricPattern} aria-hidden />

      <div className="container" style={{ position: 'relative', zIndex: 2 }}>
        
        {/* Section Header */}
        <div className={styles.headerLayout}>
          <div className={`reveal ${styles.headerText}`} ref={reveal}>
            <div className={styles.badgeRow}>
              <span className={styles.columnIcon}>🏛️</span>
              <p className="section-label">Terrace Life &amp; Curated Moments</p>
            </div>
            <h2 className={`display ${styles.heading}`}>
              Exclusive<br />
              <em>Experiences</em>
            </h2>
          </div>
          <div className={`reveal reveal-delay-1 ${styles.headerInfo}`} ref={reveal}>
            <p>
              From sunset terrace aperitivos to unforgettable starlit celebrations, immerse yourself in the Mediterranean warmth of Blanco Kitchen &amp; Terrace.
            </p>
          </div>
        </div>

        {/* Feature Grid */}
        <div className={styles.experiencesGrid}>
          
          {/* Card 1: Rooftop Sundowners */}
          <div className={`reveal ${styles.experienceCard} ${styles.sundownerCard}`} ref={reveal}>
            <div className={styles.cardHeader}>
              <div className={styles.iconCircle}>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="12" cy="12" r="4"/>
                  <path d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M6.34 17.66l-1.41 1.41M19.07 4.93l-1.41 1.41"/>
                </svg>
              </div>
              <span className={styles.tagPill}>Golden Hour</span>
            </div>
            <h3 className={styles.cardTitle}>Sunset Aperitivo Hours</h3>
            <p className={styles.cardDescription}>
              Watch the evening unfold above the city. Enjoy handcrafted mocktails, artisanal mezze, and small plates paired with relaxed open-air rooftop breeze from 4:30 PM to 7:00 PM.
            </p>
            <div className={styles.cardFooter}>
              <span className={styles.perkNote}>✦ Daily on the Open Terrace</span>
            </div>
          </div>

          {/* Card 2: Private Rooftop Celebrations */}
          <div className={`reveal reveal-delay-1 ${styles.experienceCard} ${styles.celebrationCard}`} ref={reveal}>
            <div className={styles.cardHeader}>
              <div className={styles.iconCircle}>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                </svg>
              </div>
              <span className={styles.tagPill}>Private Dining</span>
            </div>
            <h3 className={styles.cardTitle}>Celebrations Under the Stars</h3>
            <p className={styles.cardDescription}>
              Birthdays, anniversaries, intimate proposals, and family milestones. Let our team arrange bespoke floral decor, personalized menus, and our signature celebratory desserts.
            </p>
            <div className={styles.celebrationActions}>
              <a
                href="https://wa.me/910000000000?text=Hi%20Blanco!%20I%20would%20like%20to%20plan%20a%20celebration%20on%20the%20terrace."
                target="_blank"
                rel="noopener noreferrer"
                className={styles.terraceCtaBtn}
              >
                <span>Curate Your Celebration</span>
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M5 12h14M12 5l7 7-7 7" />
                </svg>
              </a>
            </div>
          </div>

          {/* Card 3: Large Groups & Corporate Soirées */}
          <div className={`reveal reveal-delay-2 ${styles.experienceCard}`} ref={reveal}>
            <div className={styles.cardHeader}>
              <div className={styles.iconCircle}>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/>
                  <circle cx="9" cy="7" r="4"/>
                  <path d="M23 21v-2a4 4 0 0 0-3-3.87"/>
                  <path d="M16 3.13a4 4 0 0 1 0 7.75"/>
                </svg>
              </div>
              <span className={styles.tagPill}>Gatherings</span>
            </div>
            <h3 className={styles.cardTitle}>Terrace Socials &amp; Group Banquets</h3>
            <p className={styles.cardDescription}>
              Spacious multi-level seating tailored for corporate team offsites, reunion dinners, and festive gatherings with specialized group dining packages and seamless hospitality.
            </p>
            <div className={styles.cardFooter}>
              <span className={styles.perkNote}>✦ Dedicated event host &amp; customized menus</span>
            </div>
          </div>

          {/* Card 4: Blanco Circle / Social Privilege */}
          <div className={`reveal reveal-delay-3 ${styles.experienceCard} ${styles.circleCard}`} ref={reveal}>
            <div className={styles.cardHeader}>
              <div className={styles.iconCircle}>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
                  <circle cx="12" cy="12" r="4"/>
                  <circle cx="17.5" cy="6.5" r="0.8" fill="currentColor" stroke="none"/>
                </svg>
              </div>
              <span className={styles.tagPill}>Insider Club</span>
            </div>
            <h3 className={styles.cardTitle}>Join the Blanco Circle</h3>
            <p className={styles.cardDescription}>
              Tag us in your terrace reels &amp; stories, or follow our journey on Instagram. Show your check-in to our host for an exclusive seasonal dessert or chef's tasting perk.
            </p>
            <div className={styles.socialActionRow}>
              <a
                href="https://www.instagram.com/blanco.bhubaneswar/"
                target="_blank"
                rel="noopener noreferrer"
                className={styles.instagramBadge}
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
                  <circle cx="12" cy="12" r="4"/>
                  <circle cx="17.5" cy="6.5" r="0.8" fill="currentColor" stroke="none"/>
                </svg>
                <span>@blanco.bhubaneswar</span>
              </a>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
