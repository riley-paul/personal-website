---
layout: ../../layouts/ProjectPage.astro
title: "Chainage Photo Renamer"
links:
  [
    {
      url: "https://github.com/rjp301/photo-KP-label",
      name: "Source Code",
      icon: "fa-brands fa-github",
    },
  ]
tags: ["Python", "GUI", "TKinter", "Quadtree Optimization"]
description: "GUI Windows application written in Python for renaming photos with their location relative to a linear project's centerline"
date: "2021-11"
---

## Background

When working on large-scale linear projects such as pipelines, roads, and power-lines, locations along the project are referred to by their distance to the beginning of the project in meters or 'chainage'. For instance, a creek crossing is said to be at chainage of KP (Kilometer Point) 34+323 if it is 34,323m from the start of the project.

Another fact about large-scale projects is that there are hundreds or even thousands of photos taken every day. Everything is documented by safety, environmental and other groups. These photos are can be difficult to organize, especially if no forethought was used at the time of taking them.

To solve the issue of organizing photos I wanted to able to label them with the chainage that they were taken at.

## Slack Chainage

To measure the chainage of a point given the centerline of the project seems simple enough but can get complicated when considering 'slack chainage'. If two points along the centerline are said to be 100m away from each other it may be less than that when viewed from above. This is because chainage measurements take into account 3D topology and a valley or peak increases the distance between two points. This is clear in the below image.

![slack chainage](/images/chainage_renamer_slack.png)_Slack Chainage_

The solution to the slack chainage issue is to determine the two closest chainage points on either side of your point of interest and linearly interpolate between them. This gives a close approximation without three dimensional information.

## Implementation

To determine the chainage of a point relative to a centerline I created a custom centerline class to contain both the polyline and the chainage points. Because the chainage finding algorithm requires spatial filtering of a group of points, I implemented my own [Quadtree optimization](https://en.wikipedia.org/wiki/Quadtree#:~:text=A%20quadtree%20is%20a%20tree,into%20four%20quadrants%20or%20regions.) to substantially increase speed.

The GUI was created using Python TKinter and was built specifically for working with large batches of files. The workflow is as follows:

1. User prompted to select a folder containing images taken in proximity to the project
1. Geotagged location of each image is extracted from the EXIF data and chainage of that point is determined
1. Photo file is renamed with chainage and exact time of capture

![gui](/images/chainage_renamer_ui.png)_Graphical User Interface built using TKinter Python Library_

## Outcome

This app has been used for workers on two multi-billion dollar projects to organize tens of thousands of images.

## Plans

If demand for the app were to increase I would rewrite the user interface in electron and allow for users to load their own centerline files.
