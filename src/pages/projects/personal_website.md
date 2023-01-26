---
layout: ../../layouts/ProjectPage.astro
title: Personal Website
tags:
  - Javascript
  - Tailwind CSS
  - Astro
  - ThreeJS
  - HTML
  - Github Pages
  - MDX
links:
  - url: https://github.com/rjp301/personal-website-astro
    name: Source Code
    icon: fa-brands fa-github
  - url: https://rileypaul.ca
    name: Homepage
    icon: fa-solid fa-arrow-up-right-from-square
description: You're browing it as we speak.
date: 2022-09
---

> Perfection is the enemy of the good

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

---

## _Update Jan 2023_

I just completed an overhaul on my personal portfolio website with a focus on simplification and allowing quicker access to information. These are the changes I made:

### Consolidated Pages

I considerably reduced the amount of pages while maintaining the same amount of information. I did this by removing the landing page and replacing it with a single-page application that immediately shows the list of my projects. There is a toggle at the top that can replace the project list with my resume. This will hopefully grab the visitor's eye and removes one level of friction between them and learning more about my work.

Originally I had each section of my resume on individual pages but have now placed it all on one long page. I was initially worried it would be too much scrolling but our thumbs are quite good at that these days so it shouldn't be a problem. I created a tab-switching widget to flip between different types of experience to make this page more compact on smaller screens.

### Removed Colours

Originally I had a rich, dark, blue background with a mauve accent colour for the navigation menu. As I removed the navigation menu because there are so few pages I got rid of that accent colour too. This results in a much cleaner site in my opinion.

### Conclusion

The creative and technical freedom was absolutely overwhelming when I was first building this site last year. Knowing there was no opinion that mattered but my own actually made it harder to make choices. I had many false starts and abandoned repositories. At first I couldn't decide on which tech stack to use, after that it was how to organize the site navigation, after that it was hundreds of tiny decisions on styling. It didn't help that there are thousands of examples of uniquely beautiful portfolio websites out there that I kept trying to draw inspiration from simultaneously.

I got a functioning site up and running that I wasn't entirely happy with but it was good enough. Coming back to it months later with fresh eyes made the decision making process so much easier. I could clearly see areas for improvement as though looking at someone else's work not my own. Making changes was incremental rather than fundamental and my mind had had time to distill all those other sites I looked at for inspiration into several guiding concepts rather than literal guides.
