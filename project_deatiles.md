VyomGarud Landing Page Development Plan

This document outlines the scope, aesthetic guidelines, structure, and required components for the VyomGarud UAV Systems landing page.

Goal: Create a modern, single-file React application using Tailwind CSS that projects a military-grade identity of high reliability, precision, and advanced autonomy.

1. Project Identity & Aesthetic

Attribute

Detail

Company

VyomGarud (UAV / Drone Systems)

Identity

Professional, Military-Grade, High Reliability, Precision Engineering, Advanced Autonomy.

Stack

Single React file (App.jsx), Tailwind CSS (assumed available).

Aesthetic

Dark, Modern, Futuristic, and Confident.

Primary Font

Inter (Default for readability and professionalism).

Color Palette

Background: Charcoal/Very Dark Gray (#111827 or similar). Text: White/Light Gray. Accent: Vibrant Orange (#ff7b00).

Icons

Use lucide-react for clean, technical icons.

Design Rule

Full responsiveness across mobile, tablet, and desktop. Avoid fixed widths.

2. Required Sections & Content Structure

1. Hero Section (The Apex)

Identity: VyomGarud

Tagline: Precision Autonomy. Unrivaled Reliability.

Visual: A dark background with subtle, geometric patterns or a placeholder for a high-res drone image/rendering. Use an overlay effect to make the text pop.

CTA: Primary button: "Explore Systems" (Accent Orange). Secondary link: "Contact Sales".

2. About Section (The Mission)

Heading: Forging the Future of Flight

Body: A concise paragraph summarizing the mission.

Draft Content: "VyomGarud is dedicated to developing and deploying mission-critical UAV systems. Our platforms are built on a foundation of proprietary advanced AI and robust, military-spec hardware, ensuring operational success in the most demanding environments globally. We don't just fly; we execute with absolute precision."

3. Capabilities / Products Section (The Arsenal)

Present 3-4 feature cards. These should use the accent orange for key icons or borders.

Card Title

Icon (lucide-react)

Description Focus

Advanced Autonomy

Brain

Deep learning algorithms for complex flight paths, real-time decision-making, and swarm coordination.

Mission Durability

Shield

Hardened hardware and encrypted communication links (AES-256) designed for extreme weather and adversarial environments.

Modular Payload

Box

Quick-swap payload architecture supporting ISR, electronic warfare (EW), and specialized sensor packages.

Global Reach

Satellite

Multi-band satellite communication enabling persistent, beyond-visual-line-of-sight (BVLOS) operation anywhere.

4. Highlights (The Edge)

A simple, three-column layout showcasing key selling points.

99.99% Mission Success Rate: Field-proven reliability metrics.

T-L3 Certified Hardware: Meeting the highest industry durability standards.

Real-Time Edge AI: Processing critical data onboard, minimizing latency.

5. Contact / Footer

Contact CTA: "Ready for Mission Briefing?"

Simple Form:

Name (Input)

Email (Input)

Message (Textarea)

Submit Button (Orange Accent)

Footer Links: Legal, Privacy, Careers. Simple copyright line.

3. Technical Implementation Notes (React/Tailwind)

Single File Mandate: All React components, state, and styling (via Tailwind) must reside in a single file named VyomGarudLanding.jsx.

State Management: Use useState and useEffect hooks for local state and component lifecycle management.

Animations: Implement subtle, non-intrusive animations:

On Hover: Simple scale or translate-y transitions on CTA buttons and Capability Cards.

Fade-in: A simple opacity transition for sections as the user scrolls (though a full Intersection Observer is optional, static transitions are fine).

Styling Implementation: Utilize Tailwind utility classes exclusively. Use custom classes sparingly for complex components if necessary, but keep them within the single file.

Responsiveness: Use responsive prefixes (sm:, md:, lg:) extensively, especially for the Capabilities Grid and Hero layout, to ensure optimal viewing on mobile devices.

Icons: Import necessary icons from lucide-react.

🚨 Critical Element: Accent Color Variable

Define a custom Tailwind color if possible, or consistently use the hex value #ff7b00 for the primary accent (e.g., button backgrounds, icon colors, underlines).
