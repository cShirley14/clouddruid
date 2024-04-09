---
title: "Week In Review: 4/7/24"
description: "So.Much.News. + AI setbacks (racism and continued intellectual property debates)"
publishDate: "7 Apr 2024"
coverImage:
  src: "./newspaper.jpg"
  alt: "Image by Markus Spiske from Pixabay"
tags:
  [
    "xzbot",
    "skopeo",
    "cloud trends",
    "perfomance",
    "ai",
    "monopolies",
    "censure",
    "cisa",
    "upskilling",
    "volunteering",
    "pcie 7",
    "nix",
    "NixOS",
    "kode vicious",
    "fx",
    "jnv",
    "sidecars",
    "observability",
    "cost",
    "reliability",
    "ditching k8s",
    "llms & bash",
    "audits",
    "OpenTofu",
    "self-hosted",
    "wiki",
  ]
draft: false
updatedDate: "8 Apr 2024"
---

**Things That Caught My Eye**

1. [Kode Vicious & AI](#kode-vicious--ai)
1. [xzbot](#🤖-xzbot)
1. [Music & AI](#music--ai)
1. [Copilot Produces Antisemtic Imagery](#copilot-predisposed-to-antisemitic-imagery)
1. [Ditching K8s for AI, Acorn's Story](#acorn-ditches-k8s)
1. [Copyright Infrigement by OpenTofu](#opentofus-questionable-forking)
1. [Faster Nix Indexing/Searching](#replits-nix-cli-utility-faster-indexing--searching)
1. [Skopeo Gets a Spotlight](#skopeo-in-the-spotlight)
1. [K8s Cloud Trends](#k8s-cloud-trends)
1. [Site Performance](#site-performance)
1. [Codesmells](#codesmells)
1. [K8s Ingress Rundown](#k8s-ingress-rundown)
1. [K8s Sidecar Configuration](#sidecars-are-ga-🚀)
1. [Debugging with Git](#debugging-with-git)
1. [Email Misconfigurations](#email-is-the-bane-of-many-orgs)
1. [John Stewart & Apple](#john-stewart-and-apple)
1. [CISA Upskilling & Volunteering](#cisa-upskilling--volunteering)
1. [PCIE Gen 7](#pcie-gen-7)
1. [fx](#fx-more-json-viewing)
1. [Observability & Cloudspend](#observability--cloudspend)
1. [Workloads & Reliability](#workloads--reliability)
1. [K8s Gateway API Today](#k8s-gateway-api-today)
1. [Google LLMs and Bash](#google-llms-and-bash)
1. [Security Tool Audit](#tigers-resurrection)
1. [Self-hosted Everything](#self-hosted-everything)
1. [Community-Led NixOS Wiki](#community-led-nixos-wiki)

## &#x2728; Mental Bookmarks

### Kode Vicious & AI

Kode Vicious shares [prudent insights](https://cacm.acm.org/opinion/is-there-another-system)
regarding automation, AI, tech hype cycles, and how it relates to engineering
roles writ large.

### &#x1F916; xzbot

There have been a great deal of breakdowns, but this was the [first demo](https://github.com/amlweems/xzbot)
I have seen that attempts to make the exploit accessible to script kiddies. The
repo's description speaks for itself:

> notes, honeypot, and exploit demo for the xz backdoor (CVE-2024-3094)

### Music & AI

Given that authors and artists have seemingly already lost this fight, I am
curious if a [block of wealthy musicians](https://artistrightsnow.medium.com/200-artists-urge-tech-platforms-stop-devaluing-music-559fb109bbac)
will be able to combat AI training on their music. Time will tell I suppose...

### Copilot Predisposed to Antisemitic Imagery

AI, but more specifically [Copilot](https://www.tomshardware.com/tech-industry/artificial-intelligence/microsofts-copilot-image-tool-generates-ugly-jewish-stereotypes)
this time, continues to show the world that it is trained on some of the ugliest
corners of the internet, trolls, and racists behind keyboards.

### Acorn Ditches K8s

Acorn Labs has ditched K8s and adopted it's own homebrewed tool [GPTScript](https://github.com/gptscript-ai/gptscript),
full stop. GPTScript is open source and automates interactions with LLMs (i.e.
OpenAI). [FossForce](https://fossforce.com/2024/03/why-acorn-labs-turned-on-a-dime-and-shifted-from-kubernetes-to-ai)
describes how Acorn Labs, led by CEO Sheng Liang, whose tenure includes
co-founder and CEO of Rancher and President of Engineering at Suse, used to be
a Kubernetes-based SaaS offering, but now has made a 180 degree turn towards
interfacing with OpenAI. OpenAI runs on Kubernetes and Acorn Labs has strong
Kubernetes ties, but abstracting away the details appears to be the primary
goal.

### OpenTofu's Questionable Forking

OpenTofu was potentially [caught copy-pasting](https://www.infoworld.com/article/3714980/opentofu-may-be-showing-us-the-wrong-way-to-fork.html)
Terraform code and changing the license.

### Replit's Nix CLI Utility: Faster Indexing & Searching

Replit [announced](https://blog.replit.com/nixpkgs-search) the development of a
cli utility, [rippkgs](https://github.com/replit/rippkgs) that speeds up
indexing and searching Nix expressions and is written in Rust &#x1F980;.

### Skopeo in the Spotlight

[Skopeo](https://github.com/containers/skopeo) has been around for a while but
was recently highlighted in my newsfeed. It is a tool from the Containers
project, famous for tools like Podman. The shout-out highlighted features such
as being daemonless, not needing root access, and positioning itself as being
container platform agnostic.

### K8s Cloud Trends

K8s legend Kelsey Hightower and Alex Saroyan [review](https://www.cncf.io/blog/2024/03/28/the-2024-trends-on-cloud-computing-by-kelsey-hightower-and-alex-saroyan/)
emerging trends they see in the ever-evolving cloud space.

### Site Performance

Engineer Alex Xu is always trending, rightfully so, for their relatable and
digestible graphics, and recently a [post on website performance](https://twitter.com/alexxubyte/status/1769748487317651962)
began to surge in popularity. This immediately made me think of tools like
Google's Pagespeed which strongly mirrors this graphics performance metrics.

### Codesmells

A [useful guide](https://maxicontieri.substack.com/p/how-to-find-the-stinky-parts-of-your-code-fa8df47fc39c)
by Maximiliano Contieri covering a variety of code smells with detailed examples
in comprehensible snippets.

### K8s Ingress Rundown

I came across this [deep dive](https://overcast.blog/kubernetes-ingress-controllers-and-ingress-resources-a-practical-guide-7a709dec3e4b)
on a variety of aspects regarding Ingress configuration and usage. I am
especially curious to check this out given that I will be sitting for the CKA
exam soon &#x1F38A;.

### SideCars are GA &#x1F680;

With SideCars being a built-in part of Kubernetes now, it feels more important
than ever to understand [proper configuration](https://medium.com/teamsnap-engineering/properly-running-kubernetes-jobs-with-sidecars-in-2024-k8s-1-28-ad9b51d17d50).

### Debugging with Git

This [review](https://lucasoshiro.github.io/posts-en/2023-02-13-git-debug)
of tips and tricks with Git looks especially interesting, with topics around
grep, blame, log, and bisect.

### Email is the Bane of Many Orgs

David Strom [reviews](https://www.darkreading.com/cloud-security/cloud-email-filtering-bypass-attack)
how researchers discovered that they could bypass cloud email filtering for a
whopping 80% of major domains due to misconfiguration.

### John Stewart and Apple

John Stewart [shared](https://arstechnica.com/gadgets/2024/04/apple-wouldnt-let-jon-stewart-interview-ftc-chair-lina-khan-tv-host-claims/)
how he could not interview FTC leaders because of Apple. The move strikes as an
incredibly monopolistic power-play to prevent consumers from understanding
Apple's legal battles with the government.

### CISA Upskilling & Volunteering

CISA recently shared a number of [upskilling resources](https://www.cisa.gov/audiences/high-risk-communities/projectupskill),
a [high level overview](https://www.cisa.gov/audiences/high-risk-communities/cybersecurity-resources-high-risk-communities),
and [volunteering opportunities](https://www.cisa.gov/audiences/high-risk-communities/cybervolunteerresourcecenter/cyber-volunteer-programs-region-7)
to help bolster our nations cyber security posture.

### PCIe Gen 7

[PCIe Gen 7](https://www.tomshardware.com/pc-components/motherboards/full-draft-of-pcie-gen-7-spec-is-now-available-for-members-to-review-on-track-for-full-release-in-2025)
is on track to be released in 2025, which simultaneously made me
think of my long-neglected [PC Building Simulator](https://store.steampowered.com/app/621060/PC_Building_Simulator/)
video game on steam... I need to have more fun and play my games &#x1F602;.

### fx: More JSON Viewing

[fx](https://github.com/antonmedv/fx) reminds me of [jnv](https://github.com/ynqa/jnv),
a tool I learned about recently written in rust. fx is written and Go and seems
to have decent interfacing options.

### Observability & Cloudspend

On my to-read list: ["Why is Observability so Expensive?"](https://mattklein123.dev/2024/04/03/observability-cost-crisis/)

### Workloads & Reliability

Fairwinds engineer, Joe Pelletier, recently reviewed [latest trends in workload reliability](https://www.cncf.io/blog/2024/04/03/a-2024-k8s-benchmark-report-the-latest-trends-in-workload-reliability/)
and was highlighted by CNCF.

### K8s Gateway API Today

A walk down memory lane regarding the evolution of [K8s Gateway API](https://cloudnativenow.com/features/the-evolution-of-the-kubernetes-gateway-api/).

### Google LLMs and Bash

A [bash cli tool](https://github.com/wgilreath/palmshell) as an interface with
Google LLMs.

### Tiger's Resurrection

A [Unix security audit and intrusion detection tool](https://www.nongnu.org/tiger/)
has risen back into prominence as a powerful security linux tool, Linux
Magazine's take looks like a [worthwhile read](https://www.linux-magazine.com/Issues/2024/282/Tiger-Tiger-Burning-Bright).

### Self-hosted Everything

A [compendium of self-hosted resources](https://selfh.st/apps/) caught my eye.

### Community-Led NixOS Wiki

Last but certainly not least, I am eager to see how recently released NixOS's
[wiki project](https://wiki.nixos.org/wiki/NixOS_Wiki) develops, as NixOS is
notorious for sometimes cryptic and incomplete documentation.
