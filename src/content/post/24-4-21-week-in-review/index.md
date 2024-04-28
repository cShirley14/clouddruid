---
title: "Week In Review"
description: "🎉 Leveling Up with my second K8s cert: CKA 🎉, Uwubernetes 😄, Useful Tools, and Cloud Tutorials."
publishDate: "21 Apr 2024"
coverImage:
  src: "./ship.jpg"
  alt: "Image by Peter Lindenau from Pixabay"
draft: false
updatedDate: "21 Apr 2024"
tags:
  [
    "CKA",
    "kubernetes",
    "operators",
    "attack graph",
    "seccomp",
    "Karpenter",
    "kubehound",
    "Vault",
    "TLDs",
    "AWS",
    "SLA",
    "SLO",
    "SLI",
    "http",
    "security headers",
    "cve",
    "nix-inspect",
    "keyboards",
    "markdowndown",
    "hauditor",
    "armosec",
    "LinuxFoundation",
  ]
---

**Things That Caught My Eye**

1. [Earning the CKA](#second-kubernetes-cert)
1. [uwu Kubernetes 1.30](#uwubernetes-130)
1. [K8s Operators](#k8s-operators)
1. [K8s Attack Graph Generator](#kubernetes-attack-graph)
1. [seccomp Deep Dive](#seccomp)
1. [Karpenter K8s Cost Management](#karpenter--cloudspend)
1. [K8s Vault Secrets Tutorial](#hcp-vault-secrets)
1. [53 New AWS TLDs](#route-53-new-aws-tlds)
1. [SLA/SLO/SLI Breakdown](#sla-vs-slo-vs-sli)
1. [CVE Notifier](#cve-notifier)
1. [Security Header Analyzer](#hauditor)
1. [nix-inspect](#nix-inspect)
1. [markdowndown](#MarkdownDown)
1. ["Gaming" Keyboard](#gaming-keyboard)

## &#x2728; Mental Bookmarks

### Second Kubernetes Cert

This past Friday I earned the Certified Kubernetes Administrator certification &#x1f389;. Studying for Kubernetes exams can sometimes feel like an exercise in patience. From the concentrated effort it takes to identify the correct hodgepodge of resources, to the tips, tricks, and encantations expected of you, there is a lot that goes into passing. Given my experiences, I think it would be nice to compile a running list of techniques and gotchas. So I think I will create a reach goal for myself to start a blog post with helpful strategies and tips. (Especially something I can go back to when I need to retake said exams &#x1f440;...)

### uwubernetes 1.30

I died when I saw the [new theme](https://kubernetes.io/blog/2024/04/17/kubernetes-v1-30-release/) of `1.30`! I absolutely love that the maintainers/contributors have a sense of humor and keep things light &#x1f601;. There appears to be a great deal of updates, and when the time comes I will certainly be checking out [Sysdig's latest breakdown](https://sysdig.com/blog/whats-new-in-kubernetes-1-30/) of `1.30`.

### K8s Operators

A recent blog on [K8s Operators](https://tech.licious.com/a-look-at-kubernetes-operator-implementation-at-licious-part-1-fb8f5a639df2) caught my attention. A little snippet from the article:
> Operators are the path to building truly cloud-native applications on Kubernetes by encoding operational knowledge and best practices into custom controllers. They allow you to extend the Kubernetes API with higher-level, domain-specific abstractions tailored to your applications.

### Kubernetes Attack Graph

Datadog's [Kubehound](https://github.com/DataDog/KubeHound) looks like a really
interesting way to discover vulnerabilities in your K8s infrastructure, so that
you can harden your policies and infrastructure as needed.

### seccomp

Armosec has a [multi-part deep dive into seccomp](https://www.armosec.io/blog/seccomp-internals-part-1/)
that I have on my to-read list; I love a good tutorial, and implementation
examples look fairly solid.

### Karpenter & Cloudspend

Labyrinth Labs published a [multi-part series](https://lablabs.io/part-1-karpenter-kubernetes-autoscaling-with-performance-and-efficiency/)
on their experience with Karpenter and its impact on performance and efficiency.

### HCP Vault Secrets

Hashicorp recently published an [extensive tutorial](https://www.hashicorp.com/blog/kubernetes-secrets-management-with-hcp-vault-secrets)
on syncing HCP Vault Secrets to Kubernetes with Vault Secrets Operator.

### Route 53 New AWS TLDs

AWS added support for [18 additional Top-Level Domains](https://aws.amazon.com/about-aws/whats-new/2024/04/amazon-route-53-additional-top-level-domains/),
of which my favorites included: `.beer` and `.fun`

### SLA vs. SLO vs. SLI

Checkly provides a comprehensive deep dive on what [SLA/SLO/SLI mean](https://www.checklyhq.com/blog/sla-slo-sli/),
how they differ, and how they are represented in the industry. Definitely
another article on my to-read list.

### CVE Notifier

This [CVE Notifier](https://github.com/dark-warlord14/CVENotifier) written in Go
is pretty awesome, it allows you to use keywords against vuldb and set up slack
notifications regarding impacted applications.

### hauditor

hauditor allows you to [analyze security headers](https://github.com/trap-bytes/hauditor)
returned by a web page and report dangerous configurations. This type of
alerting kind of reminds me of the warnings I get in protonmail regarding failed
domain auth requirements (which can lead to things like spoofing and improper
forwarding... the most recent offender from my inbox being The Linux Foundation
&#x1f625;).

### nix-inspect

[nix-inspect](https://github.com/bluskript/nix-inspect) provides an "Interactive tui for inspecting nix configs," building
on nix repl and written in Rust &#x1f980;. Another tool I think would be fun to
demo and blog about at some point.

### markdowndown

[MarkdownDown](https://markdowndown.vercel.app/) converts any webpage into a
clean markdown file with images downloaded. I'm sure there are some pretty
interesting use cases for this functionality.

### Gaming Keyboard

Tom's Hardware recently highlighted a keyboard that looks like an
[NES controller](https://www.tomshardware.com/peripherals/mechanical-keyboards/grab-this-cool-retro-console-inspired-keyboard-for-just-dollar83).
Not news but another fun modded keyboard to check out.
