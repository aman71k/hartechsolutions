# HarTech Solutions

A modern, responsive web application for HarTech Solutions, built with Next.js, React, and Tailwind CSS v4.  
This project features a custom design system, animated sections, and a contact form with business information.

## Features

- ⚡ Fast, accessible, and mobile-friendly UI
- 🎨 Custom theme using CSS variables and Tailwind v4
- 🧩 Modular React components
- ✨ Animated sections and interactive elements
- 📬 Contact form with validation and status feedback
- 🕒 Business hours and emergency contact info

## Tech Stack

- [Next.js](https://nextjs.org/)
- [React](https://react.dev/)
- [Tailwind CSS v4](https://tailwindcss.com/)
- TypeScript

## Getting Started

### Prerequisites

- Node.js (v18+ recommended)
- npm or yarn

### Installation

1. **Clone the repository:**
   ```sh
   git clone https://github.com/kaydhiman/hartech-solutions.git
   cd hartech-solutions
   ```

2. **Install dependencies:**
   ```sh
   npm install
   # or
   yarn install
   ```

3. **Run the development server:**
   ```sh
   npm run dev
   # or
   yarn dev
   ```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Project Structure

```
src/
  app/             # Next.js app directory
    globals.css    # Global styles and theme variables
  components/      # Reusable React components
  pages/           # (If using pages directory)
  ...
tailwind.config.js # Tailwind CSS configuration
```

## Customization

- **Theme colors** are defined in `globals.css` using CSS variables.
- **Gradients** use Tailwind’s `bg-gradient-to-*`, `from-*`, `to-*` utilities.
- **Business info** and contact details can be updated in the `Contact` component.

## Scripts

- `npm run dev` – Start development server
- `npm run build` – Build for production
- `npm run start` – Start production server

## License

This project is licensed under the MIT License.

---

**HarTech Solutions** – Empowering your business with