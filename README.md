# EgyCalorie

You are a senior frontend engineer and UI implementation specialist.

I want you to build the frontend UI only based on this Figma design:

https://www.figma.com/design/4ijqNikk9bpyzqDr9RmQTO/-FREE-version--Nutrigo---Health-Nutrition---Diet-Admin-Dashboard--Community-?t=b8ZfebvEFAKzFgpM-0

IMPORTANT

The Figma design is the single source of truth for the visual design.

Your job is to reproduce the Figma interface as accurately as possible.

Do NOT redesign it.
Do NOT create your own UI.
Do NOT simplify the layout.
Do NOT change the visual style.
Do NOT replace components with generic dashboard components.
Do NOT make design decisions that contradict the Figma.

The final frontend should visually feel like the same product shown in the Figma.

1. FIRST: ANALYZE THE FIGMA

Before writing the implementation, inspect the entire Figma design carefully.

Identify:

All available screens/pages

Desktop layouts

Tablet layouts

Mobile layouts

Sidebar/navigation

Header/top navigation

Dashboard sections

Cards

Statistics widgets

Charts

Tables

Forms

Buttons

Tabs

Dropdowns

Modals

Icons

Images

Avatars

Typography

Colors

Spacing

Borders

Border radius

Shadows

Active states

Hover states

Empty states

Repeated components

Responsive behavior

Do not start by guessing.

Understand the design system first, then implement it.

2. BUILD THE FRONTEND ONLY

At this stage I only want the frontend/UI implementation.

Do NOT implement:

Authentication

Backend

Database

API integrations

Real nutrition calculations

User accounts

Payment systems

AI functionality

External services

Use realistic mock data where the Figma requires data.

The purpose of this phase is to create a high-fidelity frontend that can later be connected to a real backend.

3. HIGH-FIDELITY IMPLEMENTATION

Match the Figma as closely as possible.

Pay special attention to:

Typography

Match:

Font family

Font size

Font weight

Line height

Letter spacing

Heading hierarchy

Body text hierarchy

Layout

Match:

Container widths

Sidebar width

Header height

Card dimensions

Grid structure

Column widths

Padding

Margins

Gaps

Alignment

Visual design

Match:

Colors

Backgrounds

Borders

Border radius

Shadows

Icons

Images

Charts

Buttons

Form controls

Do not use arbitrary values when the Figma clearly indicates a consistent design system.

4. REUSABLE COMPONENTS

Build the UI using reusable components.

For example:

Sidebar

Header

Navigation item

Dashboard card

Statistic card

Chart card

Table

Table row

Button

Input

Select

Modal

Tabs

Meal card

Food item

Progress indicator

Do not duplicate large blocks of markup unnecessarily.

Create a clean component architecture that another developer can extend later.

5. RESPONSIVE DESIGN

This is extremely important.

The final interface must work properly on:

Desktop

Tablet

Mobile

Do NOT simply scale the desktop layout down.

If the Figma contains mobile designs, follow those designs.

Preserve the same:

Visual hierarchy

Spacing system

Component appearance

Navigation behavior

Typography hierarchy

On smaller screens, implement the responsive behavior shown by the Figma.

6. ASSETS

Use the actual visual assets available from the Figma whenever possible.

Do not replace the design with unrelated stock images.

Do not randomly substitute icons.

If an exact asset cannot be imported, use the closest possible equivalent while keeping the visual appearance consistent.

7. MOCK DATA

Use realistic mock data only to make the interface look complete.

The mock data should follow the structure shown in the Figma.

For example, if the design contains:

Calories

Meals

Nutrition statistics

Progress

Charts

Food entries

Dates

User information

populate them with realistic values.

Keep the data layer separate from the UI so it can later be replaced by real API/database data.

8. DO NOT CHANGE THE DESIGN FOR THE SAKE OF "BEST PRACTICES"

Do not decide that another layout would be better.

Do not replace the Figma navigation.

Do not introduce a different color palette.

Do not change card styles.

Do not redesign charts.

Do not add sections that are not present.

The Figma is the design authority.

9. CODE QUALITY

Use:

Clean component structure

Reusable components

Maintainable CSS

Consistent design tokens

Responsive layouts

Semantic HTML

Accessible controls

Clean naming

Minimal unnecessary dependencies

Keep the project easy for another developer to continue.

10. FINAL VISUAL QA

After implementing the frontend, compare the rendered result against the Figma.

Check and correct:

Overall layout

Sidebar dimensions

Header dimensions

Card sizes

Spacing

Alignment

Typography

Colors

Borders

Shadows

Icons

Charts

Responsive behavior

Mobile layout

Do not consider the task complete if the result is only a rough approximation.

Aim for a high-fidelity implementation.

FINAL GOAL

The workflow is:

Figma
↓
Analyze design
↓
Recreate the UI
↓
Responsive frontend
↓
Visual QA
↓
High-fidelity implementation

For this phase, focus only on reproducing the frontend design.

Do not build the backend or business logic yet.

This project was built with [Lovable](https://lovable.dev).

**Live app**: https://egycalorie.lovable.app

## Build with Lovable

Continue developing this project in the [Lovable editor](https://lovable.dev/projects/7391fa7b-5dde-4639-9085-6d2847b1f8ee).

- **Ship faster**: describe what you want to build and Lovable handles the code.
- **Stay in sync**: every change made in Lovable is committed straight to this repository.
- **Full ownership**: this code is yours. Push to `main` on GitHub and your changes sync back into Lovable, ready for your next prompt.

## Development

Prefer working locally? You need Node.js and npm — [install with nvm](https://github.com/nvm-sh/nvm#installing-and-updating).

```sh
git clone <this-repository-url>
cd <repository-name>
npm i
npm run dev
```
