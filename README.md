# Stub to start a new [BEM](https://bem.info) project

Project-stub is a template project repository used for BEM projects creation. It contains the minimal configuration files and folders you will need for quick start from scratch. 

There are two main BEM libraries are linked here by default:

* [bem-core](https://github.com/bem/bem-core)  
* [bem-components](https://github.com/bem/bem-components)

Just try and taste BEM!

## Installation requirements

- [Node.js](http://nodejs.org) is a platform built on Chrome's JavaScript runtime for easily building fast, scalable network applications.

## Installation

So, how easy is it to get started with BEM?  *Super easy*.

It's as easy as...

    git clone https://github.com/bem/project-stub.git -b bem-core my-bem-project
    cd my-bem-project
    npm install

## Usage

Now you can run any bem-tools commands from a `./node_modules/bem/bin/bem` directory.
To be able to run bem-tools commands without typing a full path to an executable file (node_modules/bem/bin/bem), use bem-cli npm package: 

`npm install -g bem-cli` or use an alternative method `export PATH=./node_modules/.bin:$PATH`

**Start the server:**

```bash
bem server # bem server -p 8080 -v info|silly|debug|verbose|warn|error
```

> **hint:** execute the above commands in your terminal

Now that `bem server ` is running, check it out:

    navigate to: http://localhost:8080/desktop.bundles/index/index.html

Stopping the server is also easy, pressing `Ctrl` + `C` while the terminal is your active window will stop the server.

**Add block:**

    bem create -l desktop.blocks -b newBlock

**Add page:**

    bem create -l desktop.bundles -b page

>  **hint:** you can add aliases for super easy use

<pre><code class="lasso">echo "alias 'bemblock'='bem create -l desktop.blocks -b'" >> ~/.bashrc
echo "alias 'bempage'='bem create -l desktop.bundles -b'" >> ~/.bashrc
</code></pre>

## Generator of BEM projects for Yeoman

This generator provides you the ability to get the base of BEM project in few minutes by answering the simple questions.
- [generator-bem-stub](https://en.bem.info/tools/bem/bem-stub/)

## Docs

- [Full stack quick start](https://en.bem.info/articles/start-with-project-stub/)
- [Tutorial for BEMJSON template-engine](https://en.bem.info/technology/bemjson/current/bemjson/)
- [Tutorial on BEMHTML](https://en.bem.info/libs/bem-core/2.0.0/bemhtml/reference/)
- [Tutorial on i-bem.js](https://en.bem.info/tutorials/bem-js-tutorial/)
- [JavaScript for BEM: main terms](https://en.bem.info/articles/bem-js-main-terms/)
- [Commands bem-tools](https://en.bem.info/tools/bem/bem-tools/commands/)

## Project-stub based projects

- [Creating BEM application on Leaflet and 2GIS API](https://en.bem.info/tutorials/firm-card-story/)
- [Creating a menu of geo objects collections with Yandex.Maps API and BEM](https://en.bem.info/tutorials/yamapsbem/)
- [SSSR (Social Services Search Robot)](https://github.com/bem/sssr) — study app with BEM full-stack

## Useful tools

- [bem-cli](https://en.bem.info/blog/bem-cli/) — run bem-tools locally
- [borschik](https://en.bem.info/tools/optimizers/borschik/) — borschik is a simple but powerful builder for text-based file formats

## Videos
- [BEM for JavaScript Talk on Camp JS](https://en.bem.info/talks/campjs-melbourne-2014/)

## Working under Windows environment

- [bemup-workshop-vagrant](https://github.com/dab/bemup-workshop-vagrant/blob/master/README.ru.md) — Provisions a clean VirtualBox Ubuntu server instance with all needed Node.js development tools 
