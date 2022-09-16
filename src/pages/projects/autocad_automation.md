---
layout: ../../layouts/ProjectPage.astro
title: "AutoCAD Automation Library"
links:
  [
    {
      url: "https://github.com/rjp301/autocad",
      name: "Source Code",
      icon: "fa-solid fa-code",
    },
  ]
tags: ["Python", "Object-Oriented Programming", "Custom Library", "Automation"]
---

## Background

Straight out of school at my first engineering job in 2019 I was tasked with populating a huge [AutoCAD](https://www.autodesk.ca/en/products/autocad/overview?term=1-YEAR&tab=subscription) drawing with thousands of pieces of text. This drawing was a top down view of a 70km long pipeline, 120 pages long, with text indicating details of the pipeline placed directly across from that detail on the page.

I spent several weeks manually copying text from excel sheets, placing it just so and making sure there were no typos, that it was on the right layer, and so on. The entire time I was doing this monotonous work my mind was milling over how I could not do this.

On the fourth straight week of banging my head against the wall I dusted off my [Matlab](https://www.mathworks.com/products/matlab.html) skills and wrote a script to try to alleviate my pain. The script read a list of all the pipeline details and figured out their intended position through linear interpolation between the beginning and end of the page. One of AutoCAD's best features is it's command line interface. The script generated a massive set of instructions for AutoCAD to change layers, make text, draw lines, change layouts and so on to complete all the work I'd been doing by hand in minutes.

When I realized that my script actually worked I was overjoyed and immediately began improving it. I rewrote it in Python, then rewrote it using object oriented programming, then rewrite it again as a library. It was my first taste of coding outside the academic environment and I was hooked.

## Details

This library takes advantage of the scripting functionality of AutoCAD using `.scr` files. Nearly every function in AutoCAD can be completed via the command line including adding and deleting layers, creating text, drawing lines and changing colours.

Common AutoCAD objects are represented as Python classes with some additional functionality added and a method called `ACAD` that returns an AutoCAD command string. For instance:

```python
from autocad.geometry import Point

pnt = Point(3,4)
pnt.ACAD() # _.POINT _NON 3,4
```

Users of this library create the points, lines, etc. that they need for their drawing and add them to a script file. That script file can then be run by AutoCAD to draw those objects.

## Justification

AutoCAD does have a substantial amount of functionality for linking data sources to drawings. However, unless it is run on a supercomputer these these data links drastically slow down the program and in some cases make it completely unusable.

Using a script that is run once and produces simple geometry saves a great deal of complexity in drawing files and allows for a better user experience. Although it does mean that if the data changes the script must be re-run.

## Plans

I intend to clean up the code even further and create detailed documentation then publish on `pip` and `conda` for others to enjoy.
