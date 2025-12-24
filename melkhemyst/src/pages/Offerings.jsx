export default function Offerings() {
  return (
    <section className="offerings">

      {/* Intro */}
      <header className="offerings-intro">
        <h1>Ways to Work Together</h1>
        <p>
          This work blends intuitive sensing, energetic decoding, and
          soul-level guidance to bring clarity to emotional patterns,
          relationships, and life transitions.
        </p>
      </header>

      {/* Offerings */}
      <div className="offerings-list">

        <article className="offering">
          <h2>Soul Alchemy Reading</h2>
          <p className="offering-desc">
            A deep intuitive session focused on emotional clarity,
            energetic patterns, and soul-path alignment.
          </p>
          <ul>
            <li>Energy scan & aura impressions</li>
            <li>Channeled guidance</li>
            <li>Shadow pattern decoding</li>
          </ul>
          <p className="offering-meta">
            60–75 minutes · €90–€150
          </p>
        </article>

        <article className="offering">
          <h2>Relationship Pattern Reading</h2>
          <p className="offering-desc">
            For those navigating intense or confusing connections.
            We explore karmic dynamics, catalysts, and soul contracts.
          </p>
          <ul>
            <li>Relational pattern analysis</li>
            <li>Energetic ties & lessons</li>
            <li>Guidance for integration or release</li>
          </ul>
          <p className="offering-meta">
            60 minutes · €90–€120
          </p>
        </article>

        <article className="offering">
          <h2>Light Code Transmission</h2>
          <p className="offering-desc">
            A channeled energetic activation for recalibration,
            emotional release, and timeline alignment.
          </p>
          <ul>
            <li>Energetic clearing</li>
            <li>Nervous-system regulation</li>
            <li>Integration support</li>
          </ul>
          <p className="offering-meta">
            30–45 minutes · €70–€110
          </p>
        </article>

        <article className="offering">
          <h2>Soulcraft Mentoring</h2>
          <p className="offering-desc">
            Ongoing 1:1 support for those in active transformation
            or awakening.
          </p>
          <ul>
            <li>4 sessions per month</li>
            <li>Voice-note support between sessions</li>
            <li>Emotional sovereignty & integration</li>
          </ul>
          <p className="offering-meta">
            Monthly · €250–€450
          </p>
        </article>

      </div>

      {/* How It Works */}
      <section className="offerings-process">
        <h3>How Sessions Work</h3>
        <p>
          Sessions are intuitive, confidential, and held in a grounded,
          supportive container. All work is offered online via Zoom.
          You don’t need to prepare or perform — just arrive as you are.
        </p>
      </section>

      {/* CTA */}
      <div className="offerings-cta">
        <a href="#/booking" className="btn-primary">
          Book a Session
        </a>
      </div>

    </section>
  );
}