---
title: There are far worse things than repeating yourself
subtitle: The difference between duplicate code and duplicate intent.
date: 2020-02-14
tags: note
layout: note
---

If you write code for a living, you've probably heard the term "[Don't Repeat Yourself](https://en.wikipedia.org/wiki/Don%27t_repeat_yourself)" (DRY) at some point. The gospel of DRY has become fairly ubiquitous in the software world in the two decades since The Pragmatic Programmer first formalized the principle, and the high-level idea behind it seems sensible enough: if you need to do the same thing in two spots, write the code once and reference it in both places, as opposed to writing the same code twice. In other words, avoid duplicating code.

Being thoughtful about duplication can certainly help a good engineer produce modular, maintainable, testable code. But on the other hand, strict adherence to DRY can lead to some seriously incomprehensibility.

If you've worked in a large, active codebase, you've probably come across the primary symptom of this before: layers and layers of confusing wrappers with countless parameters and conditionals added over time as requirements change. I love the way Sandi Metz [describes the engine of this downward spiral](https://www.sandimetz.com/blog/2016/1/20/the-wrong-abstraction):

> Programmer B feels honor-bound to retain the existing abstraction, but since [it] isn't exactly the same for every case, they alter the code to take a parameter, and then add logic to conditionally do the right thing based on the value of that parameter.
>
> What was once a universal abstraction now behaves differently for different cases.

This process repeats until the original intent behind the code is nearly impossible for a human to determine. As Sandi spells out in the rest of her piece, the only sane way forward is back — untangling the code by undoing the abstractions and starting over.

To avoid coding myself into this situation, the rule I try to follow is this: only abstract away duplication when the intent behind the duplicate code is identical.

It's tragically easy to mistake implementation for intent. But just because two pieces of code seem to do the same thing at a certain point in time doesn't mean that the context and reasoning behind them is the same. Work to understand the "why" behind what's happening in each place before charging in with the abstraction hammer — not every similar-looking piece of code is a nail.

In [the words of a friend of mine](https://twitter.com/beamrider9/status/972233454531248129), "There are far worse things than repeating yourself."
