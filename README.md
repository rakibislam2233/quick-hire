# Quick Hire - Mini Job Board Application (Frontend)

![Next.js](https://img.shields.io/badge/Next.js-black?style=for-the-badge&logo=next.js&logoColor=white)
![React](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)
![TypeScript](https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white)
![Shadcn UI](https://img.shields.io/badge/shadcn%2Fui-000000?style=for-the-badge&logo=shadcnui&logoColor=white)

## 📌 Project Overview

**Quick Hire** is a modern, responsive mini job board application designed to connect job seekers with employers. It provides a seamless platform for users to browse, search, and apply for jobs. For employers, it offers an interface to post and manage job listings.

This repository contains only the **Frontend** application, built to demonstrate strong UI/UX skills, modern React development practices, component-driven architecture, and seamless integrations with external backend APIs.

## ✨ Features

### For Job Seekers

- **Browse Job Listings:** View a comprehensive list of available jobs.
- **Filter & Search:** Easily find specific roles using keywords, categories, or location filters.
- **Job Details:** View detailed information about a job, including requirements, responsibilities, and company info.
- **Submit Applications:** Apply for jobs directly through a streamlined application form.

### For Admins / Employers

- **Admin Dashboard:** A dedicated interface for managing the platform.
- **Post Jobs:** Create and publish new job postings with rich descriptions.
- **Manage Listings:** Edit, update, or delete existing job postings.
- **View Applications:** See incoming applications for posted jobs.

## 🛠️ Tech Stack

This project strictly utilizes the following modern frontend technologies:

- **Framework:** [Next.js](https://nextjs.org/) (App Router)
- **Library:** [React.js](https://react.dev/)
- **Language:** [TypeScript](https://www.typescriptlang.org/) for robust and type-safe code.
- **Styling UI:** Tailwind CSS and [Shadcn UI](https://ui.shadcn.com/) for beautifully designed, accessible, and customizable components.

## 🚀 Getting Started

### Prerequisites

Make sure you have the following installed on your machine:

- [Node.js](https://nodejs.org/) (v18 or higher)
- npm, yarn, pnpm, or bun

### Installation

1. **Clone the repository:**

   ```bash
   git clone <your-repo-url>
   cd quick-hire
   ```

2. **Install dependencies:**

   ```bash
   npm install
   # or yarn install / pnpm install
   ```

3. **Set up environment variables:**
   Create a `.env.local` file in the root directory. You will need to define the API endpoint URL connecting to the separate backend service (e.g., `NEXT_PUBLIC_API_URL=http://localhost:8000/api`).

### Running the Application

To start the Next.js development server:

```bash
npm run dev
# or yarn dev
# or pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the application running.

## 🏗️ Code Organization

The frontend project is structured for scalability and maintainability:

```text
quick-hire/
├── app/                  # Next.js App Router root
│   ├── (auth)/           # Authentication routes (login, register, forgot-password, etc.)
│   ├── (main)/           # Public main pages (Home, About, etc.)
│   ├── admin/            # Admin dashboard and management pages
│   ├── dashboard/        # User/Employer dashboard pages
│   ├── globals.css       # Global Tailwind CSS styles
│   ├── layout.tsx        # Root application layout
│   └── not-found.tsx     # Custom 404 error page
├── asset/                # Static assets (images, graphics)
│   ├── home/             # Homepage specific assets
│   └── logo/             # Logo assets
├── components/           # Reusable UI components
│   ├── Pages/            # Page-specific composite components
│   │   ├── Auth/         # Components used in authentication pages
│   │   ├── Dashbaord/    # Dashboard widgets and layouts
│   │   └── Main/         # Main website sections
│   ├── Shared/           # Global shared components (Navbar, Footer)
│   └── ui/               # Base Shadcn UI components (e.g., button.tsx)
├── services/             # API integration and external communications
│   ├── api.ts            # Base API client and fetch wrapper
│   └── auth.service.ts   # Authentication-related API functions
└── components.json       # Shadcn UI configuration
```

## 🎯 Evaluation Focus

This application specifically emphasizes:

1. **Frontend UI Skills:** Crafting a visually appealing, functional, and deeply responsive interface using Shadcn UI.
2. **Component Architecture:** Creating highly reusable, decoupled React components.
3. **TypeScript Expertise:** Implementing strict type checking for safer and more predictable code.
4. **Code Organization:** Maintaining a clean, readable, and perfectly modular codebase.
5. **Modern Development:** Seamless utilization of the Next.js App Router and server/client component paradigms.
