export default function Header() {
  return (
    <header className="h-14 bg-white shadow-sm flex items-center justify-between px-5 border-b border-taupe-dark/20">
      {/* LEFT – Logo Only */}
      <div className="flex items-center gap-2">
        <span className="text-2xl">🧺</span>
      </div>

      {/* RIGHT – Placeholder for future */}
      <div className="flex items-center gap-4 text-sm text-taupe-dark/70">
        {/* Profile menu or other items later */}
      </div>
    </header>
  );
}
