export default function About() {
  return (
    <main id="about">

      {/* INTRO */}
      <section id="about-intro">
        <div className="about-inner">
          <p className="about-eyebrow">About the Work</p>

          <h1>
            This is not a role.
            <span>It is a way of perceiving.</span>
          </h1>

          <p className="about-lead">
            Melkhemyst emerged through lived experience, intuitive sensing,
            and years of observing how emotional patterns, relationships,
            and energetic dynamics shape transformation.
          </p>
        </div>
      </section>

      {/* ORIGIN */}
      <section id="about-origin">
        <div className="about-inner narrow">
          <h2>How This Work Formed</h2>

          <p>
            The foundation of this work is not doctrine or tradition, but
            direct perception. Sensitivity to energetic fields, relational
            patterns, and emotional undercurrents revealed themselves long
            before language was assigned to them.
          </p>

          <p>
            Over time, these perceptions refined into a grounded approach —
            blending intuitive clarity with emotional responsibility,
            shadow awareness, and integration.
          </p>
        </div>
      </section>

      {/* WHAT THIS WORK HOLDS */}
      <section id="about-holds">
        <div className="about-inner">
          <h2>What This Space Holds</h2>

          <div className="about-grid">
            <div>
              <h3>Presence</h3>
              <p>
                Sessions are held with attentiveness, neutrality, and respect
                for personal sovereignty.
              </p>
            </div>

            <div>
              <h3>Clarity</h3>
              <p>
                Intuition is used to illuminate patterns, not override personal
                agency or decision-making.
              </p>
            </div>

            <div>
              <h3>Integration</h3>
              <p>
                Insight is only meaningful when it can be embodied,
                processed, and lived.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* WHAT THIS IS NOT */}
      <section id="about-boundaries">
        <div className="about-inner narrow">
          <h2>Boundaries Matter</h2>

          <p>
            This work does not predict futures, remove responsibility,
            or replace professional care. It does not position the practitioner
            as an authority over your life.
          </p>

          <p>
            It is an invitation into awareness — not dependency.
          </p>
        </div>
      </section>

      {/* CLOSING */}
      <section id="about-closing">
        <div className="about-inner narrow">
          <p className="about-close">
            If you feel resonance here, trust that.
            <br />
            If not, honor that equally.
          </p>
        </div>
      </section>

    </main>
  );
}