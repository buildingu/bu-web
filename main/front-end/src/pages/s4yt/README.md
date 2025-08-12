# CSS Styles, Tags, and Elements — Updated Documentation

> **Note:** All class names have been updated to remove the old `s4yt` prefix and reflect the current code structure, this prefix didn't even need to exist before because we are using cs modules plus when I was using the old classes sometimes they wouldn't compile so better to just get rid of them

## Element Structure

The top-level React component is wrapped in the global `<Layout>` component, which contains:

- **Header** — Global orange header *(not yet implemented)*
- **Main** — The `S4YT.jsx` page content
- **Footer** — Global magenta footer *(not yet implemented)*

---

## `<main>` — Main Content Area

Main page container, holds all content. Styled globally and by the `.container` class.  
Currently contains:

- `<div class="container">` — **Main layout wrapper** for left and right sections.

---

## `.container`

The primary flex container for the page layout.

### Contains:
- `<div class="leftSec">` — Left-side static content (logo + speech bubble)
- `<div class="contentContainer">` — Right-side dynamic content

---

## `.leftSec`

The **left-side static section** containing the main paper logo and clickable speech bubble.

### Tags:
- `<img class="paper">` — "Dollars for your thoughts" paper logo
- `<img class="speechBub">` — Speech bubble saying "Click Me" *(naming now reflects purpose)*

---

## `.contentContainer`

The **right-side dynamic section** containing navigation and section content.

### Contains:
- Navigation buttons (desktop or mobile view)
- Section content (`.textInfo`)
- Mobile-only addons (`.mobileAddons`)

---

## Navigation Buttons

Navigation is rendered in two layouts:

- **`.navDesktop`** — Desktop navigation container (column layout)
- **`.navMobile`** — Mobile navigation container (vertical list in center of screen)

### Inside navigation:
Five `<img>` elements, each with:
- The general `.navBtn` class
- A section-specific class for hover states:
  - `.what` — "What" section
  - `.amI` — "Am I" section
  - `.when` — "When" section
  - `.howDo` — "How Do" section
  - `.whatAre` — "What Are" section

---

## `.textInfo` — Section Content Area

Displays the **active section's title, bullet list, and image**.

### Structure:
```html
<div class="textInfo">
  <hgroup>
    <h3 class="textHeader"></h3>
    <div class="line"></div>
  </hgroup>
  <ul>
    <li class="listinfo"></li>
    <!-- ... -->
  </ul>
  <img class="infoImg" alt="">
</div>
'''
## Breakdown

- **.textHeader** — Section title in **ALL CAPS**  
- **.line** — Blue horizontal separator  
- **.listinfo** — Bullet point list items  
- **.infoImg** — White palm tree background image (set via CSS variable `--active-info-image`)  
- **.mobileAddons** — Mobile-only container holding:  
  - **.moreInfoBlock** — “More Info” text block shown when no section is selected  
  - **.backButton** — Mobile “Back” button to return to navigation view  

---

## Class Reference Summary

| Class Name        | Purpose |
|-------------------|---------|
| `.container`      | Main flex layout wrapper |
| `.leftSec`        | Left section container |
| `.paper`          | Paper logo image |
| `.speechBub`      | "Click Me" speech bubble |
| `.contentContainer` | Right section content wrapper |
| `.navDesktop`     | Desktop nav container |
| `.navMobile`      | Mobile nav container |
| `.navBtn`         | Shared nav button styles |
| `.what`, `.amI`, `.when`, `.howDo`, `.whatAre` | Section-specific nav button hover styles |
| `.textInfo`       | Section content container |
| `.textHeader`     | Section title styling |
| `.line`           | Section title separator line |
| `.listinfo`       | List item styling |
| `.infoImg`        | Section background image |
| `.discordLogo`    | Discord logo in section content |
| `.mobileAddons`   | Mobile-specific UI container |
| `.backButton`     | Mobile "Back" button |
| `.moreInfoBlock`  | Mobile "More Info" block |
| `.moreInfoText`   | Mobile "More Info" text |