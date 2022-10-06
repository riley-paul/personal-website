---
layout: ../../layouts/ProjectPage.astro
title: "Personal Website"
tags:
  [
    "Javascript",
    "Tailwind CSS",
    "Astro",
    "ThreeJS",
    "HTML",
    "Github Pages",
    "MDX",
  ]
links:
  [
    {
      url: "https://github.com/rjp301/personal-website-astro",
      name: "Source Code",
      icon: "fa-brands fa-github",
    },
    {
      url: "https://rileypaul.ca",
      name: "Homepage",
      icon: "fa-solid fa-arrow-up-right-from-square",
    },
  ]
description: "Portfolio/resume website to showcase my projects and experience all in one place."
date: "2022-09"
---

Coming fresh off the rebuild of my [photography site](https://photo.rileypaul.ca) using [Astro](https://astro.build/), I decided to make myself a personal website to showcase my projects and experience.

## Design

The most difficult part of this project was by far settling on a design and sticking to it. There are so many fantastic personal websites out there for inspiration that I felt like I was being pulled in many different directions and the site suffered because of it. I started off with a single-page design because I thought it would be the most engaging to viewers as it requires little effort to see every section. While that sentiment is still valid, I ended up going with a multi-page site because it allowed me to be more organized and modular.

I hummed and hawed over many colour schemes and font choices, but in the end kept things as simple as possible with a dark colour, a light colour and an accent.

## Technical Challenges

Thankfully, do to the incredibly robust and simple nature of Astro, I ran into very few technical challenges with one exception: embedded 3D models.

As many of the projects I wish to showcase have one or more associated 3D models, I wanted a way to show them off that's more interactive than a rendered image or video. So I took it upon myself to learn ThreeJS for this project. Thanks to the excellent online community around this package, I was able to quickly get my models displaying, spinning, and interactable.

I wanted to directly embed the canvas rendered by ThreeJS in my project pages; but as these pages are markdown files rendered by Astro, they are not capable of running client-side javascript. Instead I opted to created a static page for each of my models and embed inline-frame elements in the markdown linking to those pages. This is not the most elegant or modern solution, but it does keep the site completely statically-generated which was one of the goals.

## Future Plans

I would like to continue to improve the design of this site going forward. I'm still not completely happy with it, but as they say:

> Perfection is the enemy of the good
