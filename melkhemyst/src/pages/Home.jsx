import { Link } from "react-router-dom";
import MelkhemystLogo from "../images/MelkhemystLogo.png";
export default function Home() {
  return (
    <main id="home">
      {/* HERO */}
      <section id="home-hero">
        <img
          src={MelkhemystLogo}
          alt="Melkhemyst sigil"
          className="hero-sigil"
        />
        {/* INTERACTIVE RITUAL */}
        <section id="home-breath">
          <div className="breath-inner">
            <p className="breath-prompt">
              Pause for a moment.
            </p>

            <div className="breath-circle" aria-hidden="true">
              <img
                src="/src/images/MelkhemystLogo.png"
                alt="Melkhemyst sigil"
                className="breath-logo"
              />
            </div>

            <p className="breath-instruction">
              Inhale slowly.
              <br />
              Exhale completely.
            </p>
          </div>
        </section>

        <div className="hero-inner">
          <p className="eyebrow">Melkhemyst</p>

          <h1 className="hero-title">
            Soul Alchemy for
            <span>emotional clarity, connection, and transformation.</span>
          </h1>

          <p className="hero-subcopy">
            Melkhemyst is a space for those moving through awakening,
            relational intensity, or inner transformation —
            where intuition meets emotional honesty.
            <span>
              This work does not bypass shadow, soften truth,
              or offer answers without integration.
            </span>
          </p>

          <div className="hero-actions">
            <Link to="/booking" className="btn-primary">
              Book a Session
            </Link>

            <Link to="/tools" className="btn-secondary">
              Explore Free Tools
            </Link>
          </div>
        </div>
      </section>

      {/* IDENTITY */}
      <section id="home-identity">
        <div className="identity-grid">
          <div>
            <h2>The Work</h2>
            <p>
              This work blends intuitive sensing, energetic decoding, aura
              awareness, and soul-level guidance to bring clarity to emotional
              patterns, relationships, and life transitions.
            </p>
          </div>

          <div>
            <h2>The Approach</h2>
            <p>
              Sessions may include Reiki, light code transmission, violet flame
              transmutation, crystal attunement, and shadow work — guided
              intuitively rather than formulaically.
            </p>
          </div>

          <div>
            <h2>The Intention</h2>
            <p>
              This is not about fixing you. It is about helping you understand
              what is activating, evolving, and asking to be integrated.
            </p>
          </div>
        </div>
      </section>

      {/* CORE THEMES */}
      <section id="home-themes">
        <div className="themes-inner">
          <h2>What We Explore Together</h2>

          <div className="themes-grid">
            <div className="theme-card">
              <h3>Soul Connections</h3>
              <p>
                Catalyst relationships, parallel souls, karmic dynamics,
                soulmate pathways, and the deeper contracts that shape
                relational awakening.
              </p>
            </div>

            <div className="theme-card">
              <h3>Energy & Shadow</h3>
              <p>
                Emotional blocks, shadow activations, energetic boundaries,
                violet flame transmutation, and nervous-system awareness.
              </p>
            </div>

            <div className="theme-card">
              <h3>Transformation</h3>
              <p>
                Identity shifts, intuition development, self-worth reclamation,
                and alignment with your authentic soul path.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* OFFERINGS PREVIEW */}
      <section id="home-offerings">
        <div className="offerings-inner">
          <h2>Ways to Work Together</h2>

          <p>
            Sessions are intuitive, confidential, and held in a grounded,
            supportive container — available online via Zoom.
          </p>

          <Link to="/offerings" className="btn-outline">
            View Offerings & Pricing
          </Link>
        </div>
      </section>

      <section id="home-clarity">
        <div className="clarity-inner">
          <h2>This Work Is — and Is Not</h2>

          <div className="clarity-grid">
            <div>
              <h3>This is</h3>
              <ul>
                <li>Intuitive, grounded, and emotionally honest</li>
                <li>Centered on awareness, not dependency</li>
                <li>A space for shadow, complexity, and truth</li>
                <li>Held with care, confidentiality, and respect</li>
              </ul>
            </div>

            <div>
              <h3>This is not</h3>
              <ul>
                <li>Entertainment or spiritual bypassing</li>
                <li>Predictive fortune-telling</li>
                <li>Quick fixes or energetic “hacks”</li>
                <li>A replacement for medical or therapeutic care</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* CREDIBILITY / POSITIONING */}
      <section id="home-positioning">
        <div className="positioning-inner">
          <p>
            Melkhemyst exists at the intersection of intuition, emotional intelligence,
            and energetic awareness — offering clarity without hierarchy and guidance
            without control.
          </p>
        </div>
      </section>

      {/* QUIET RITUAL MOMENT */}
      <section id="home-ritual">
        <div className="ritual-inner">
          <p className="ritual-text">
            Take a breath.
            <br />
            Notice what brought you here.
            <br />
            You don’t need to rush the next step.
          </p>
        </div>
      </section>
    </main>
  );
}