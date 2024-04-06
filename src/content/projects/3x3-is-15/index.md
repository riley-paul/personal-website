---
title: 3x3=15 Game
description: Number puzzle game built using React
tags:
  - React
  - Typescript
  - Email Server
  - Tailwind CSS
date: 2024-04
---

Number puzzle game where the goal is to arrange the numbers 1 through 9 in a 3x3 grid such that each horizontal axis and one diagonal sums to 15.

As far as I know there is one solution.

![screenshot](./screenshot.png)

## Inspiration

A buddy in university told me about this interesting puzzle. I recreated the problem in a spreadsheet and was able to solve it. Years later I was looking for a good project to teach myself more about drag and drop interfaces and realized this was a perfect candidate.

## Tech Stack

- **Language:** Typescript
- **Framework:** React + Vite
- **State Management:** Zustand
- **Styling:** Shadcn/UI + TailwindCSS
- **Drag and Drop:** DnD-Kit
- **Hosting:** Vercel
- **Email Service:** EmailJS

## Implementation

I opted for a React Single-Page-Application for this so it can be deployed cheaply as static assets. Using the Shadcn/UI component library gave me a good base for the UI styling. I further customized it by creating a custom colour theme, choosing a whimsical font and increasing the font size throughout the application.

A global state management solution may have been overkill for such a small application but I wanted to make use of the excellent persist middleware in Zustand. A global store also allows me to encapsulate all the state and state logic in one location. By storing the game state in localStorage the users game is peristed even if they close the tab or refresh the page.

I only know of one solution to the puzzle and am curious as to whether there are others. So I made use of an email service to send myself the solution every time someone wins the game.

## Future Plans

I really enjoyed making a game using React and web technologies and would really like to make another!
