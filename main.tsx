@import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&family=JetBrains+Mono:wght@400;500&family=Playfair+Display:ital,wght@0,400..900;1,400..900&display=swap');
@import "tailwindcss";

@theme {
  --font-sans: "Inter", ui-sans-serif, system-ui, sans-serif;
  --font-mono: "JetBrains Mono", ui-monospace, SFMono-Regular, monospace;
  --font-serif: "Playfair Display", serif;
  
  --color-brand-primary: #0066ff;
  --color-brand-secondary: #ff6b00;
  --color-bg-light: #ffffff;
  --color-text-dark: #1a1a1a;
  --color-text-muted: #666666;
}

@layer base {
  body {
    @apply bg-bg-light text-text-dark font-sans antialiased;
    word-break: keep-all;
    overflow-wrap: break-word;
    text-align: left;
  }

  p {
    @apply leading-[1.7] max-w-[65ch];
    margin-bottom: 1.5rem;
  }

  h1, h2, h3, h4, h5, h6 {
    @apply tracking-tight;
    word-break: keep-all;
  }
}

.glass-card {
  @apply bg-white/40 backdrop-blur-xl border border-black/5 rounded-2xl;
}

.text-gradient {
  @apply bg-clip-text text-transparent bg-gradient-to-r from-brand-primary to-brand-secondary;
}

.grid-pattern {
  background-image: radial-gradient(circle, #e5e7eb 1px, transparent 1px);
  background-size: 30px 30px;
}

.dot-pattern {
  background-image: radial-gradient(#e5e7eb 1px, transparent 1px);
  background-size: 20px 20px;
}

