# Design Notes

## What design-reference.html is

A working HTML file that shows you all four states your app needs to handle:
1. The home page (all courses)
2. A course detail page
3. A category filtered page
4. A "not found" state for invalid slugs

Open it in your browser. The bar at the top lets you switch between pages. The
yellow annotations at the bottom of each page tell you which React Router concept
powers each part.

**This is a layout guide, not a design to copy.** The colours, fonts, spacing,
and overall look are yours to decide.

---

## Inspiration references

Visit these real sites and study how they handle course listing and detail pages.
Pay attention to what information they show on cards vs the full detail page.

| Site | What to look at |
|---|---|
| [Scrimba](https://scrimba.com/learn) | Clean course grid with category filters |
| [Frontend Mentor](https://www.frontendmentor.io/challenges) | Challenge cards — a very similar layout to what you're building |
| [Egghead.io](https://egghead.io/q) | Minimal card design, good typography |
| [The Odin Project](https://www.theodinproject.com/paths) | Path/category pages, great for the category page inspiration |

---

## Things to think about when designing

- What makes a card scannable? Students should be able to tell at a glance
  what level a course is and how long it takes.
- What does the detail page need that the card doesn't? More text, a structured
  list, visual hierarchy.
- How does the navbar communicate which page you're on? (NavLink active state)
- What should the "not found" state feel like? Clear, not alarming.
