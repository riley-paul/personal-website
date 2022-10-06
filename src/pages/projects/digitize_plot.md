---
layout: ../../layouts/ProjectPage.astro
title: "Plot Digitizer Web App"
tags: ["Typescript", "React", "Tailwind CSS", "Firebase", "HTML Canvas"]
links:
  [
    {
      url: "https://github.com/rjp301/digitize-plot",
      name: "Source Code",
      icon: "fa-brands fa-github",
    },
    {
      url: "https://digitize-plot.web.app",
      name: "Homepage",
      icon: "fa-solid fa-arrow-up-right-from-square",
    },
  ]
description: "Web app to convert images of plots to raw data"
date: "2022-10"
---

Have you ever been given data as just an image of a plot? Then spent 30 minutes painstakingly trying to transfer the data into an Excel table? Me too! That's why I created this tool.


## Premise

There are many instances where data is available in only a chart format with an x and y axis and minimal labels.

![example plot](/images/BPL220K_24ft.png)

This app allows users to upload an image of that chart, position two calibration points per axis, then place as many data points as they would like on the plot and export those data points. 

![example plot in app](/images/digitize_plot_app.png)

## Tech Stack

This single-page React application is written in Typescript and hosted on Firebase. I made use of several libraries such as react-csv, react-konva (for the canvas) and react-dropzone.

## Future Plans

In the future I would consider adding options for different axis scales such as logarithmic and datetime. As well I would like to improve the general fit and finish.
