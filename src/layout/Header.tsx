export default function Header() {
  return (
    <header className="h-14 bg-white shadow-sm flex items-center justify-between px-5 border-b border-taupe-dark/20">
      
      {/* LEFT SECTION */}
      <div className="flex items-center gap-3">
        <span className="text-2xl">📦</span>
        <h1 className="text-xl font-semibold text-slateblue-dark">
          Pantry System
        </h1>
      </div>

      {/* RIGHT SECTION (placeholder for profile later) */}
      <div className="flex items-center gap-4 text-sm text-taupe-dark/70">
        {/* future buttons or admin menu */}
      </div>

    </header>
  );
}
