# Stoon Production Website

![Stoon Production Logo](public/assets/images/logostoonprod_rec.svg)

Welcome to the **Stoon Production Website**! This project serves as the online portfolio for **Stoon Production**, a creative agency specializing in videography, photography, and web development services. The website is designed to showcase our professional services, highlight featured projects, and provide an easy way for clients to get in touch with us.

> **Note:** This website is proprietary to Stoon Production and is not intended for external use or distribution.
>
> **Please Note:** This project is strictly for internal use by Stoon Production and should not be used or repurposed by others.

---

## Table of Contents

- [About](#about)
- [Releases](#releases)
- [Features](#features)
- [Tech Stack](#tech-stack)
- [Project Structure](#project-structure)
- [Environment Variables](#environment-variables)
- [Installation](#installation)
- [Usage](#usage)
- [Scripts](#scripts)
- [Roadmap](#roadmap)
- [Contributing](#contributing)
- [License](#license)
- [Contact](#contact)

---

## About

**Stoon Production** is a creative media production company that provides professional event coverage, content creation, and custom web development solutions. Our website offers a detailed look at our services, projects, and an easy way to engage with us for collaborations and inquiries.

This repository contains the source code for the website, developed with modern technologies for the front-end features. It's designed to be fast, responsive, and visually appealing, with ongoing updates for new functionality.

**Please Note:** This project is developed exclusively for Stoon Production. It is not intended for public use or adaptation by third parties.

---

## Releases

| Version | Type       | Status     | Release Date | Notes                                                                                                 | Link                                                                      |
| ------- | ---------- | ---------- | ------------ | ----------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------- |
| v2.0.0  | TypeScript | Active     | 2025-09-16   | Full migration from JS to TS, refactored codebase, admin improvements, type-safe, actively maintained | [View Release](https://github.com/dissojak/StoonProd/releases/tag/v2.0.0) |
| v1.0.0  | JavaScript | Deprecated | 2024-12-10   | Original JS version, legacy code, no furthe                                                           |

---

## Features

- **Home Page**: Featuring an interactive production slider, highlighting our top services in general.
- **Tariffs Page**: A detailed overview of our core offerings in videography, photography, and web development.
- **Portfolio Gallery**: Showcasing high-quality photos and videos from past projects ( upcoming ).
- **Contact Page**: A functional form where clients can easily reach out for bookings, collaborations, or inquiries.
- **Instagram Integration**: Link to our Instagram account for additional social media engagement and project previews.
- **Responsive Design**: Optimized for both desktop and mobile devices, ensuring a seamless user experience.

---

## Tech Stack

The project is built using modern technologies:

- **Next.js**: For server-side rendering and static site generation, optimizing performance and SEO ( React Server/Client Components).
- **Tailwind CSS**: For efficient and customizable styling, allowing for rapid UI development.
- **Vercel**: Deployment platform for fast, reliable hosting.
- **MongoDB**: NoSQL database for storing user inquiries and other dynamic content.
- **Media**: Cloudinary (uploads endpoint)
- **Tooling**: Prettier, EditorConfig
- **Auth**: NextAuth (Credentials), secured via middleware and JWT

- - **Express.js** (Upcoming): A backend framework to handle heavy server-side operations and API requests.

**Please Note:**

- Auth is centralized in lib/authOptions.ts.
- Middleware guards admin routes with token role.

---

## Project Structure

- src/app: App Router pages, API routes, middleware
- src/app/UI: Shared UI components (Header, Footer, Sections, etc.)
- src/app/components: App-scoped components (Home, Services, Figma)
- src/lib: Database, auth options, utilities
- src/models: Mongoose models
- src/scripts: Maintenance scripts (TypeScript)
- src/types: Project-level type augmentations

---

## Environment Variables

Copy .env.example to .env.local and fill the values.

Required:

- NEXTAUTH_URL=http://localhost:3000
- NEXTAUTH_SECRET=your-strong-secret
- MONGODB_URI=mongodb+srv://...
- CLOUDINARY_CLOUD_NAME=...
- CLOUDINARY_API_KEY=...
- CLOUDINARY_API_SECRET=...
- NEXT_GA_MEASUREMENT_ID=G-XXXXXXX (optional)

---

## Installation

Follow these steps to set up the project locally:

1. **Clone the repository**:

   ```bash
   git clone https://github.com/dissojak/StoonProd.git
   cd StoonProd
   ```

2. **Install dependencies**:

   ```bash
   npm install
   ```

3. **Run the development server**:

   ```bash
   npm run dev || npm start
   ```

4. Open [http://localhost:3000](http://localhost:3000) to view the project in your browser.

---

## Scripts

- Dev: `npm run dev`
- Build: `npm run build`
- Start (prod): `npm start`
- Typecheck: `npm run typecheck`
- Format: `npm run format`
- Maintenance script (build + run): `npm run scripts:run-fix-figma-order`

**Tips:** A small build output is used to validate maintenance scripts during checks without affecting the app.

---

## Usage

The website includes the following main sections:

- **Home**: A landing page that features a dynamic slider showcasing services.
- **About**: Detailed descriptions of the services we offer—videography, photography, and web development.
- **Tariffs**: A detailed overview of our services pricing & offers in videography, photography, and web development (Including Web-Design).
- **Contact**: A functional form for users to send inquiries, which will eventually be stored in a database when backend integration is complete.

**Admin**:

- Protected under /admin via middleware and NextAuth credentials.

- - **Portfolio** (Upcoming): A collection of photos, videos also designes from our previous projects.

---

## Roadmap

Here's what's planned for future updates:

- **Backend Integration**: Add Express.js to handle heavy requests and inquiries.
- **Portfolio Expansion**: Increase the number of featured projects with new photos and videos.
- **Client Testimonials**: Add a section for client feedback and reviews.
- **Harden auth** : Password hashing, rate limits
- **typecheck/build**: Add tests and CI checks

---

## Contributing

Contributions to this project are not open to the public. This repository is strictly maintained for Stoon Production’s internal use. Please do not attempt to contribute or fork this repository for other purposes.

> **If you want to help us**:
>
> We welcome contributions to improve the project! To contribute:

1. Fork the repository.
2. Create a new branch (`git checkout -b feature-branch`).
3. Make your changes.
4. Submit a pull request for review.

---

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for more details.

---

## Contact

For any inquiries, please reach out to us via:

- **Email**: [Contact@stoonproduction.com](mailto:stoonproduction@gmail.com)
- **Instagram**: [@stoonproduction](https://instagram.com/adem_ben_amor)
- **Website**: [Stoon Production](https://StoonProduction.com)

Thank you for visiting our project!
