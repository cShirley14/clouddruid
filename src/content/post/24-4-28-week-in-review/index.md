---
title: "Week In Review"
description: "So there's a lot... The NixOS Foundation might be in turmoil,
              noncompetes are dead 👀, AI everywhere??, and other miscellaneous
              meanderings."
publishDate: "28 Apr 2024"
coverImage:
  src: "./terms.jpg"
  alt: "Image by Sergei Tokmakov, Esq. https://Terms.Law from Pixabay"
draft: false
updatedDate: "28 Apr 2024"
tags:
  [
    "noncompete",
    "IBM",
    "Hashicorp",
    "AI",
    "Llama 3",
    "vulnerabilities",
    "DuckDuckGo",
    "ChatGPT",
    "1.30",
    "Kubernetes",
    "Cosign",
    "Kyverno",
    "Vault",
    "k6",
    "self-host",
    "volumes",
    "read-only",
    "privilege escalation",
    "bash",
    "ports",
    "cicd",
    "ExplainShell",
    "latency",
    "franken-ui",
    "OSS",
    "UI",
    "framework-agnostic",
    "Framework",
    "Intel",
    "CPU",
    "vending machines",
    "Japan",
    "Fallout",
    "Excel",
    "quadratics",
    "burnout",
    "NixOS",
    "rift",
  ]
---

**Things That Caught My Eye**

