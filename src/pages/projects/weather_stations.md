---
layout: ../../layouts/ProjectPage.astro
title: "Weather Station Constellation and Reporting"
tags:
  [
    "Python",
    "Cronjob",
    "Third-Party API",
    "Email Automation",
    "Linux",
    "Pandas",
  ]
links: []
---

## Background

While working on a remote construction project in Northern BC adverse weather events such as torrential rain and extreme cold caused substantial budget and schedule overages. As I was working for the contractor, they had to justify these overages to the client but struggled to do so do to the limited coverage of public weather stations in the remote area.

## Solution

I implemented a constellation of five internet-connected weather stations along with a Raspberry Pi server to record the weather along the construction project and produce a daily report. This report was distributed to upper management to inform them on their decisions for the day.

## Implementation

The weather stations were connected to [Weather Underground](https://www.wunderground.com/) for live data display and storage. The Raspberry Pi ran a Python script using a Cronjob that would download the data for the past couple days using the Weather Underground API and summarize it using `Pandas` in clean HTML tables, then distribute those tables via an email API.

## Outcome

As a result of this greatly enhanced weather data, my employer was able to get multi-million dollar change order requests approved.
