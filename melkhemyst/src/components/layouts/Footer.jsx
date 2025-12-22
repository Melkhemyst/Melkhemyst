export default function Footer() {
    return (
      <footer className="w-full px-6 py-10 border-t border-white/10 bg-obsidian text-white/60 text-sm">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between gap-6">
          {/* Left */}
          <div>
            <p className="font-serif text-white mb-2">Melkhemyst</p>
            <p className="max-w-md">
              Intuitive energy work for emotional clarity, relationship insight,
              and personal transformation.
            </p>
          </div>
  
          {/* Right */}
          <div className="text-xs space-y-2">
            <p>
              © {new Date().getFullYear()} Melkhemyst
            </p>
            <p>
              Energetic and intuitive guidance only.  
              Not a substitute for medical, legal, or psychological care.
            </p>
            <p>
              All sessions are client-led and responsibility remains with the individual.
            </p>
          </div>
        </div>
      </footer>
    );
  }