1. [Legal](#legal-news-📜)
1. [AI](#ai-updates-🤖)
1. [Kubernetes](#kubernetes-🛳)
1. [Security](#security-🔐)
1. [DevOps](#devops-☁)
1. [Web Dev](#web-dev-🕸)
1. [Hardware](#hardware-💻)
1. [Randomness](#randomness-🌪)

## &#x2728; Mental Bookmarks

### Legal News &#x1F4DC;

- Noncompete agreements are [dead](https://www.washingtonpost.com/business/2024/04/23/ftc-noncompete-agreements/)!
  I definitely remember signing some strong legalese back when I was in ed-tech
  related to leaving for a competitor, it will be interesting to see how the
  industry adapts.
- IBM has [acquired Hashicorp](https://www.reuters.com/markets/deals/ibm-buy-hashicorp-64-billion-deal-expand-cloud-software-2024-04-24/).
  IBM has a variegated array of products and services, which makes me curious
  about the direction Hashicorp's products might take with respect to IBM's
  cloud initiatives.

### AI Updates &#x1F916;

- Ars Technica reported on the [embedding of AI](https://arstechnica.com/gadgets/2024/04/ai-marketing-hype-is-coming-for-your-favorite-gadgets/)
  into what feels like an increasingly unprecedented amount of products, many of
  which feel obtuse and entirely unnecessary. An old adage comes to mind:
  > If all you have is a hammer, everything looks like a nail.\
  > -- Abraham Maslow
- [Llama 3]() has been proposed as a superior competitor to ChatGPT, with
  [Wharton professor Ethan Mollick claiming](https://twitter.com/emollick/status/1781374611613155787):
  > There really is no reason anyone should be using free ChatGPT-3.5 anymore...
  > Llama 3 is much better & free.
- Speaking of ChatGPT, GPT-4 appears to be able to [exploit real vulnerabilities](https://www.theregister.com/2024/04/17/gpt4_can_exploit_real_vulnerabilities/),
  this sounds like a script-kiddie recipe for disaster.
- DuckDuckGo has an [AI Chat service](https://duckduckgo.com/?q=DuckDuckGo&ia=chat)!
- ChatGPT engineer, [Gergely Orosz](https://blog.pragmaticengineer.com/about/),
  discusses [how ChatGPT actually works](https://blog.pragmaticengineer.com/how-does-chatgpt-work/).

### Kubernetes &#x1F6F3;

- Kubernetes posted a [blog related to release `1.30`](https://kubernetes.io/blog/2024/04/26/multi-webhook-and-modular-authorization-made-much-easier/),
  with demos reviewing enhancements to the API server's authorization mechanisms
  and implementation of layered security policies.
- A [blog](https://angapov.medium.com/kubernetes-container-images-signing-using-cosign-kyverno-hashicorp-vault-and-gitlab-ci-c4e2041d1310)
  published by [Vasiliy Angapov](https://angapov.medium.com/) reviews ways to
  avoid running untrusted images by using OSS tooling like:
  - [Sigstore Cosign](https://docs.sigstore.dev/signing/quickstart/)
  - [Kyverno](https://kyverno.io/) (Which coincidentally had a [recent release](https://github.com/kyverno/kyverno/releases/tag/v1.12.0)
    with possible breaking changes, so take caution when upgrading on your
    clusters!)
  - [HashiCorp Vault](https://www.vaultproject.io/) (As we also know was just
    acquired by IBM!)
- DevOps engineer [Giannakopoulosj](https://medium.com/@giannakopoulosj)
  [reviewed](https://medium.com/@giannakopoulosj/utilize-k6-influxdb-and-grafana-for-single-or-distributed-testing-single-distributed-8c84c7cde948)
  popular load testing tool [k6](https://k6.io/) in conjunction with Grafana
  and influxdb.
- [Olaf Górski](https://www.linkedin.com/in/olafgorski/) [warns against excessive
  spending](https://grski.pl/self-host) when establishing a startup by forgoing
  the cloud and hosting your own infrastructure. Definitely food for thought.
- K8s `1.30` release means that read-only volumes are [finally and literally
  read-only](https://kubernetes.io/blog/2024/04/23/recursive-read-only-mounts/).

### Security &#x1F510;

- Z-Labs has a [Linux privilege escalation auditing tool](https://github.com/The-Z-Labs/linux-exploit-suggester)
  written in bash, which looks worth checking out.
- GitHub user [choupit0](https://github.com/choupit0) published a bash script
  called, [MassVulScan](https://github.com/choupit0/MassVulScan), which quickly
  identifies open network ports and associated vulnerabilities.

### DevOps &#x2601;

- The CD Foundation published a [comprehensive CI/CD report on the tech](https://cd.foundation/blog/2024/04/16/state-cicd-devops-tooling-adoption/)
  industry's DevOps Tooling Adoption.
- Linux Magazine [highlighted one of my favorite tools](https://www.linux-magazine.com/Online/Features/Parsing-man-pages-for-modern-users),
  [explainshell](https://explainshell.com/)! The article does a deep dive into
  its inner workings.

### Web Dev &#x1F578;

- Vercel published an overview of [latency numbers](https://vercel.com/blog/latency-numbers-every-web-developer-should-know)
  that every frontend developer should know. One might even argue, the qualifier
  on the type of developer isn't necessarily needed.
- [franken-ui](https://www.franken-ui.dev/), written in TypeScript, caught my
  attention for being an HTML-first, OSS UI components library based on Tailwind
  CSS. It is framework-agnostic with sleek designs!

### Hardware &#x1F4BB;

- Framework is [expanding](https://www.theverge.com/2024/4/23/24138475/framework-laptop-product-categories-new)...
  I just hope they do not lose sight of their laptop origins, and fix some
  [pre-existing issues](https://arstechnica.com/gadgets/2024/04/frameworks-software-and-firmware-have-been-a-mess-but-its-working-on-them/)
  related to users not being able to upgrade critical hardware components.
- Engineer [Adam Majmudar](https://adammaj.com/) created a [tutorial](https://github.com/adam-maj/tiny-gpu)
  that teaches you how "GPUs work from the ground up."
- Intel has [CPU-dispensing vending machines](https://www.tomshardware.com/pc-components/cpus/intel-cpu-dispensing-vending-machine-game-spotted-in-japan-one-user-got-a-core-i7-8700-for-dollar3)
  in Japan! i7-8700 for $3 anyone?

### Randomness &#x1f32A;

- Engineer, Dynamic Pear, created a [Fallout inspired video game in Excel](https://www.tomshardware.com/video-games/pc-gaming/fallout-inspired-game-runs-in-excel-a-spreadsheet-powered-wasteland-escape-from-your-daily-corporate-wasteland)!
  Sure you're working on "expense reports" &#x1F602;.
- I love professor Po-Shen Loh's enthusiasm for a more [mathematically elegant](https://www.youtube.com/watch?v=ZBalWWHYFQc)
  approach to solving quadratics!
- And burnout is no fun, but [this graph](https://www.instagram.com/p/C3nX569sD4W/)
  by psychologist, [Alf Lokkertsen](https://www.instagram.com/thepresentpsychologist/),
  feels super useful in helping oneself anecdotally identify signs!
- There has been a [rift](https://nixpkgs.news/) in the Nix community, and
  maintainers are beginning [to drop and leave](https://github.com/NixOS/nixpkgs/issues?q=label%3A%228.has%3A+maintainer+removal%22+is%3Aclosed)
  the project altogether. I have just caught wind of this and it all appears to
  be very disconcerting &#x1F625;.

## A final thought.
A friend posted this the other day, and I found it rather amusing:
![A pun showing an image of a Volkswagen Bug vehicle with the license plates: "feature".](./not_a_bug.jpg)
