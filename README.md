# Welcome to the Clover Fork of Griddle, I'm sorry!

We do not have the desire to rewrite our Griddle-dependent code to be compatible
with the 1.x release of Griddle. So, we forked the 0.6.0 release of Griddle and
added the changes necessary to make it work with React 16.

If you are the unlucky soul that needs to make further changes to this fork and
bring them into MC, I am once again, sorry. But here's how you do it.

1. Clone this repo
2. Checkout the branch `0.6.0-with-react-16`
3. Make your changes to the files in `scripts/` folder
4. Run `npm install`
5. Run `grunt build`
6. Commit both the files in `scripts/` and the generated files
7. Push your changes to the `0.6.0-with-react-16` branch
8. In the `package.json` file of the `clover_frontend` repo, update the git SHA
   corresponding to `griddle-react` to be the commit that you just made.

# Griddle

## An ultra customizable datagrid component for React

[![Gitter](https://badges.gitter.im/JoinChat.svg)](https://gitter.im/DynamicTyped/Griddle?utm_source=badge&utm_medium=badge&utm_campaign=pr-badge&utm_content=badge)
[![Build Status](https://travis-ci.org/GriddleGriddle/Griddle.svg?branch=master)](https://travis-ci.org/GriddleGriddle/Griddle)

---

Please check out the
[documentation and examples](http://griddlegriddle.github.io/Griddle/).

TLDR: Griddle now has a customizable architecture that allows for one-off
customizations or reusable plugins. These customization options allow for
overriding everything from components, to internal datagrid state management,
and more.

---

To use Griddle:

`npm install griddle-react`

---

To run from source:

1. `npm install`
2. `npm run storybook`

---

### Issues:

If you run into an issue in Griddle please let us know through the issue
tracker. It is incredibly helpful if you create a failing test(s) and/or a
storybook story that demonstrates the issue as a pull request and reference this
pull request in the issue. To add a storybook story, navigate to
`/stories/index.js` and add a story to the `storiesOf('Bug fixes' ...)` section.

### Contributing:

Please feel free submit any bugs. Any questions should go in the
[Gitter chat](https://gitter.im/DynamicTyped/Griddle) channel or
[stackoverflow](http://stackoverflow.com/). Pull requests are welcome but if you
have an idea please post as an issue first to make sure everyone is on the
same-page (and to help avoid duplicate work). If you are looking to help out but
don't know where to start, please take a look at
[approved issues that don't have anyone assigned](https://github.com/GriddleGriddle/Griddle/issues?q=is%3Aopen+label%3Aapproved+no%3Aassignee).

We do most of our initial feature development in the
[Storybook](https://github.com/storybooks/react-storybook) stories contained in
this project. When you run `npm run storybook`, a web server is setup that
quickly provides access to Griddle in various states. All storybook stories are
currently in `/stories/index.js`

We would love any help at all but want to call out the following things:

* Help maintaining 0.x
* More tests - we have a number of tests in version 1.0 but not quite where we'd
  like it to be
* More plugins
