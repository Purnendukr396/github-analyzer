# GitHub Analyzer

A GitHub profile analyzer built with **Next.js, TypeScript, and Tailwind CSS**.

GitHub Analyzer fetches GitHub profile and repository data and presents useful information such as profile details, repository statistics, programming languages, stars, forks, and other GitHub activity in a clean interface.

## 🚀 Features

- 🔍 Search GitHub users by username
- 👤 Display GitHub profile information
- 📦 Display public repositories
- ⭐ Show total repository stars
- 🍴 Show repository forks
- 💻 Analyze programming languages used in repositories
- 📊 Display language statistics with progress bars
- 📁 View repository details
- ⚡ Fast and responsive UI
- 📱 Responsive design for different screen sizes

## 🛠️ Tech Stack

- **Next.js**
- **TypeScript**
- **Tailwind CSS**
- **GitHub REST API**
- **React**

## 📂 Project Structure

```text
github-analyzer/
├── app/
│   ├── profile/
│   │   └── [username]/
│   │       └── page.tsx
│   ├── layout.tsx
│   └── page.tsx
│
├── components/
│   ├── Navbar.tsx
│   ├── Footer.tsx
│   └── ...
│
├── public/
│   └── ...
│
├── package.json
├── tsconfig.json
├── next.config.ts
└── README.md

Live Demo - https://heartfelt-sundae-5cd3d7.netlify.app/
