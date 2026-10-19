# 🍿 My Snack Brand Website

A polished, modern premium static website built with **Astro**, **TypeScript**, and **Tailwind CSS**.

## 🚀 Project Overview
- **Brand:** My Snack Brand
- **Target Market:** Local delivery in India
- **Ordering System:** WhatsApp-based integration
- **Visual Style:** Modern Premium (Amber & Stone palette)

## 🛠️ Prerequisites
- **Node.js:** v22.12.0 or higher
- **npm** or **pnpm** or **yarn**

## ⚙️ Local Setup & Development
1. **Clone or extract the project folder.**
2. **Install dependencies:**
   ```bash
   npm install
   ```
3. **Start development server:**
   ```bash
   npm run dev
   ```
4. **View the site:** Open `http://localhost:4321` in your browser.

## 📝 Customization Guide
To make this website your own, update the following placeholders:

- **WhatsApp Number:** In `src/pages/index.astro`, change `const whatsappNumber = "910000000000";` to your own phone number (include country code, e.g., `91` for India).
- **Products & Prices:** Edit `src/content/products/data.ts` to update names, descriptions, INR prices, and image URLs.
- **Delivery Area:** Update the text `[Your Delivery Area]` in `src/layouts/MainLayout.astro` and `src/pages/index.astro`.
- **Domain:** Update the site title and metadata in `src/layouts/MainLayout.astro`.

## 📦 Production Build
To generate the static HTML/CSS/JS files:
```bash
npm run build
```
The output will be in the `dist/` folder.

## 🌐 Deployment

### Netlify (Recommended)
1. Push this code to a GitHub repository.
2. Connect the repo to Netlify.
3. Netlify reads [`netlify.toml`](./netlify.toml) for the build command, publish directory, and Node.js version.
4. Deploy the site. The production build is static and does not require a Netlify adapter.

### Cloudflare Pages
1. Push code to GitHub/GitLab.
2. Create a new project on Cloudflare Pages.
3. **Build Settings:**
   - Framework preset: `Astro`
   - Build command: `npm run build`
   - Build output directory: `dist`
