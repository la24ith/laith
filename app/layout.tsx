// app/globals.css
@tailwind base;
@tailwind components;
@tailwind utilities;

@layer base {
  :root {
    --bg: #0a0e14;
    --bg-elevated: #10151f;
    --bg-card: #11171f;
    --line: rgba(255,255,255,0.08);
    --line-strong: rgba(255,255,255,0.14);
    --text: #e8f4ff;
    --text-dim: #9aa7b8;
    --text-faint: #5f6b7d;
    --flutter-blue: #0468d7;
    --flutter-cyan: #27c6da;
    --dart-violet: #7c5cfc;
  }

  * {
    @apply border-border;
  }

  body {
    @apply bg-[#0a0e14] text-[#e8f4ff] font-sans antialiased;
    background-image: 
      linear-gradient(rgba(255,255,255,0.025) 1px, transparent 1px),
      linear-gradient(90deg, rgba(255,255,255,0.025) 1px, transparent 1px);
    background-size: 64px 64px;
  }

  ::selection {
    @apply bg-[#27c6da]/30 text-white;
  }
}

@layer components {
  .glass {
    @apply bg-white/5 backdrop-blur-xl border border-white/10;
  }

  .glass-hover {
    @apply transition-all duration-300 hover:bg-white/10 hover:border-[#27c6da]/30;
  }

  .gradient-text {
    @apply bg-gradient-to-r from-[#27c6da] via-[#0468d7] to-[#7c5cfc] bg-clip-text text-transparent;
  }

  .section-title {
    @apply font-display text-3xl md:text-4xl lg:text-5xl font-bold leading-tight tracking-tight;
  }

  .section-subtitle {
    @apply text-[#9aa7b8] text-lg leading-relaxed max-w-2xl;
  }

  .chip {
    @apply px-4 py-2 rounded-lg border border-white/10 bg-white/5 text-sm font-medium
    transition-all duration-300 hover:border-[#27c6da]/40 hover:bg-[#27c6da]/10 hover:-translate-y-0.5;
  }

  .btn-primary {
    @apply inline-flex items-center gap-2 px-6 py-3 rounded-xl font-semibold
    bg-gradient-to-r from-[#27c6da] to-[#0468d7] text-[#04101f]
    transition-all duration-300 hover:shadow-[0_12px_28px_rgba(4,104,215,0.35)] hover:-translate-y-0.5;
  }

  .btn-secondary {
    @apply inline-flex items-center gap-2 px-6 py-3 rounded-xl font-semibold
    border border-white/10 text-white bg-white/5
    transition-all duration-300 hover:border-[#27c6da]/40 hover:bg-[#27c6da]/10 hover:-translate-y-0.5;
  }

  .container-custom {
    @apply max-w-7xl mx-auto px-4 sm:px-6 lg:px-8;
  }
}

@layer utilities {
  .rtl {
    direction: rtl;
  }
  
  .ltr {
    direction: ltr;
  }

  .text-balance {
    text-wrap: balance;
  }
}