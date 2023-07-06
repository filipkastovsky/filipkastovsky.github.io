---
title: Building maintainable UI with react-wrap
author: Filip Kastovsky
pubDatetime: 2021-06-21T12:24:29.124Z
postSlug: react-wrap
featured: false
draft: false
ogImage: /assets/react-wrap/og.webp
tags:
  - React
  - Components
  - Typescript
  - Frontend
description: Reusable and easy to maintain React components with `react-wrap`! In this article, we will explore the concepts of coupling, code reuse and how they reflect on the maintainability of a project at as it scales and how to combat the said problems.
---

![Thumbnail](/assets/react-wrap/og.webp)

## Table of contents

## The problem with tight coupling

It is very straight forward to create a stateful component using the react hooks API. In just a few lines of code, your component comes to life via a simple `useState` hook. As the requirements for the component change, you add another one, perhaps even an `useEffect`. Soon enough, your formerly simple input component needs to handle data fetching, autocompletion, user input validation and page navigation on submission. Implementing all the logic in this way right next to the UI layer is a road to disaster as complexity grows.

![Tight coupling](/assets/react-wrap/tight-coupling.webp)

> Hooks used in this fashion introduce **tight coupling**

Coupling is a concept of interdependency between parts of a system, in our case, between the logic and the UI layers. We can think of it in terms of how close the layers are to each other. Tightly coupled components prevent the reuse of logic, which is key in creating a maintainable framework.

**Our objective with each component is to separate these layers as far apart each other as possible.**

## View/Controller architecture

In the past, people have come up with multiple solutions to the problem of tight coupling, be it the original flux architecture, or in later iterations, redux, which is still quite popular today. Composing the UI has mostly been a matter of creating “dumb” presentational components and “smart” logical components which are used to hydrate the presentational layer. This way, each view is easily reusable and each logical component can be presented in a variety ways.

![View/Controller architecture](/assets/react-wrap/view-controller.webp)

> An example of a redux container, a smart component, mapping `redux` state and `actions` onto the `props` of `ViewComponent`

## Custom hooks

While it is entirely possible to separate logic and presentation with react hooks by themselves, it is often quite inconvenient to do so. Let’s assume the following interface for our presentation component and an implementation vaguely following the “smart” and “dumb” components guideline

![SearchView props](/assets/react-wrap/searchview-props.webp)

![SearchController|250x250](/assets/react-wrap/search-controller.webp)

> **Tight coupling** still persists to a certain degree

Our first instinct might be to build out a component in a way similar to the example above, but as we already had established why that is not a good idea, let’s look into ways to remedy the situation.

## HoCs / render props

Higher order components can still be a lifesaver when reusing code. By allowing ourselves to pass down whichever presentational component will conform to our interface, we essentially fulfilled our task of allowing code reuse.

![HoC](/assets/react-wrap/hoc.webp)
![Render props](/assets/react-wrap/renderprops.webp)

> But thats what all of us have been doing for many years now, how is it not good enough?

Until now we been using logic as a blanket term for everything our component “does”. But more often than not, components “do” much more than one thing on an elementary level. Our relatively straight-forward example needs to handle user interactions, data fetching, error handling and user input validations all while feeding the correct data to it’s dedicated presentational counterpart.

It is not very common that if we were to reuse the logic for `Search` somewhere else, we would use every single bit of it, perhaps, we might not even care about suggestions at all, that’s where we find limitations in the discussed patterns.

![Composition](/assets/react-wrap/composition.webp)

> … but that’s super inefficient and difficult to maintain properly

## Custom hooks to the rescue

Custom hooks are an alternative pattern for extracting component logic, you can learn more about them [here](https://legacy.reactjs.org/docs/hooks-custom.html). Splitting the logic by concern will yield us the following result:

![Custom hooks](/assets/react-wrap/custom-hooks.webp)

> Oh no! Our component has much more **reusable code** now, but is **tightly coupled** again!

## Introducing `react-wrap`

[react-wrap](https://www.npmjs.com/package/@atlasgroup/react-wrap) is a super slim utility which combines the decompositional power of custom hooks while maintaining the loose coupling of higher order components in a View/Controller architecture. Reusing anything becomes a breeze with unlimited scaling and ease-of-refactoring potential. Refactoring our component for `react-wrap` would look like this:

1. Extract all the logic into a seperate hook

![Use search](/assets/react-wrap/use-search.webp)

> `useSearch` handles all the logic needed for our Search component in a neat package

2. The only thing left for us to do is **wrap**!

![Wrap](/assets/react-wrap/wrap.webp)

> aaand voila!

Our now refactored `Search` is now conforming to the View/Controller architecture without any additional overhead and complexity of solutions such as `redux`.

## To wrap things up

We have explained the concepts of coupling, code reuse and how they reflect on the maintainability of a project at as it scales and how to combat the said problems. [react-wrap](https://www.npmjs.com/package/@atlasgroup/react-wrap) is production-ready, type-safe and thoroughly tested, even being used on multiple production environments at the time of publishing this article.

You can find more examples and flavours of `react-wrap` on our [github repo](https://github.com/atlasgroupcz/react-wrap) or in our [docs](https://atlasgroupcz.github.io/react-wrap/).

All contributions and feedback are welcome!
