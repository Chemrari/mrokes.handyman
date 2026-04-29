# Mrokes Handyman Landing Page

A premium, fast, and fully responsive landing page built for a handyman service based in Houston, Texas. The project focuses on high conversion rates, professional aesthetics, and a seamless mobile experience.

## Features
- **Modern Design:** Utilizes a custom design system with modern typography (Barlow and Oswald fonts) and a premium color palette.
- **Fully Responsive:** Optimized for all screen sizes, featuring a horizontal swipeable carousel for services on mobile devices.
- **Scroll Animations:** Implements an `IntersectionObserver` to trigger smooth reveal-on-scroll animations.
- **Performance Optimized:** Uses `loading="lazy"` on all images to ensure fast page load times.
- **Working Contact Form:** Integrated with Formspree to handle form submissions directly from the static page without needing a backend server.
- **Floating WhatsApp CTA:** Sticky bottom-right WhatsApp button for immediate customer communication.

## Tech Stack
- **HTML5** & **CSS3**
- **Tailwind CSS** (via CDN for rapid styling)
- **Vanilla JavaScript** (for interactive elements like the sticky nav dock and scroll animations)
- **Font Awesome** (for scalable vector icons)

## File Structure
- `index.html`: The main and only HTML file containing the entire landing page structure, inline Tailwind configuration, and JavaScript logic.
- `images/`: Directory containing all local image assets (logos, service photos, etc.).

## Setup & Deployment
1. Clone or download the repository.
2. Open `index.html` in any modern web browser to view the site locally. No build step or local server is strictly required.
3. To deploy, simply upload the `index.html` file and the `images/` folder to any static hosting provider (e.g., GitHub Pages, Netlify, Vercel, or a traditional web host).

## Form Configuration
The contact form is currently connected to Formspree (`https://formspree.io/###########`). To receive emails from form submissions, ensure you have access to this Formspree account, or replace the action URL with your own endpoint.
