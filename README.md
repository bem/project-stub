# Stub to start a new BEM project

Project-stub is a template project repository used for BEM projects creation. It contains the minimal configuration files and folders you will need for quick start from scratch.

[![Build Status](https://travis-ci.org/bem/project-stub.svg?branch=master)](https://travis-ci.org/bem/project-stub)

There are two main BEM libraries are linked here by default:

* [bem-core](https://en.bem.info/libs/bem-core/)
* [bem-components](https://en.bem.info/libs/bem-components/)

## Installation requirements

* [Node.js 4+](https://nodejs.org) is a platform built on JavaScript runtime for easily building fast, scalable network applications.
* [Git Bash](https://git-for-windows.github.io/) if you use Windows OS.

**Note:** If your operating system is Windows, you must run the following commands in Git Bash with administrator rights. Make sure that you launch Git Bash as an administrator.

## Supported browsers

The list of supported browsers depends on the [bem-core](https://en.bem.info/libs/bem-core/current/#supported-browsers) and [bem-components](https://en.bem.info/libs/bem-components/current/#supported-browsers) library versions.

**Note:** Internet Explorer 8.0 is not supported by default. To support IE8 you must follow the [recomendations](https://en.bem.info/libs/bem-components/current/#support-for-internet-explorer-8).

## Installation

It's as easy as...

```bash
git clone https://github.com/bem/project-stub.git --depth 1 my-bem-project
cd my-bem-project
npm install
```

**Note:** Do not use `root` rights to install `npm` dependencies.

## Usage

You may use [ENB](https://en.bem.info/toolbox/enb/) or `gulp` to build the project.

You can run `enb` commands via `./node_modules/.bin/enb`.

### Build the project

```bash
./node_modules/.bin/enb make
```
or
```bash
./node_modules/.bin/gulp
```

To be able to run commands without typing a full path to an executable file (`./node_modules/.bin/enb`), use:

```bash
export PATH=./node_modules/.bin:$PATH
```

Now you can use `enb` or `gulp` from the root of your project.

```bash
enb make
```
or

```bash
gulp
```

### The basic commands

Execute the following commands in your terminal.

#### Start the dev server

```bash
./node_modules/.bin/enb server
```

You could use the `npm start` command to start the `enb server` without specifying the full path to the `node_modules`.

```bash
npm start
```

The development server is running. To check it out, navigate to [http://localhost:8080/desktop.bundles/index/index.html](http://localhost:8080/desktop.bundles/index/index.html).

You may also specify different port if `8080` is already taken by some other service:

```bash
npm start -- --port=8181
```

#### Stop the server

Press `Ctrl` + `C` while the terminal is your active window to stop the server.

#### Add a block

It is possible to create blocks with `bem create` command:

```bash
bem create new-block
```

#### Add a page

```bash
mkdir -p desktop.bundles/page
touch desktop.bundles/page/page.bemjson.js
```

And add following content:
```js
module.exports = {
    block: 'page',
    title: 'page',
    head: [
        { elem: 'css', url: 'page.min.css' }
    ],
    scripts: [{ elem: 'js', url: 'page.min.js' }],
    content: [
       {
           block: 'new-block',
           content: [
               'block content'
           ]
       }
    ]
};
```

## Docs

- [Static page quick-start](https://en.bem.info/platform/tutorials/quick-start-static/)
- [Starting your own BEM project](https://en.bem.info/platform/tutorials/start-with-project-stub/)
- [Tutorial for BEMJSON template-engine](https://en.bem.info/platform/bemjson/)
- [Tutorial on BEMHTML](https://en.bem.info/platform/bem-xjst/)
- [Tutorial on i-bem.js](https://en.bem.info/platform/tutorials/i-bem/)

## Project-stub based projects

- [SSSR (Social Services Search Robot)](https://github.com/bem/sssr) — study app with BEM full-stack

## Videos

- [BEM - Building 'em modular](https://www.youtube.com/watch?v=huQp7gr3WPE)
- [BEM for JavaScript Talk on Camp JS](https://en.bem.info/talks/campjs-melbourne-2014/)
