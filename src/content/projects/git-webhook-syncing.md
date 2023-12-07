---
title: Github Syncing Server
description: Simple Node server to be run on remote machines to sync a directory with Github
tags:
  - NodeJS
  - Javascript
  - Webhooks
  - Git

links: 
  - url: https://github.com/rjp301/git-hook-server
    type: source
date: 2023 06
draft: true
---

## Problem

While developing my [weather summary](/weather-stations) NodeJS script which runs on a remote linux server I found it difficult to keep my working directory and the production directory on the server in sync. I would have to log into the remote server and perform a git pull to deploy new code.

This was a particular issue because my client wished to be able to change some of the config files whenever needed, such as editing the mailing list or adding or removing a weather station. Having them log into the server to perform a git pull themselves would be too difficult.


## Solution

I created a simple NodeJS server that runs on the remote server and subscribes to GitHub Webhooks. A webhooks simply sends a POST request to the server when the repository is updated on GitHub. When the server recieves one of these requests it reads the repo name from the request and syncs that repo with GitHub. This overwrites any local changes of course, but in this case it is fine.

The server code is run using PM2 so as to always restart upon system reboot.

## Outcome
My client was able to update the config files on Github using the web interface and the changes would be automatically synced with the server. Additionally, I saved a lot of time while developing the app because the remote server always had the most up to date version of the code.