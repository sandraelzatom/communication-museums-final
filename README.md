# Museum of Human Connectivity: Echoes to Electrons
**Author:** [Sandra Elza Thomas]
**Course:** IS-117004
**Instructor:** Professor Williams
# 🏛️ Museum of Echoes: A History of Signals
> **"From the spark of the telegraph to the logic of the silicon."**

[![Live Demo](https://img.shields.io/badge/Live-Demo-brightgreen?style=for-the-badge)](https://sandraelzatom.github.io/communication-museums-final/)
[![UI Style](https://img.shields.io/badge/UI-Claude--Inspired-7C3AED?style=for-the-badge)](https://claude.ai)
[![License](https://img.shields.io/badge/License-MIT-blue?style=for-the-badge)](LICENSE)

## 🔭 Project Overview
The **Museum of Echoes** is a high-fidelity digital archive designed to preserve and visualize the history of human communication. Moving away from static image galleries, this project uses **Scroll-Triggered Synchronicity** to tell the story of how signals evolved from physical pulses into invisible waves and digital light.

The design language is inspired by modern AI interfaces: **dark-mode by default, neon accents, glassmorphic containers, and fluid typography.**

---

## 🎨 Visual Philosophy & Design System

### 1. The Color of Communication
Each era in the museum is assigned a specific "Signal Hue" that dynamically updates the entire UI theme via CSS variables:
* **Telegraph Era:** `#ff5f1f` (Industrial Copper) - Represents the physical spark.
* **Radio Era:** `#00d4ff` (Ether Blue) - Represents the invisible atmosphere.
* **Digital Era:** `#39ff14` (Terminal Green) - Represents logic and processing.

### 2. Glassmorphism & Depth
We utilize `backdrop-filter: blur(15px)` and semi-transparent borders to create "display cases" that feel like they are floating over a deep space background.

### 3. Motion as Language
* **Intersection Observer API:** Content doesn't just sit on the page; it "awakes" as the user scrolls, sliding into position with cubic-bezier easing.
* **SVG Pulsing:** Radio waves and signal lines are animated using CSS keyframes to represent active communication.

---

## 🛠️ Technical Architecture

### Core Technologies
* **HTML5 & SCSS:** Semantic structure with modular styling.
* **Vanilla JavaScript:** Lightweight implementation for maximum performance.
* **Intersection Observer:** Handles all scroll-based entrance animations.
* **URL SearchParams:** Powers the dynamic `exhibit-detail.html` to load different artifact data without needing multiple HTML files.

### Repository Structure
```text
├── index.html              # The Grand Gallery (Landing & Main Timeline)
├── exhibit-detail.html     # Dynamic Artifact Viewer (Detailed Research)
├── assets/                 # High-resolution media and icons
├── styles/
│   ├── main.css            # Core Layout & Typography
│   └── animations.css      # Keyframes and Transition logic
├── scripts/
│   ├── observer.js         # Scroll-trigger logic
│   └── data-injector.js    # Content mapping for exhibits
└── research.md             # Scholarly background and bibliography
