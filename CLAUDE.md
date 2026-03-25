@AGENTS.md

# memoir-web-profile — Company Profile / Landing Page

Website company profile untuk **memoir.** platform B2B2C SaaS photobooth.

## Tech Stack

- Next.js 16, React 19, TypeScript
- Tailwind CSS v4
- Framer Motion (animasi)
- shadcn/ui (minimal — hanya untuk base components jika dibutuhkan)

## Struktur

```
src/
├── app/                 # Next.js App Router pages
│   ├── globals.css      # Tailwind + CSS variables
│   ├── layout.tsx       # Root layout
│   └── page.tsx         # Landing page
├── components/
│   ├── ui/              # shadcn/ui components (minimal)
│   ├── layout/          # Navbar, Footer, dll
│   └── sections/        # Section components (Hero, Features, Pricing, dll)
└── lib/
    └── utils.ts         # Utility functions
```

## Konvensi

- Bahasa UI: **Bahasa Indonesia**
- Desain: **custom-first**, shadcn hanya sebagai fallback jika dibutuhkan
- Animasi: gunakan Framer Motion, bukan CSS animation manual
- Semua konten static — tidak ada API calls ke backend-memoir
- Referensi docs: lihat `../memoir-docs/` untuk konteks bisnis dan fitur

## Halaman (Planned)

- `/` — Landing page (Hero, Features, Pricing, How it Works, FAQ, CTA)
