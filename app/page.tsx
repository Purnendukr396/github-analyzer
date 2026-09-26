"use client";

import FeatureCard from "@/components/FeatureCard";
import { useState } from "react";
import { useRouter } from "next/navigation";

export default function Home() {
  const [username, setUsername] = useState("");
  const router = useRouter();

  function handleAnalyze() {
    const trimmedUsername = username.trim();

    if (!trimmedUsername) return;

    router.push(`/profile/${trimmedUsername}`);
  }

  return (
    <main className="min-h-screen bg-gray-50 text-gray-900">

      

      <nav className="border-b border-pink-200 bg-white-200">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-5 ">

          <h1 className="text-xl font-bold">
            GitHub 
            <span className="text-red-600"> Analyzer</span>
          </h1>

          <a
            href="https://github.com"
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-lg border border-gray-300 px-4 py-2 text-sm font-medium text-gray-700 transition hover:bg-gray-100"
          >
            GitHub
          </a>

        </div>
      </nav>

      

      <section className="mx-auto max-w-4xl px-6 pb-24 pt-28 text-center">

       

        <div className="mb-6 inline-block rounded-full border border-blue-200 bg-blue-50 px-4 py-2 text-sm font-medium text-blue-600">
          Developer Profile Analyzer
        </div>

        

        <h2 className="text-5xl font-bold tracking-tight text-gray-900 sm:text-6xl">
          Analyze any
          <span className="block text-red-600">
            GitHub profile.
          </span>
        </h2>

        

        <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-gray-600">
          Explore GitHub profiles, repositories, languages,
          followers and developer statistics in one simple dashboard.
        </p>

       

        <div className="mx-auto mt-10 flex max-w-2xl flex-col items-stretch gap-4 sm:flex-row">

          

          <input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            onKeyDown={(e) => {
              if (e.key === "Enter") {
                handleAnalyze();
              }
            }}
            placeholder="Enter GitHub username"
            className="flex-1 rounded-xl border border-gray-300 bg-white px-5 py-4 text-gray-900 shadow-sm outline-none placeholder:text-gray-400 focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
          />

          

          <button
  type="button"
  onClick={handleAnalyze}
  className="group relative mx-auto flex items-center justify-center gap-2 overflow-hidden rounded-full border-2 border-gray-50 bg-gray-50 px-4 py-2 text-lg shadow-xl"
>
  
  <span
    className="
      absolute
      left-[-100%]
      top-0
      z-0
      aspect-square
      w-full
      rounded-full
      bg-emerald-500
      transition-all
      duration-700
      group-hover:left-0
      group-hover:scale-150
    "
  />

  
  <span className="relative z-10 transition-colors duration-300 group-hover:text-white">
    Analyze
  </span>

  
  <svg
    className="
      relative
      z-10
      h-8
      w-8
      rotate-45
      rounded-full
      border
      border-gray-700
      p-2
      transition-all
      duration-300
      ease-linear
      group-hover:rotate-90
      group-hover:border-none
      group-hover:bg-gray-50
    "
    viewBox="0 0 16 19"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M7 18C7 18.5523 7.44772 19 8 19C8.55228 19 9 18.5523 9 18H7ZM8.70711 0.292893C8.31658 -0.0976311 7.68342 -0.0976311 7.29289 0.292893L0.928932 6.65685C0.538408 7.04738 0.538408 7.68054 0.928932 8.07107C1.31946 8.46159 1.95262 8.46159 2.34315 8.07107L8 2.41421L13.6569 8.07107C14.0474 8.46159 14.6805 8.46159 15.0711 8.07107C15.4616 7.68054 15.4616 7.04738 15.0711 8.07107L8.70711 0.292893ZM9 18L9 1H7L7 18H9Z"
      className="fill-gray-800"
    />
  </svg>
</button>
        </div>

       

        <p className="mt-4 text-sm text-gray-500">
          Example: JustVugg
        </p>

      </section>

      

      <section className="border-t border-gray-200 bg-white">

        <div className="mx-auto max-w-6xl px-6 py-16">

          <h3 className="text-center text-2xl font-bold text-gray-900">
            What can you analyze?
          </h3>

          <p className="mx-auto mt-3 max-w-xl text-center text-gray-500">
            Get useful information about any public GitHub developer profile.
          </p>

          <div className="mt-10 grid gap-6 md:grid-cols-3">

            <FeatureCard
              icon="📊"
              title="Profile Statistics"
              description="View followers, following, repositories and other GitHub profile information."
            />

            <FeatureCard
              icon="💻"
              title="Languages"
              description="Discover which programming languages are used across the user's repositories."
            />

            <FeatureCard
              icon="⭐"
              title="Repositories"
              description="Explore repositories, stars, forks and other useful repository information."
            />

          </div>

        </div>

      </section>

      

      <footer className="border-t border-gray-200 bg-gray-50 px-6 py-8 text-center text-sm text-gray-500">
        Built with Next.js · TypeScript · Tailwind CSS
      </footer>

    </main>
  );
}