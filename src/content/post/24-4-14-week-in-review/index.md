---
title: "Week In Review: 4/14/24"
description: "git switch ai-news-and-guides-galore-with-interesting-releases"
publishDate: "14 Apr 2024"
coverImage:
  src: "./wilderness.jpg"
  alt: "Image by Kaskar 537 from Pixabay"
tags:
  [
    "pidock",
    "DuckDuckGo",
    "RightToRepair",
    "ai&copyright",
    "butternutai",
    "opentofu",
    "GitGuide",
    "terraform",
    "chips&ai",
    "GitGame",
    "GitErrors",
    "BYDCost",
    "shell",
    "AwsTfTest",
    "wordpress",
    "wix",
    "Beeper",
    "Sysdig",
    "K8sReleases",
    "gamification",
    "kyverno",
    "cobol",
    "catppuchin",
    "nix",
    "vulnerabilities",
    "operators",
    "caching",
    "groq",
    "ethics",
    "ai",
  ]
draft: false
updatedDate: "14 Apr 2024"
---

**Things That Caught My Eye**

1. [DuckDuckGo Fights Data Brokers](#duckduckgo-vs-data-brokers)
1. [US House Considering Copyright Mentions in AI](#copyright-mentions)
1. [Apple Forced to Allow Repairs](#apple-forced-to-share-repair-responsiblities)
1. [BYD Pressures Automakers](#byd-pressure-continues)
1. [Groq goes SaaS](#groq-hardware-supplier-no-longer)
1. [Making Chips: No Experience Required?...](#speaking-of-chips)
1. [Software Fragility](#fragile-handle-with-care)
1. [Butternut AI... Wix on Steroids?](#butternut-ai-et-tu-wix)
1. [Wordpress Buys Beeper](#beeper-purchased)
1. [RaspberryPi Laptop](#pidock)
1. [OpenTofu Strikes Back](#opentofu-strikes-back)
1. [git stash](#git-stash)
1. [Shell as a Source of Truth](#shell-guides)
1. [Terraform Updates](#terrraform-updates)
1. [K8s News](#k8s-news)

## &#x2728; Mental Bookmarks

### DuckDuckGo vs Data Brokers

DuckDuckGo now provides a [bundled service](https://spreadprivacy.com/meetprivacypro/) of VPN, PI removal, identity theft restoration! While I do not believe the data broker service is as extensive as [DeleteMe](https://joindeleteme.com/), these sort of resources are vitally needed in an age where privacy seems to be more of a privilege rather than a right.

### Copyright Mentions

The US House appears to be [thinking more about copyright](https://www.theregister.com/2024/04/10/congressional_bill_would_require_ai/)
not as a means to necessarily protect the holder, but to force visibility in AI.
While this feels more like a half-hearted step in the "right direction"... the
United States depressingly is nowhere close to [EU-type reforms](https://www.europarl.europa.eu/news/en/press-room/20240308IPR19015/artificial-intelligence-act-meps-adopt-landmark-law).

Meanwhile, the New York Times [recently published an article](https://www.nytimes.com/2024/04/06/technology/tech-giants-harvest-data-artificial-intelligence.html?ugrp=u&unlocked_article_code=1.i00.2gRB.J2qpf6PYyX6b&smid=url-share)
exposing big tech's unethical and legally dubious data harvesting practices.

### Apple Forced to Share Repair Responsiblities

[Ars Technica describes](https://arstechnica.com/gadgets/2024/04/apple-will-allow-reuse-of-iphone-parts-for-repairs-with-a-notable-catch/)
how Apple will now allow some forms of parts pairing, but they have been
incredibly cryptic about how and which devices will be accessible to easier
repairs outside of their ecosystem. iFixit CEO give a [great breakdown](https://www.ifixit.com/News/94127/apples-parts-pairing-rollback-doesnt-go-far-enough)
that is on my to-read list.

### BYD Pressure Continues

Chinese automaker, BYD, continues to [pressure United States car manufactures](https://www.teslarati.com/10000-byd-seagull-us-auto/)
who currently are continuing to refuse to compete with their bargain EV prices.
It will be interesting to see if pricing pressure will eventually impact US EVs.

### Groq Hardware Supplier No Longer

Groq has decidedly moved towards providing SaaS services for AI developers, and
is no longer in the business of selling custom AI chips.

> You get the sort of developer traction we’ve gotten, and people want to buy
> hardware, but we are no longer selling hardware, because why would we at this
> point?” Ross said. “It’s not a pivot—we always intended to have a cloud
> service, we just expected we would do both.

### Speaking of Chips

In two weeks an [engineer with 0 experience](https://www.tomshardware.com/pc-components/cpus/engineer-creates-cpu-from-scratch-in-two-weeks-begins-work-on-gpus)
in chip-making, built a computer chip using
[AI software specialized for chip manufacturing](https://www.tomshardware.com/news/ai-tools-take-chip-design-industry-by-storm-200-chips-tape-out).
This same engineer has already moved on to building a gpu &#x1F92F;.

### Fragile: Handle with Care

Coverage of xz's backdoor continues to unfold, and one [engineer describes](https://lunduke.locals.com/post/5477752/if-this-one-guy-got-hit-by-a-bus-the-worlds-software-would-fall-apart)
the perilous state of software maintanence. It's all fairly grim.

Similarly, another engineer [shared a conversation](https://ezali.substack.com/p/interviewing-my-mother-a-mainframe)
he had with his mother, a Cobol engineer, who helps keep a major banking system
from crumbling on a small and rapidly aging team.

### Butternut AI, et tu Wix?

[Butternut AI](https://v2.butternut.ai/#FAQ) is a SaaS service that asks its
users if they are ready to "build" the website of their "dream[s]". I perused
their FAQs and tried to figure out if there were options to self-host and run
the code on your own cloud instances after building said "website". With that
said, these low level details from a cursory glance, appear to be abstracted
away from the user... I immediately have questions (high level they definitely
revolve around PII, security, vulnerability management...) lol. Consequently, I
don't know if this is something I would ever take seriously. However, it caught
my eye though and looks super enticing!

### Beeper Purchased.

The owner of Wordpress has [acquired Beeper](https://arstechnica.com/gadgets/2024/04/wordpress-owner-acquires-beeper-giving-it-two-chat-apps-to-rule-them-all/)
and intends to integrate it into its offerings, this will be an interesting
development to watch as Beeper is known for being service agnostic.

### PiDock

I just want to build and own this [laptop-style raspberry pi kit](https://www.tomshardware.com/raspberry-pi/pidock-provides-raspberry-pi-400-with-laptop-style-housing-and-1080p-display)...
no news here &#x1F602;.

### OpenTofu Strikes Back

OpenTofu is defending its [feature parity techniques](https://opentofu.org/blog/our-response-to-hashicorps-cease-and-desist/),
and does not believe it has infringed on Terraform's copyright.

### git stash

I stumbled across a few git related resources that I want to dive into later:

- [The guide to Git I never had.](https://medium.com/@jake.page91/the-guide-to-git-i-never-had-a89048d4703a) by [Jake Page](https://medium.com/@jake.page91)
- [Oh My Git!](https://ohmygit.org/) by [bleeptrack](https://bleeptrack.de/) and
  [blinry](https://blinry.org/)... gives me [LearnGitBranching](https://github.com/pcottle/learnGitBranching)
  vibes, a tool I stumbled across when I was switching careers into software
  development.
- [Git Error Messages](https://jvns.ca/blog/2024/04/10/notes-on-git-error-messages/) by [Julia Evans](https://jvns.ca/about/)

### Shell Guides

Some more interesting articles, this time around shell. These articles certainly
scream K.I.S.S. to me, and I am always looking for more elegant approaches to
incorporate into my development practices:

- [my deployment platform is a shell script](https://j3s.sh/thought/my-deployment-platform-is-a-shell-script.html) by [Jes Olson](https://j3s.sh/about.html)
- [Shell History Is Your Best Productivity Tool](https://martinheinz.dev/blog/110) by [Martin Heinz](https://github.com/MartinHeinz)

### Terrraform Updates

Terraform has a [new minor release](https://www.hashicorp.com/blog/terraform-1-8-adds-provider-functions-for-aws-google-cloud-and-kubernetes)
worth checking out, and AWS has integrated more
[terraform testing functionality](https://aws.amazon.com/blogs/devops/terraform-ci-cd-and-testing-on-aws-with-the-new-terraform-test-framework/)
with its cloud platform.

### K8s News

Some more news related to K8s that caught my &#x1F441;:

- I learned about a purposely [insecure repo](https://github.com/latiotech/insecure-kubernetes-deployments)
  that can be used to proof out testing on insecure K8s deployments.
- A youtube video on [Mastering Kubernetes Testing with Kyverno Chainsaw](https://www.youtube.com/watch?v=hQJWGzogIiI)
- A deep dive on [Kubernetes Operators](https://faun.pub/the-kubernetes-operator-model-01756c247064) by [Ashwin Philip George](https://ashwinphilipgeorge.medium.com/)
- Sysdig has extensive K8s release notes (e.g. [1.27](https://sysdig.com/blog/kubernetes-1-27-whats-new/), [1.26](https://sysdig.com/blog/kubernetes-1-26-whats-new/)...)

### Guide to Caching w/ GitHub Actions

- [Cache is King: A guide for Docker layer caching in GitHub Actions](https://blacksmith.sh/blog/cache-is-king-a-guide-for-docker-layer-caching-in-github-actions) by Aditya Maru

### Catppuchin for Nix

- You can automagically add [Catppuchin](https://github.com/catppuccin/nix/tree/main)
  using Nix flakes, I tried it out and it works like a charm!
