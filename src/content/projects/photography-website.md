---
title: Photography Portfolio
tags:
  - Astro
  - React
  - Static-Site-Generation
  - Tailwind CSS
  - Github Pages
links:
  - url: https://photo.rileypaul.ca
    type: home
  - url: https://github.com/rjp301/photo-portfolio
    type: source
description: Photo portfolio site built from scratch using Astro and Svelte and deployed on Github Pages.
date: 2022-08
---

## Background

I have been practicing photography since 2015 and have hosted my photography portfolio using [Squarespace](https://www.squarespace.com/) since 2017. When I was learning about web development I saw this as the perfect first project as I didn't particularly enjoy spending several hundred dollars every year on Squarespace.

![screenshot of photo website](/images/photo_site_screenshot.png)

## Implementation

This site has been built and re-built too many times to count over the past couple years. Initially it was with vanilla HTML and CSS, then server-side rendered using Express and EJS templates and hosted on Google Cloud. Once, while on a React binge, I built the whole site as a single-page application; but quickly realized my mistake when it was deployed and the initial load took 30 seconds. The most recent rebuild has been as a multi-page static-site using Astro and hosted on Github Pages.

A function of this site that I am proud of is the ability to quickly add and remove photos and albums through only the file system with no need for a JSON map. This maintains the principle of DRY coding (Don't Repeat Yourself).

## Lessons

I've learned many lessons and best practices by building this site over and over. The most valuable has been to keep things as simple as possible when choosing a framework. For a basic site such as this, with minimal user interactivity, there is no need for a virtual dom, state management, or any of the other awesome features provided by React and it's counterparts.

A statically generated site with islands of interactivity is perfect for this application and Astro is as blazingly fast as advertised.
