// updated header
export default function Header() {
  return (
    <header className="w-full px-6 py-4 bg-white border-b border-taupe-dark/30 flex items-center justify-between">
      <h1 className="text-xl font-semibold text-slateblue-dark">
        Pantry System
      </h1>

      <div className="flex items-center gap-4">
        <span className="text-sm text-taupe-dark">Admin</span>
        <button className="px-3 py-1 rounded bg-slateblue text-white hover:bg-slateblue-dark">
          Logout
        </button>
      </div>
    </header>
  );
}
