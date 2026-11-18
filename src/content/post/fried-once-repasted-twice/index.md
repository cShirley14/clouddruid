---
title: "Fried Once, Repasted Twice"
publishDate: "17 November 2026"
description: "Cleaning out five years of dust and reapplying thermal paste on my HP Omen 15, and what DIY laptop maintenance taught me about repair and longevity."
tags: ["hardware", "diy", "laptop", "maintenance"]
draft: true
---

**A Utilitarian Appliance.**

I once fried a motherboard back in 2021 after plugging it into an old hotel room outlet; I learned a couple of things from that experience, one of those things being to always plug in my battery pack and see what happens before connecting my laptop. As traumatic as that experience was, it led to me purchasing my current HP Omen 15 (15-EN0023DX) because it had decent specs and I could complete software projects on it without issue… not to mention a video game or two.

It’s been about 5 years, since then and I have literally spent my whole entire tech career on this machine. It has seen my growth from learning what Linux is to dual-booting into NixOS, and adding various customizations. It’s hard not to become pretty attached to a machine after growing and learning so much. However, in the back of my mind I always knew there was a ticking time bomb of some sort (and hopefully not hotel-electro-pocalpyse 2 lol).

Before I became serious about I.T., like most folks, I have experienced my share of irreparable machines. Components go, things short, capacitors rust, HP is not necessarily known for its longevity 😂, and generally I figured something would get me “sooner rather than later”. I came into the field around my late 20s/early 30s; and if I have learned anything, exposure and discovery can make a world of difference in how you interact with the world around you.  As a child, I was deathly afraid of damaging expensive devices we had in our home, and so “tinkering” wasn’t even a figment of my imagination. This paired with my high school’s “I.T.” class being an intro to Word course where we knew more than the business teacher, I was truly a statistic of my environment at the time. Therefore, things like DIY, robotics, and makers projects were not on my radar.

As I grew and learned about electronics, I became more interested in Maker’s projects and bought a raspeberry pi before they were no longer accessible. This was my first exposure to electronics and inspired me to start listening to podcasts where the hosts sometimes opined about the Right to Repair and planned obsalecense. This growing exposure has naturally heightened my “spidey senses” around  general electronic issues which brought me to the reason this article exists. One day I realized the fans on my laptop spinning profusely was not normal, especially if as it was sitting idle, and it dawned on me that I should probably take a look into why that was happening 😅. A few Googlefu sessions later I realized that my 5 year old HP Omen 15 might have dried caked up thermal paste that was no longer functional. Most of my EOL experiences with machines whether they were desktops or laptops were usually catastrophic failures like the aformenetioned motherboard being fried by a poorly wired hotel outlet, or closing an old Macbook and thinking it was safe in sleep mode in my college backpack. Previously, I kind of had an average consumer mindset that computers just didn’t “last,” and that I must brace myself for another eventual expensive purchase.

We all know companies love planned obsalesence and nobody talks about the maintenance tasks that are needed if you want to get the most life out of your laptop or PC. For me, as mentioned earlier; routine cleaning and reapplication of thermal paste or thermal sheets (if you are fancy and can source legit material), ended up being the a main contributor to excessive heating of the CPU and GPU dies. Through internet sleuthing I discovered an ifixit guide for a laptop similar to my own and numerous youtube videos which inspired me to complete this common DIY task.

## Safety First.

Given my trauma around frying motherboards the first thing I did was pick up an Antistatic Wrist Strap to complete this work. You have to make sure the metal plate inside the bracelet makes contact with your skin and the metal clip is securely attached with a metal frame that is grounded (iFixit’s guide).

<!-- [Image of bracelet] -->

## The Chassis.

The screws that needed to be removed in order to access the motherboard were quite tedious. However, after some persistence I eventually got them loose. I later would learn most things being disconnected or removed would also be an exercise in patience.

- Outer screws
<!-- [Image of closed Chassis] -->
- Prying sides open
<!-- [Image of pic from case] -->
<!-- [Bottom plate open] -->

## The Dangers of Power.

It is important to first disconnect the battery before beginning any real work. It was crazy difficult to detach and I had unscrew part of the battery and then uncomfortably wedge the connector from both sides alternating pulls; at one point I wasn’t sure if it was going to give but eventually it did and the battery wires thankfully stayed intact.

<!-- [Picture of motherboard arrow towards battery pack] -->
<!-- [Picture pointing towards screws needed to pull out connector] -->
<!-- [Picture of close up of the connector] -->
<!-- [Picture of removed connector & commentary on how challenging it was to initally pry open the battery pack after 5 years] -->

## Accessing the Dies.

The CPU and GPU dies are exposed and you must remove the screws in the numbered alternative pattern doing a few turns at a time to not disturb the balanced pressure with which the heatsink and thermalpads are placed against the various components. This also goes for reapplication in reverse, to get an even spred on the thermal paste, and so that you have adequate cooling.

Without going into to much detail 5 years of debris is fairly gnarly… let’s just say isopropyl alcohol, a tooth brush head, and q-tips went a long way in cleaning up my poorly neglected machine.

<!-- [Close up of the screws and numbering & alternating pattern] -->

## X Marks the Chip.

For this machine I went with Arctic’s MX-7 thermal paste and am fairly impressed; I have absolutely no complaints and am pleased at how performant things are under stress with tools like stress-ng and how quickly things cool after the fans engage with the new paste job.

<!-- [Description of cleaning of the paste & pic possibly?/explanation of fixing thermal pads] -->
<!-- [paste pattern & anecdote about first application being better] -->
