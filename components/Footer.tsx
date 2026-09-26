export default function Footer() {
  return (
    <footer className="mt-16 border-t bg-gray-50">
      <div className="mx-auto max-w-6xl px-6 py-8">

        <div className="flex flex-col items-center justify-between gap-4 sm:flex-row">

          {/* Logo */}
          <div>
            <p className="font-semibold text-gray-900">
              GitHub<span className="text-red-500">Analyzer</span>
            </p>

            <p className="mt-1 text-sm text-gray-500">
              Analyze GitHub profiles easily.
            </p>
          </div>

          {/* Links */}
          <div className="flex gap-5 text-sm text-gray-500">
            <a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              className="transition hover:text-red-500"
            >
              GitHub
            </a>

            <a
              href="https://github.com/Purnendukr396"
              target="_blank"
              rel="noopener noreferrer"
              className="transition hover:text-red-500"
            >
              Developer
            </a>
          </div>

        </div>

        {/* Copyright */}
        <div className="mt-6 border-t pt-5 text-center text-sm text-gray-400">
          © 2026 GitHub Analyzer. All rights reserved.
        </div>

      </div>
    </footer>
  );
}