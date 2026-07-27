# ESL Connect Learning Platform

## Project Overview
A complete front-end ESL learning platform designed for Middle School students. Built with HTML5, CSS3, JS (ES6), and TailwindCSS for a purely local, backend-free setup.

## Design Philosophy
* **Mobile-First & Responsive:** Utilizes Tailwind utility classes (`md:`, `lg:`) to ensure seamless scaling from phones to desktops.
* **Accessibility:** High contrast, ARIA labels, semantic HTML tags (`<main>`, `<article>`, `<nav>`), and distinct visual feedback.
* **UI/UX:** Implements Claymorphism (soft embedded shadows) and Glassmorphism (blur filters) to create a friendly, tactile, gamified environment similar to Duolingo.

## How to Run
Because there is no backend, you can simply open `index.html` in any modern web browser (Chrome, Edge, Safari, Firefox). No build processes or local servers are strictly required.

## How to Add New Semesters (Scaling)
1. In the root directory, create a new folder (e.g., `Spring2027/`).
2. Copy the `index.html` from the root into the new folder to act as that semester's dashboard.
3. Duplicate the `science/mars.html` file into your new topic folders.
4. Open the new HTML files and update the relative paths for CSS and JS. (e.g., Change `../css/styles.css` to `../../css/styles.css` depending on folder depth).
5. Update `js/main.js` dictionary variable (`vocabData`) to include the new words. Because the dictionary page loops through this variable, it will automatically update across the site.