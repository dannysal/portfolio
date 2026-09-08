# Salman D. Personal Portfolio

A personal portfolio website built with Next.js and React. It presents software engineering experience, selected portfolio work, services, customers, social links, and a contact form.

The site is based on the Resumo portfolio layout and includes dark and light visual variants.

## Features

- Responsive single-page portfolio layout
- Introduction, About, Portfolio, Services, Customers, and Contact sections
- Dark and light theme routes
- Animated navigation and custom cursor interactions
- Swiper-powered sliders and portfolio content
- Static images and partner/project assets served from `public/`
- EmailJS contact form integration
- Production build support through Next.js

## Technology

- Next.js `12.x`
- React `17.x`
- React DOM `17.x`
- JavaScript and JSX
- EmailJS for contact form delivery
- Swiper for sliders
- Typed.js for typing effects
- CSS stylesheets in `styles/` and `public/css/`

## Requirements

- Node.js 14.6 or newer
- npm

Node.js 16 or 18 is recommended for this older Next.js 12 project. Newer Node.js versions may work, but can expose compatibility issues with the legacy dependency versions.

## Getting Started

Clone or open the project, then install its dependencies:

```bash
cd /Users/danny/projects/portfolio
npm install
```

Start the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in a browser.

> The command is `npm run dev` with one `m` in `npm`. `npmm run dev` will fail with a command-not-found error.

## Available Routes

| Route | Description |
| --- | --- |
| `/` | Main dark portfolio version |
| `/index-light` | Light portfolio version |
| `/intro` | Intro page linking to the dark and light versions |
| `/api/hello` | Default example API route |

The main portfolio page is assembled in `pages/index.js`. It renders these sections in order:

1. Home
2. About
3. Portfolio
4. Services
5. Customers
6. Contact

## NPM Scripts

```bash
npm run dev   # Start the local development server
npm run build # Create an optimized production build
npm start     # Serve the production build locally
npm run lint  # Run Next.js linting
```

To run the production version locally:

```bash
npm run build
npm start
```

Then open [http://localhost:3000](http://localhost:3000).

## Project Structure

```text
.
├── pages/
│   ├── _app.js             # Global app wrapper, fonts, metadata, and global CSS
│   ├── _document.js        # Custom document structure
│   ├── index.js            # Dark portfolio page
│   ├── index-light.js      # Light portfolio page
│   ├── intro.js            # Theme/version selection page
│   └── api/hello.js        # Example API endpoint
├── public/
│   ├── css/                # Base, layout, and carousel styles
│   ├── img/                # Signature, portfolio, partner, blog, and thumbnail assets
│   └── svg/                # Social and other SVG assets
├── src/
│   ├── components/         # Portfolio sections and modal components
│   ├── layouts/            # Layout, navigation, footer, cursor, and menu components
│   ├── sliderProps.js      # Slider configuration
│   └── utilits.js          # Client-side UI and interaction helpers
├── styles/
│   └── globals.css         # Global stylesheet imports and app-wide styles
├── package.json
└── package-lock.json
```

## Customizing the Portfolio

### Personal introduction

Update the introduction text and signature image in `src/components/Home.js`.

### About, services, customers, and projects

The main content sections are componentized under `src/components/`:

- `About.js`
- `Portfolio.js`
- `PortfolioBlock.js`
- `Services.js`
- `Customers.js`
- `CustomerLight.js`
- `News.js`

Update the relevant JSX and image paths there. New static images should be placed under `public/img/` and referenced with paths such as `/img/portfolio/project.png`.

### Navigation and social links

Update menu items and social profile URLs in `src/layouts/Nav.js`. Contact details and location are in `src/components/Contact.js`.

### Styling

- Global imports and page-level setup: `styles/globals.css`
- Main portfolio styles: `public/css/style.css`
- Base styles: `public/css/base.css`
- Carousel styles: `public/css/owl-carousel.css`

The light page adds the `light` class to the document body in `pages/index-light.js`.

## EmailJS Contact Form

The contact form in `src/components/Contact.js` sends messages through EmailJS using a service ID, template ID, and public key.

Before deploying your own version:

1. Create an EmailJS account and configure an email service.
2. Create a template whose field names match the form fields: `name`, `email`, `subject`, and `message`.
3. Replace the EmailJS identifiers in `src/components/Contact.js` with your own values.
4. Test the form locally and verify delivery before publishing.
5. Consider moving configuration to environment variables rather than keeping identifiers in component code.

The form currently performs client-side required-field validation and displays success or missing-field messages.

## Deployment

This is a standard Next.js application and can be deployed to Vercel or another platform that supports Node.js and Next.js.

For a traditional Node.js deployment:

```bash
npm install
npm run build
npm start
```

Set the deployment platform's build command to `npm run build` and its start command to `npm start` when required.

## Troubleshooting

### `npmm: command not found`

Use the correctly spelled command:

```bash
npm run dev
```

### Port 3000 is already in use

Start Next.js on another port:

```bash
npm run dev -- -p 3001
```

Then open [http://localhost:3001](http://localhost:3001).

### Dependencies are missing

Reinstall them from the project root:

```bash
rm -rf node_modules
npm install
```

### Contact messages are not delivered

Check the EmailJS service ID, template ID, public key, template field names, and browser console for errors. Also confirm that the EmailJS service and template are active.

## License

No license file is currently included in this repository. Add a license before distributing or reusing the project publicly.
