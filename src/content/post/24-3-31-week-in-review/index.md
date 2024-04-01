---
title: "Week In Review: 3/31/24"
description: "News I found interesting over the course of the week."
publishDate: "31 Mar 2024"
tags:
  [
    "xz",
    "DuckDB",
    "MS Formatting",
    "chars",
    "wasm",
    "k8s",
    "ubuntu",
    "lts",
    "AI",
    "vulnerabilities",
    "OSS",
    "emotional intelligence",
    "Valkey",
    "Redis",
    "k8s cloud spend",
    "nix-to-vim",
    "AI-Mediated Racism",
    "negative leap second",
  ]
draft: false
coverImage:
  src: "./easter.jpg"
  alt: "Image by Silvia from Pixabay"
updatedDate: "31 Mar 2024"
---

## Weekly Tech Odyssey

In the vein of sharpening my technical acumen, I have decided to engage in the
praxis of reviewing the weekly news. Every now and again, I may share a
"timeless" podcast or post, which ignited my curiosity.

Given the elusive nature of time, this review may contain a simple list of news
items with or without a blurb in "HackerNews" fashion. However, when time
permits, the topics below may serve as a personal mental lodestar, offering
opportunities for later exploration and reflection.

## Now for the News in Review

**High Level Overview**

1. [DuckDB](#duckdb)
1. [Valkey](#valkey-the-new-redis)
1. [xz CVE-2024-3094](#xz-vulnerability)

**Things That Caught My Eye**

1. [MS Formatting](#ms-formatting)
1. [Special chars](#special-characters)
1. [k8s & wasm](#wasm-on-k8s)
1. [Ubuntu 12 yr lts](#ubuntu-12-years-lts)
1. [AI Not Encrypted](#ai-not-so-private)
1. [BYOLLM](#conversely-speaking-of-ai-😂)
1. [AI & Emotional Intelligence](#ai-and-emotional-intelligence)
1. [k8s & Cloudspend](#opencost)
1. [nix-ide & vim](#port-vscode-nix-ide-to-vim)
1. [AI & Racism](#ai-and-racism)
1. [The Earth is Slowing?](#climate-change-and-the-earths-orbit)
1. [Right to Repair](#right-to-repair)

### DuckDB

Principal Software Engineer, Paul Gross, recently hailed DuckDB as the
[de facto](https://www.pgrs.net/2024/03/21/duckdb-as-the-new-jq/) replacement
for jq.

- Takeaways:
  - DuckDB has [0 Dependencies](https://duckdb.org/why_duckdb#simple:~:text=DuckDB%20has%20no%20external%20dependencies%2C%20neither%20for%20compilation%20nor%20during%20run%2Dtime.).
  - DuckDB reads JSON files "directly into memory" enabling easy manipulation
    of json from the CLI.
  - There is some tricky syntax, but DuckDB is still comprehensible.
  - Allows for variegated output (json, table, etc).
  - DuckDB can read directly from a URL, not just a file.
- Notable Mentions:
  - > I love jq, but I find it hard to use. The syntax is super powerful, but
    > I have to study the docs anytime I want to do anything beyond just
    > selecting fields.
  - > The syntax is the same as the PostgreSQL JSON Functions...
  - > And I could choose to create tables and persist locally, but often I’m
    > just interrogating data and don’t need the persistence.

### Valkey: the "New Redis"

After Redis [announced](https://redis.com/blog/redis-adopts-dual-source-available-licensing/)
it was abandoning it's OSS (open source software) origins, the Linux
Foundation in collaboration with tech titans such as AWS, Google Cloud, Oracle,
Ericsson, and Snap Inc pivoted towards a new iteration of Redis called [Valkey](https://github.com/valkey-io/valkey).
This new fork will continue under an industry-supported [BSD 3-clause](https://www.tldrlegal.com/license/bsd-3-clause-license-revised)
license.

There were many reactions, of which I found [Momento's take](https://www.gomomento.com/blog/rip-redis-how-garantia-data-pulled-off-the-biggest-heist-in-open-source-history)
quite illuminating.

- Notable Mentions:
  - > The project has already assembled a technical leadership committee of
    > several former Redis contributors, and hundreds more community members
    > have voiced their intent to support Valkey. (The Linux Foundation)
  - > While Redis may have the ability and legal rights to shut down this
    > community, it is important to note that Redis did not create Redis.
    > (Momento)
  - > We were about to change our company name to RedisDB and even acquired the
    > domain redisdb.com for that purpose; however, respecting a request by
    > Salvatore Sanfillipo, the Redis creator, we decided to stick to Garantia
    > Data... A few months later in 2014, Garantia Data became Redis Labs.
    > (Momento)
  - > To date, the ElastiCache team has invested more than a thousand engineer
    > years in making Redis scale. (Momento)

### xz Vulnerability

Scrolling through my rss feed, I stumbled upon the xz vulnerability news. A
backdoor maliciously placed in a core piece of software used in most Linux-based
distributions. The more I scoured the internet for details about how I could
possibly be impacted, the more the magnitude of the CVE hit me. It reads like a
story straight out of [Darknet Diaries](https://darknetdiaries.com/)
(one of my favorite podcasts).

- Takeaways:

  - Hundreds of commits were made by a malicious actor in at least two major
    repos, [libarchive](https://github.com/libarchive/libarchive/commits?author=JiaT75)
    and [xz](https://github.com/tukaani-project), respectively.
  - The malicious actor tried to obfuscate vulnerability reporting in their
    [last commit](https://git.tukaani.org/?p=xz.git;a=commitdiff;h=af071ef7702debef4f1d324616a0137a5001c14c).
  - Masterfully hidden silent failures, can you spot the error in this [commit](https://git.tukaani.org/?p=xz.git;a=commitdiff;h=328c52da8a2bbb81307644efdb58db2c422d9ba7)?
  - Social engineering with puppet profiles.
  - [Taxed OSS maintainers](https://mastodon.social/@glyph/112180922900094371) with little to no support from big tech firms.
  - Patient 2 year attack by a potential nation-state actor, hidden behind vpns
    and a quite probable stolen identity.
  - A CVE noticed during solid engineering benchmarking analysis, but not on
    purpose. The internet will be forever grateful to [Andres Freund](https://mastodon.social/@AndresFreundTec/112180406142695845).
  - Community documentation & reporting:
    - [Evan Boehs (solid reporting!)](https://boehs.org/node/everything-i-know-about-the-xz-backdoor)
    - [Attack Breakdown by Gynvael Coldwind](https://gynvael.coldwind.pl/?id=782)
    - [Viusalization of the Outbreak by Thomas Roccia](https://infosec.exchange/@fr0gger/112189232773640259)
    - [NixOS Live Breakdown](https://discourse.nixos.org/t/cve-2024-3094-malicious-code-in-xz-5-6-0-and-5-6-1-tarballs/42405)
    - [Another Breakdown](https://gist.github.com/thesamesam/223949d5a074ebc3dce9ee78baad9e27)
    - [Debian Thread](https://bugs.debian.org/cgi-bin/bugreport.cgi?bug=1068024)
    - [Nix Pkgs Tracker](https://nixpk.gs/pr-tracker.html?pr=300028)

- Notable Mentions:
  - > I count a minimum of 750 commits or contributions to xz by Jia Tan, who
    > backdoored it. (Joey Hess)
  - > The first commits they make are not to xz, but they are deeply suspicious.
    > Specifically, they open a PR in libarchive... This commit does a little
    > more than it says. It replaces safe_fprint with an unsafe variant...
    > (Evan Boehs)
  - > I'd suggest reverting to 5.3.1. Bearing in mind that there were security
    > fixes after that point for ZDI-CAN-16587 that would need to be reapplied.
    > (Joey Hess)
  - > Having dpkg in that list means that such downgrade has to be planned
    > carefully. (Aurelien Jarno)
  - > Might be easier overall to spend that effort on a hard switch to zstd
    > instead. (Mark-Oliver Wolter)

## Bookmarks

### MS Formatting

Some things in Windows may [never change](https://arstechnica.com/gadgets/2024/03/windows-current-disk-formatting-ui-is-a-30-year-old-placeholder-from-windows-nt/)...
Definitely made me think about the old phrase "It's not a bug, it's a feature!"
Especially, given the fact that msft is incentivized to keep users in their
ecosystem, and not make it easy to reformat your drive to do other things &#x1f427;.

### Special Characters

I stumbled across an article reviewing the [origins of special characters](https://buttondown.email/hillelwayne/archive/why-do-regexes-use-and-as-line-anchors/)
in Regex. Regex is super powerful, useful, and can feel like an esoteric language
at times. I have only done a cursory glance of this article, but Hillel Wayne's
deep historical dive looks super fascinating!

### Wasm on K8s

I am sucker for a good tutorial, and a CNCF [community member](https://github.com/cr7258)
 published a [multi-part series](https://www.cncf.io/blog/2024/03/28/webassembly-on-kubernetes-the-practice-guide-part-02/)
on Wasm in k8s using Rust. I recently did something adjacent and high level
playing around with a wasm plugin, so this caught my eye as something to revisit
at a later date.

### Ubuntu 12 Years LTS

Given how everything these days is built to break, planned to eventually fail,
or designed to become obsolete, this article caught my eye. There is a catch though for the LTS, that being
a charge for businesses who desire to keep their versions as far back as `14.04`.
You can read more from [Linux-Magazine](https://www.linux-magazine.com/Online/News/Canonical-Bumps-LTS-Support-to-12-years).

### AI Not So Private

Definitely need to give this one a deeper read but [vulnerabilities like this](https://arstechnica.com/security/2024/03/hackers-can-read-private-ai-assistant-chats-even-though-theyre-encrypted/)
just goes in the proverbial bucket of AI is still an emerging field with some
businesses already engaging in questionable ethical practices. While that last
bit might be somewhat of a tangent, it goes without saying that this article is
a reminder to exercise caution with AI tools.

### Conversely, Speaking of AI &#x1F602;

In theory, I want to continue to dive deeper into AI tools, and the [intersection](https://github.com/continuedev/continue)
between open source software and AI intrigues me. #BringYourOwnLLM

### AI and Emotional Intelligence

I don't know much about [hume](https://demo.hume.ai/) and have not tested it
out. Not sure where I fall on this one, because it sounds like an oxymoron at
face value. I get a lot of dystopian vibes doing thought experiments in my head
about machines that are supposed to be able to read into my emotional state...
but I digress. I would like to hope that psychiatrists and therapists are
involved, and that this team is using an intersectional lens informed by
peer-reviewed and strongly tested sociological and philosophical perspectives.
However, I am highly skeptical. This is an area where diverse perspectives are
critical. I am fearful of what sort of decision-making products like this can
influence.

### OpenCost

An OSS k8s and cloud spend monitoring tool that is cloud-agnostic. See more on
their [GitHub page](https://github.com/opencost/opencost).

### Port vscode-nix-ide to vim

Nix recently highlighted this project. I love vscode, use vim plugins, and use
nix-ide, so [coc-nix](https://github.com/Freed-Wu/coc-nix) looks like something
worth checking out. Especially, if it keeps me in a terminal longer... one
day I'll figure out emacs... one day...

### AI and Racism

Researcher and MacArthur Fellow, [Dr. Tiera Tanksley](https://www.tieratanksley.com/),
explored the intersection of race and AI, something that has already had
deleterious effects for the Black community with respect to policing. Moreover,
as a former educator, I am interested in seeing what insights were revealed in
this [study](https://www.tieratanksley.com/_files/ugd/eda377_77c1dbe2a48a4ed199bd8101d5eac40e.pdf).

### Climate Change and The Earth's Orbit

The planet's orbit appears to be [slowing](https://www.npr.org/2024/03/30/1241674216/climate-change-time-negative-leap-second)
ever so slightly because of global warming &#x1F614;.

### Right to Repair!

I am still working on this podcast, ["We have a right to repair!"
with Kyle Wiens Founder and CEO at iFixit](https://changelog.com/podcast/582),
but I have learned so much already about the fight against planned obsolecsence
and the long road towards progress in improving consumer rights and fighting
industrial pollution.
