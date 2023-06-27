---
layout: ../layouts/TechLayout.astro
title: "Cool Tech I Use"
---

Below you will find a non-exhaustive list of the tech I am (sometimes) proficient in or use on a (almost) daily basis. I will try to keep this list up to date as I find new cool stuff to learn or feel like I have progressed in a technology.

<div class="w-full">
  <img src="/assets/completed.svg" width="444" height="607" class="sm:w-1/2 mx-auto" alt="task completed">
</div>

I will also try to denote my skill level in each technology like so:

- 🚀 - Zoomin': I have mastered this technology and have used it to build production grade applications.
- 🛫 - Takin' off: I am confident in my abilities but there is still a lot to learn.
- 🚈 - On the rails: Getting a hang of it, a few more projects and I'll be ready to take off.

## Table of contents

## Frontend

> This is where my career started and the place I am most comfortable in.

<div class="w-full">
  <img src="/assets/react.svg" width="583" height="431" class="sm:w-1/2 mx-auto" alt="react framework">
</div>

### 🚀 React/Preact & Next.js

Needs no introduction, the most popular frontend framework out there that is going through an identity crisis at the moment. `React` was the first **big** framework I learned and has been with me ever since (I will never forget all the time I spent on optimizing that damn thing)

### 🛫 SolidJS

A new kid on the block, **blazingly fast** 🔥, `SolidJS` is in my eyes the framework `React` should've been! I've been following `SolidJS` for a few years now and I am very excited to see its future. Its ecosystem is still very small however compared to his larger brothers.

### 🛫 Astro

What is there not to love about `Astro`? To save us some time, I'll just straight up say this: nothing! After all the years with clunky tools such as `Gatsby` and older `NextJS`, `Astro` is truly a breath of fresh air.

### 🚀 React Native/Expo

Need a mobile app? `React Native` has you covered. With some smart coding, sharing code between your web and mobile app is a breeze. The `Expo` toolkit is also worth mentioning toolkit at it provides a great DX boost.

### 🚈 Svelte

`Svelte` caught my eye as a very easy to use framework that can be quickly iterated upon. For me at least however, this framework is far too magical as I prefer more control over the code I write. While I'm sure everything is possible, I haven't felt like doing a deep dive into `Svelte` just yet.

## Backend

> Isn't backend just like parsing and sending back `JSON`?

<div class="w-full">
  <img src="/assets/speed.svg" width="616" height="496" class="sm:w-1/2 mx-auto" alt="react framework">
</div>

### 🚀 NodeJS

For smaller projects, `node` is a great choice. While it will not win any performance awards, it allows you to code up a `whateverRPC`/`REST`/`GraphQL` API in no time. As a benefit, you can also share code between your clients and servers, such as types and validation schemas. By using `fastify` (even on top of `NestJS` for example), you can get some pretty reasonable performance out of a language that was supposedly created in 10 days.

### 🛫 Axum/Actix Web

The [techempower benchmark](https://www.techempower.com/benchmarks/#section=data-r21) speaks for itself, these guys are on another level. How does it feel to be able to process thousands of reqs/s on a tiny EC2 instance? Put one of these bad boys on your hot path and watch the carnage unfold. Yes, learning Rust is difficult, but it is worth it. Also, Rust loooves `gRPC` (`tonic`), what an unexpected powercouple!

### 🛫 PSQL/MySQL/Vitess

When it comes to app development, a DB is not a place to be experimenting. Data loss is no joke and using battle hardened tech such as the aforementioned is a good idea. Unless you have a very specific use case, there is not much that can go wrong when choosing a good old trusty RDB.

### 🚈 RabbitMQ/Kafka

I find this technology fascinating, however there have not yet been many opportunities for me to use it. Still, would love to learn more about asynchronous messaging and data processing, and how it can be used to build more loosely coupled and resilient systems.

## CI/CD, DevOps & Cloud

> Why is the build taking so goddamn long?

<div class="w-full">
  <img src="/assets/cloud.svg" width="672" height="669" class="sm:w-1/2 mx-auto" alt="react framework">
</div>

### 🚀 Gitlab CI/Github Actions

The ability to integrate your changes confidently is priceless.
A good CI workflow is from my experience one of the keys to _moving quickly and **not** breaking things_. A correctly setup CI pipeline is not a small part of this effort, being able to get fast and accurate feedback from it is crucial.

### 🛫 Kubernetes

The infamous Kubernetes - we all have a love-hate relationship with it but couldn't imagine being without it. As our applications get larger and larger, Kubernetes almost becomes a necessity (it just makes things so much easier).

### 🚈 Terraform/Pulumi

Provisioning resources in the cloud is always a pain for me. Luckily, IaC tools make this a much more enjoyable experience. Collocating resources required with the projects themselves also brings a ton of benefits and allows developers to manage resources themselves, reducing unnecessary bureaucracy. Need an S3 bucket? Write a few lines of code and you're done, the system will handle the rest.

## Misc

> I'm not sure where to put this stuff, but it's cool!

<div class="w-full">
  <img src="/assets/oss.svg" width="1028" height="599" class="sm:w-1/2 mx-auto" alt="hacker illustration">
</div>

### 🛫 Haskell

Everybody knows that a _monad is a monoid in the category of endofunctors_, what is it good for though? To be fair, the build system leaves a lot to be desired (`stack` is doing gods work in this space). The language itself however is a joy to work with, especially for use cases that are quite difficult to model in other more traditional languages (DSL parsers, content filters, property based testing...). FP patterns are very useful in other languages, think **errors-as-values**, **immutability**, **pure functions** and **ADTs**.

### 🚈 k6/xk6

How do I know how my system behaves under load? `k6` is a great tool that will test exactly that, providing us with an easy to use library for load testing. `k6` is not limited to just load tests however, **e2e** tests are also possible and are intuitive to write. Another great tool for this would be `playwright`.

### 🚀 Linux

I use Linux btw.
