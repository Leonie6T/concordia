# Concordia House - Student Accommodation Website

A modern, mobile-optimized website for Concordia House student accommodation in Komani, South Africa.

## Features

- **Homepage** with hero section, features showcase, and location highlights
- **Online Application Form** for student accommodation
- **Interest/Waitlist Form** for exclusive residence waitlist
- **Incident Report Form** for reporting issues
- **Rules & Regulations** page with organized sections
- **WhatsApp Integration** - floating button and footer links
- **Mobile-First Design** with navy and terracotta color scheme
- **Modern UI** with animations and smooth transitions

## Tech Stack

- Next.js 14 (App Router)
- TypeScript
- Tailwind CSS
- Prisma (SQLite)
- Framer Motion
- React Hook Form + Zod
- Heroicons

## Getting Started

### Prerequisites

- Node.js 18+ installed
- npm or yarn

### Installation

1. Install dependencies:
```bash
npm install
```

2. Generate Prisma Client:
```bash
npx prisma generate
```

3. Run database migrations (if needed):
```bash
npx prisma migrate dev
```

4. Start the development server:
```bash
npm run dev
```

5. Open [http://localhost:3000](http://localhost:3000) in your browser

## Project Structure

```
concordia-house/
├── app/
│   ├── layout.tsx          # Root layout
│   ├── page.tsx            # Homepage
│   ├── apply/              # Application form
│   ├── interest/           # Waitlist form
│   ├── incident/           # Incident report form
│   ├── rules/              # Rules & regulations
│   ├── api/                # API routes
│   └── globals.css         # Global styles
├── components/             # React components
├── lib/                    # Utilities (Prisma client, etc.)
├── prisma/                 # Database schema
└── public/
    └── assets/             # Images and logos
        ├── images/         # Facility photos
        └── logo/           # Logo files
```

## Adding Images

Place your facility images in `public/assets/images/` and logo files in `public/assets/logo/`.

## Configuration

### WhatsApp Number

Update the WhatsApp number in:
- `components/WhatsAppButton.tsx` (line 6)
- `components/Footer.tsx` (line 50)
- `app/rules/page.tsx` (line 150)

Replace `'27123456789'` with your actual WhatsApp number (format: country code + number, no + or spaces).

### Database

The project uses SQLite by default. To change the database:
1. Update `prisma/schema.prisma`
2. Update `.env` with your database URL
3. Run `npx prisma migrate dev`

## Building for Production

```bash
npm run build
npm start
```

## Features Overview

### Application Form
Students can apply for accommodation with:
- Personal information
- Room type preference
- Course and year of study
- NSFAS status

### Interest/Waitlist Form
Simple form to join the waitlist for when spaces become available.

### Incident Report
Allows residents to report:
- Safety concerns
- Maintenance issues
- Noise complaints
- Other incidents

### Rules & Regulations
Organized, mobile-friendly display of residence rules with accordion sections.

## Color Scheme

- **Navy**: #1e3a5f (primary)
- **Terracotta**: #c85d44 (accent)

## License

Private project for Concordia House

