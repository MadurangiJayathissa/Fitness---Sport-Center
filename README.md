# 🏋️ Fitness Gym — Promotional Website

A premium, fully responsive fitness gym website built with **React 18**.
Showcases services, membership plans, elite trainers, and includes a
validated contact form with animated success feedback.

---

## 🔗 Links

| Resource | URL |
|---|---|
| **Live Demo** | https://fitnesssport-center.netlify.app/ |
| **Figma Design** | https://www.figma.com/design/X1wC2bYSXQ6FgqdbXpKByW/Fitness?node-id=0-1&t=ZRpo8YtCJr7EosHE-1 |
| **GitHub Repo** | https://github.com/MadurangiJayathissa/Fitness---Sport-Center |

---

## 🛠 Tech Stack

| Technology | Purpose |
|---|---|
| React 18 | UI framework |
| CSS Custom Properties | Design system + dark mode |
| Google Fonts | Barlow Condensed + DM Sans |
| React Hooks  | State & side-effects |
| localStorage | Theme persistence |
| Netlify | Deployment |

---

## 🎨 Brand Palette

| Colour | Hex | Role |
|---|---|---|
| Gold / Amber | `#C9920A` | Primary accent, CTAs, badges |
| Dark Brown   | `#2A2516` | Deep surfaces, footer, plans bg |
| Pure Black   | `#080808` | Hero, navbar, contact section |
| Charcoal     | `#2E2E2E` | Dark-mode mid-surface |
| Cream        | `#F2EFE6` | Light-mode background, body text |

---

## ✨ Features

- **Hero** — full-screen with parallax dumbbell, animated ticker, stat grid
- **About** — brand story, animated progress bars, achievement card
- **Services** — 8 cards with **text search + 9-category filter** 
- **Trainers** — 6 expandable trainer cards with bio panels
- **Plans** — 3 pricing tiers with **monthly / annual billing toggle** 
- **Contact** — validated form + animated success feedback
- **Dark Mode** — persisted to `localStorage` 
- **Fully responsive** — mobile hamburger menu, fluid grids
- **CSS animations** — fadeUp, ticker, pulse-ring, hover micro-interactions

---

## 🚀 Setup

### Prerequisites
- **Node.js 16+** — [nodejs.org](https://nodejs.org)
- **npm 7+** — bundled with Node

### Install & run

```bash
# 1. Clone
git clone https://github.com/yourusername/fitzone-gym.git
cd fitzone-gym

# 2. Install dependencies
npm install

# 3. Start dev server  →  http://localhost:3000
npm start
```

### Build for production

```bash
npm run build
# Output: build/
```

---

## 📁 Folder Structure

```
fitzone-gym/
├── public/
│   └── index.html
├── src/
│   ├── components/
│   │   ├── Navbar.jsx      
│   │   ├── Hero.jsx        
│   │   ├── About.jsx       
│   │   ├── Services.jsx    
│   │   ├── Trainers.jsx    
│   │   ├── Plans.jsx       
│   │   ├── Contact.jsx     
│   │   └── Footer.jsx      
│   ├── styles/
│   │   └── global.css      
│   ├── App.jsx             
│   └── index.js            
├── .gitignore
├── package.json
└── README.md
```




