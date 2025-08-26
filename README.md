# GT Portfolio

This is a modern portfolio website built with Next.js, React, and Tailwind CSS.

## Prerequisites

- Node.js (v18 or later)
- npm (v9 or later) or Yarn (v1.22 or later)
- Git

## Getting Started

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd GT
   ```

2. **Install dependencies**
   ```bash
   npm install
   # or
   yarn install
   ```

3. **Environment Variables**
   Create a `.env.local` file in the root directory and add any required environment variables:
   ```env
   NEXT_PUBLIC_SITE_URL=http://localhost:3000
   ```

4. **Run the development server**
   ```bash
   npm run dev
   # or
   yarn dev
   ```
   Open [http://localhost:3000](http://localhost:3000) in your browser.

## Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm start` - Start production server
- `npm run lint` - Run ESLint
- `npm run format` - Format code with Prettier

## Project Structure

```
src/
  ├── app/                 # App router
  ├── components/          # Reusable components
  ├── data/               # Data files
  └── styles/             # Global styles
```

## Deployment

### Vercel (Recommended)
[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=YOUR_REPO_URL)

### Other Platforms
You can deploy this application to any platform that supports Node.js applications.

## Technologies Used

- Next.js 14
- React 18
- TypeScript
- Tailwind CSS
- Lucide Icons

## License

This project is licensed under the MIT License.
