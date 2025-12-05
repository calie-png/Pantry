import { ReactNode } from "react";

interface LayoutProps {
  children: ReactNode;
  title?: string;
}

export default function Layout({ children, title }: LayoutProps) {
  return (
    <div className="min-h-screen bg-gray-100">
      {/* Optional Title Bar */}
      {title && (
        <header className="w-full bg-blue-600 text-white py-4 px-6 shadow">
          <h1 className="text-xl font-semibold">{title}</h1>
        </header>
      )}

      <main className="max-w-5xl mx-auto py-8 px-4">{children}</main>
    </div>
  );
}
