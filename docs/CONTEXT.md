# PetPortrait Landing Page Specification

## Project Overview
PetPortrait is an AI-powered app that makes capturing perfect pet photos effortless. The landing page should feel modern, playful, and tech-forward while being instantly understandable.

## Tech Stack
- Next.js 14 with App Router
- Tailwind CSS + Framer Motion
- TypeScript
- Vercel Edge Network

## Design Philosophy
- Clean, airy layouts with plenty of whitespace
- Smooth, subtle animations that feel natural
- Mobile-first, responsive design
- Modern gradient accents and glass-morphism effects

## Core Sections

### Hero Section
Modern, minimal hero with:
- Split-screen layout
- Left: Value prop + CTA
- Right: Floating device mockup with live demo
- Subtle background gradient animation
- Prominent download buttons

### Key Features (3-Step Story)
1. **Point & Shoot** 
   - AI automatically detects perfect moments
   - No more missed shots or blurry photos
   - Visual demo of AI detection in action

2. **Get Attention**
   - Smart sound system plays pet-specific noises
   - Built-in treat tracker animation
   - Library of proven attention-getters

3. **Share & Grow**
   - One-tap sharing to social
   - AI generates engaging captions
   - Tracks your pet's growth over time

### Social Proof
Modern testimonial display:
- Grid of success stories
- Before/after photo comparisons
- Live download counter
- App store ratings widget

### Final CTA
Clean call-to-action with:
- Floating device mockups
- QR code for instant download
- Animation showing key features
- Trust badges and guarantees

## Visual Language

### Colors
```css
/* Modern, friendly palette */
--primary: #6366F1    /* Indigo */
--secondary: #10B981  /* Emerald */
--accent: #F59E0B     /* Amber */
--surface: #F8FAFC    /* Slate 50 */
--text: #1E293B       /* Slate 800 */
```

### Typography
- Headlines: Inter (Bold)
- Body: SF Pro Display
- Features: Clear hierarchy with size contrast

### UI Elements
- Floating cards with subtle shadows
- Glass-morphism effects on CTAs
- Micro-interactions on hover
- Progress indicators and loaders

## Key Metrics to Track
- Time to first interaction
- Feature section visibility
- Download funnel progression
- Device/platform analytics

## Development Priorities

### Phase 1: Core Experience
- [x] Responsive layout structure  
- [x] Basic animations
- [x] Critical user paths

### Phase 2: Engagement
- [ ] Interactive demos
- [ ] Smooth transitions
- [ ] Loading states

### Phase 3: Polish
- [ ] Performance optimization
- [ ] A11y improvements
- [ ] Analytics integration

### Phase 4: Launch
- [ ] Final testing
- [ ] SEO optimization
- [ ] Monitoring setup

## Success Metrics
- Sub-2s load time
- >50% scroll depth
- >30% CTA engagement
- >90 Lighthouse score
