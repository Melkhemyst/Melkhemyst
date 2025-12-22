import { useState } from "react";

export default function SessionPrepTool() {
  const [focus, setFocus] = useState("");
  const [emotion, setEmotion] = useState("");
  const [intention, setIntention] = useState("");
  const [notes, setNotes] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section className="max-w-3xl mx-auto px-6 py-16">
      <h1 className="text-3xl mb-4 font-serif">Session Preparation</h1>

      <p className="text-white/70 mb-10">
        This reflection tool is designed to help you arrive grounded, clear,
        and emotionally present for your session. There are no right or wrong
        answers—only honesty.
      </p>

      {!submitted ? (
        <form onSubmit={handleSubmit} className="space-y-8">
          {/* Focus */}
          <div>
            <label className="block mb-2 text-sm text-white/80">
              What feels most present for you right now?
            </label>
            <select
              value={focus}
              onChange={(e) => setFocus(e.target.value)}
              className="w-full bg-black/30 border border-white/10 p-3 rounded"
              required
            >
              <option value="">Select one</option>
              <option value="self">Something within myself</option>
              <option value="relationship">A relationship or connection</option>
              <option value="pattern">A recurring emotional pattern</option>
              <option value="transition">A life transition or uncertainty</option>
            </select>
          </div>

          {/* Emotional State */}
          <div>
            <label className="block mb-2 text-sm text-white/80">
              How would you describe your current emotional state?
            </label>
            <input
              type="text"
              value={emotion}
              onChange={(e) => setEmotion(e.target.value)}
              placeholder="e.g. overwhelmed, curious, heavy, open"
              className="w-full bg-black/30 border border-white/10 p-3 rounded"
              required
            />
          </div>

          {/* Intention */}
          <div>
            <label className="block mb-2 text-sm text-white/80">
              What would you like clarity or support around?
            </label>
            <textarea
              value={intention}
              onChange={(e) => setIntention(e.target.value)}
              rows={4}
              className="w-full bg-black/30 border border-white/10 p-3 rounded"
              required
            />
          </div>

          {/* Notes */}
          <div>
            <label className="block mb-2 text-sm text-white/60">
              Optional notes (anything you don’t want to forget)
            </label>
            <textarea
              value={notes}
              onChange={(e) => setNotes(e.target.value)}
              rows={3}
              className="w-full bg-black/30 border border-white/10 p-3 rounded"
            />
          </div>

          <button
            type="submit"
            className="mt-6 px-6 py-3 bg-gold text-black rounded hover:opacity-90 transition"
          >
            Complete Reflection
          </button>
        </form>
      ) : (
        <div className="mt-10 p-6 border border-white/10 rounded bg-black/30">
          <h2 className="text-xl mb-4 font-serif">Reflection Complete</h2>

          <p className="text-white/70 mb-6">
            Take a moment to breathe. You may wish to bring the following
            reflections into your session.
          </p>

          <ul className="space-y-3 text-white/80 text-sm">
            <li>
              <strong>Focus:</strong> {focus}
            </li>
            <li>
              <strong>Emotional state:</strong> {emotion}
            </li>
            <li>
              <strong>Intention:</strong> {intention}
            </li>
            {notes && (
              <li>
                <strong>Notes:</strong> {notes}
              </li>
            )}
          </ul>

          <p className="mt-6 text-xs text-white/50">
            This information is not saved or transmitted. You may copy or
            screenshot it for your reference.
          </p>
        </div>
      )}
    </section>
  );
}