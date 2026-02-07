---
theme: seriph
themeConfig:
# background: https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=2070&auto=format&fit=crop
class: text-center
highlighter: shiki
lineNumbers: false
info: |
  ## Pincer Protocol - Ads for AI
  Pincer is a protocol that turns traditional ad budgets into user subsidies for AI agents.
  It solves the 402 Payment Required problem by allowing brands to sponsor search fees.
title: Pincer Protocol | Ads for AI
seoMeta:
  title: Pincer Protocol - The Future of Agentic Advertising
  description: Turning ad budgets into user subsidies. Stop buying attention, sponsor the decision.
  keywords: AI Agents, 402 Payment Required, Web3, Advertising, Pincer Protocol, OpenClaw
  og:title: Pincer Protocol | Ads for AI
  og:description: The first economic incentive protocol built for the Agentic Web.
  ogImage: https://raw.githubusercontent.com/pincerclaw/branding/main/logo.webp
  ogUrl: https://pitch.pincer.xyz
  twitterCard: summary_large_image
  twitterTitle: Pincer Protocol - The Future of Agentic Advertising
  twitterDescription: Turning ad budgets into user subsidies. Stop buying attention, sponsor the decision.
  twitterImage: https://raw.githubusercontent.com/pincerclaw/branding/main/logo.webp
head:
  - - link
    - rel: alternate
      type: text/plain
      href: /llm.txt
  - - meta
    - name: ai-agent-content
      content: /llm.txt
drawings:
  persisted: false
css: unocss
src: ./pages/01-pincer.md
---

---
src: ./pages/02-the-paradigm-shift.md
---

---
src: ./pages/03-the-problem.md
---

---
src: ./pages/04-the-solution.md
---

---
src: ./pages/05-the-story.md
---

---
src: ./pages/06-technical-architecture.md
---

---
src: ./pages/07-the-triple-win.md
---

---
src: ./pages/08-from-banner-to-payload.md
---

---
src: ./pages/09-the-economy-of-free.md
---

---
src: ./pages/10-the-internet-is-a-toll-road.md
---

---
<div @click="$slidev.nav.next" class="mt-12 py-1" hover:bg="white op-10">
  Press Space for next page <carbon:arrow-right />
</div>

<div class="abs-br m-6 text-xl">
  <button @click="$slidev.nav.openInEditor()" title="Open in Editor" class="slidev-icon-btn">
    <carbon:edit />
  </button>
  <a href="https://github.com/slidevjs/slidev" target="_blank" class="slidev-icon-btn">
    <carbon:logo-github />
  </a>
</div>
---
