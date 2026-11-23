import { useState } from 'react';
import styles from './ReserveModal.module.css';

export default function ReserveModal({ isOpen, onClose }) {
  const [form, setForm] = useState({
    name: '',
    email: '',
    phone: '',
    date: '',
    time: '',
    guests: '2',
    seating: 'Rooftop Terrace (Open Sky)',
    notes: ''
  });
  const [status, setStatus] = useState('idle'); // idle | loading | success | error
  const [message, setMessage] = useState('');

  if (!isOpen) return null;

  const handleChange = (e) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('loading');
    
    // Combine seating preference into notes for backend compatibility
    const payload = {
      name: form.name,
      email: form.email,
      phone: form.phone,
      date: form.date,
      time: form.time,
      guests: form.guests,
      notes: `[Preference: ${form.seating}] ${form.notes}`.trim()
    };

    try {
      const res = await fetch('/api/reservations', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      });
      const data = await res.json();
      if (res.ok) {
        setStatus('success');
        setMessage(data.message);
        setForm({
          name: '',
          email: '',
          phone: '',
          date: '',
          time: '',
          guests: '2',
          seating: 'Rooftop Terrace (Open Sky)',
          notes: ''
        });
      } else {
        setStatus('error');
        setMessage(data.error || 'Something went wrong. Please try again.');
      }
    } catch {
      setStatus('error');
      setMessage('Unable to connect. Please message us on WhatsApp or call us directly.');
    }
  };

  const today = new Date().toISOString().split('T')[0];

  const timeSlots = [
    '12:00 PM', '1:00 PM', '2:00 PM', '3:00 PM', '4:00 PM',
    '5:00 PM', '6:00 PM', '7:00 PM', '8:00 PM', '9:00 PM',
    '10:00 PM', '11:00 PM', '12:00 AM'
  ];

  return (
    <div className={styles.backdrop} onClick={onClose}>
      <div className={styles.modal} onClick={(e) => e.stopPropagation()}>
        {/* Close Button */}
        <button className={styles.close} onClick={onClose} aria-label="Close">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
            <line x1="18" y1="6" x2="6" y2="18" />
            <line x1="6" y1="6" x2="18" y2="18" />
          </svg>
        </button>

        {/* Modal Header */}
        <div className={styles.header}>
          <div className={styles.columnBadge}>
            <span className={styles.badgeIcon}>🏛️</span>
            <span className="section-label">Terrace Reservations</span>
          </div>
          <h2 className={`display ${styles.title}`}>Book a Table</h2>
          <p className={styles.subtitle}>
            Join us above the city for culinary excellence, sunset aperitivos &amp; starlit rooftop dining.
          </p>
        </div>

        {status === 'success' ? (
          <div className={styles.successState}>
            <div className={styles.successIcon}>✓</div>
            <h3 className={`display ${styles.successTitle}`}>Table Reserved!</h3>
            <p className={styles.successMsg}>{message}</p>
            <p className={styles.terraceNotice}>
              ✦ Our team will send a confirmation via WhatsApp or phone. We look forward to hosting you at Blanco Kitchen &amp; Terrace!
            </p>
            <button className={`btn btn-primary ${styles.doneBtn}`} onClick={onClose}>
              Done
            </button>
          </div>
        ) : (
          <form className={styles.form} onSubmit={handleSubmit}>
            
            {/* Seating Preference Selector */}
            <div className={styles.field}>
              <label className={styles.label}>Preferred Seating Ambience</label>
              <div className={styles.seatingRow}>
                {[
                  { id: 'Rooftop Terrace (Open Sky)', label: '🌿 Rooftop Terrace', desc: 'Open sky & breeze' },
                  { id: 'Indoor Kitchen & Lounge', label: '🏛️ Indoor Dining', desc: 'Air-conditioned luxury' },
                  { id: 'Sunset High-Table', label: '🌅 High-Table', desc: 'Prime skyline views' },
                ].map((s) => (
                  <button
                    key={s.id}
                    type="button"
                    className={`${styles.seatingPill} ${form.seating === s.id ? styles.seatingPillActive : ''}`}
                    onClick={() => setForm((prev) => ({ ...prev, seating: s.id }))}
                  >
                    <span className={styles.seatingLabel}>{s.label}</span>
                    <span className={styles.seatingDesc}>{s.desc}</span>
                  </button>
                ))}
              </div>
            </div>

            {/* Name & Phone */}
            <div className={styles.row}>
              <div className={styles.field}>
                <label className={styles.label}>Full Name *</label>
                <input
                  type="text"
                  name="name"
                  value={form.name}
                  onChange={handleChange}
                  required
                  placeholder="Your full name"
                  className={styles.input}
                />
              </div>
              <div className={styles.field}>
                <label className={styles.label}>Phone Number *</label>
                <input
                  type="tel"
                  name="phone"
                  value={form.phone}
                  onChange={handleChange}
                  required
                  placeholder="+91 00000 00000"
                  className={styles.input}
                />
              </div>
            </div>

            {/* Email */}
            <div className={styles.field}>
              <label className={styles.label}>Email Address (Optional)</label>
              <input
                type="email"
                name="email"
                value={form.email}
                onChange={handleChange}
                placeholder="name@example.com"
                className={styles.input}
              />
            </div>

            {/* Date, Time & Guests */}
            <div className={styles.rowThree}>
              <div className={styles.field}>
                <label className={styles.label}>Date *</label>
                <input
                  type="date"
                  name="date"
                  value={form.date}
                  onChange={handleChange}
                  required
                  min={today}
                  className={styles.input}
                />
              </div>
              <div className={styles.field}>
                <label className={styles.label}>Time *</label>
                <select name="time" value={form.time} onChange={handleChange} required className={styles.input}>
                  <option value="">Select time</option>
                  {timeSlots.map((t) => (
                    <option key={t} value={t}>{t}</option>
                  ))}
                </select>
              </div>
              <div className={styles.field}>
                <label className={styles.label}>Guests *</label>
                <select name="guests" value={form.guests} onChange={handleChange} className={styles.input}>
                  {[1,2,3,4,5,6,7,8,9,10,12,15,20].map((n) => (
                    <option key={n} value={n}>{n} {n === 1 ? 'Guest' : 'Guests'}</option>
                  ))}
                </select>
              </div>
            </div>

            {/* Special Notes */}
            <div className={styles.field}>
              <label className={styles.label}>Special Occasion / Requests</label>
              <textarea
                name="notes"
                value={form.notes}
                onChange={handleChange}
                placeholder="Anniversary, birthday, dietary notes, table placement..."
                rows={2}
                className={`${styles.input} ${styles.textarea}`}
              />
            </div>

            {status === 'error' && (
              <p className={styles.errorMsg}>{message}</p>
            )}

            <button
              type="submit"
              className={`btn btn-primary ${styles.submitBtn}`}
              disabled={status === 'loading'}
            >
              {status === 'loading' ? 'Confirming Reservation...' : 'Reserve Table'}
            </button>

            {/* WhatsApp Alternative */}
            <div className={styles.whatsappNote}>
              <span>Need instant confirmation?</span>
              <a
                href="https://wa.me/910000000000?text=Hi%20Blanco!%20I%20would%20like%20to%20reserve%20a%20table."
                target="_blank"
                rel="noopener noreferrer"
                className={styles.whatsappLink}
              >
                Chat on WhatsApp &rarr;
              </a>
            </div>
          </form>
        )}
      </div>
    </div>
  );
}
