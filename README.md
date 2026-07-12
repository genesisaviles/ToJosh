# Costa Rica Trip Invitation (Birthday Gift)

This project is a luxury digital invitation built with React, Vite, TypeScript, and Framer Motion. It acts as an emotional love letter, storytelling experience, and trip planner all in one.

## Running Locally

1. Install dependencies:
   ```bash
   npm install
   ```
2. Start the development server:
   ```bash
   npm run dev
   ```

## Editing Content

**You do NOT need to edit any React code to update the text, photos, or prices.**

Simply open `src/data/content.ts`. Every single piece of text, pricing, and placeholder is centralized in this file. 

When you want to add an image:
1. Place the image file in the `public/` directory (e.g., `public/beach.jpg`).
2. Update the string in `content.ts` to reference it. Instead of `"[ADD PHOTO]"`, you can use an `<img>` tag string or adjust the React components to render the paths if you prefer. Currently, the placeholders are text. For actual images, you can update the components to accept image URLs. 
*(Note: To perfectly replace `[ADD PHOTO]` with actual images, you can modify the React components to expect a `src` path string and render an `<img src={...} />`, or directly embed an `<img>` tag if using dangerouslySetInnerHTML, but the safest way is updating the component).*

## Deployment to GitHub Pages

This project is pre-configured with `base: './'` in `vite.config.ts`, making it perfect for GitHub Pages.

1. Build the project:
   ```bash
   npm run build
   ```
2. The generated `dist` folder can be uploaded directly to GitHub Pages.
