import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="border-b bg-white/80 backdrop-blur-md">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">

        {/* Logo */}
        <Link
          href="/"
          className="text-xl font-bold text-gray-900"
        >
          GitHub<span className="text-red-500">Analyzer</span>
        </Link>

        {/* Navigation */}
        <div className="flex items-center gap-6">
          <Link
            href="/"
            className="text-sm text-gray-600 transition hover:text-red-500"
          >
            Home
          </Link>

          <Link
            href="/about"
            className="text-sm text-gray-600 transition hover:text-red-500"
          >
            About
          </Link>

          <a
            href="https://github.com"
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-lg bg-gray-900 px-4 py-2 text-sm font-medium text-white transition hover:bg-gray-700"
          >
            GitHub
          </a>
        </div>

      </div>
    </nav>
  );
}