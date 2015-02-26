# Как начать работать с проектом

[Project-stub](https://github.com/bem/project-stub) – это шаблонный репозиторий для создания БЭМ-проектов. Он содержит необходимый минимум конфигурационных файлов и папок, который позволяет быстро развернуть проект с нуля.
В project-stub по умолчанию подключены основные БЭМ-библиотеки:

* [bem-core](https://github.com/bem/bem-core)
* [bem-components](https://github.com/bem/bem-components)

Попробуй БЭМ на вкус!

## Требования к установке

* [Node.js 0.10+](http://nodejs.org) – это программная платформа, основанная на языке JavaScript и позволяющая легко создавать быстрые и масштабируемые сетевые приложения. Или [io.js](https://iojs.org/en/index.html), как альтернатива Node.js.
* [Git Bash](http://msysgit.github.io/) – для пользователей операционной системы Windows.

## Установка

Вы даже не представляете, насколько легко создать свой БЭМ-проект? *Очень легко*!

Начнем...

```
git clone https://github.com/bem/project-stub.git --depth 1 --branch v1.0.0 my-bem-project
cd my-bem-project
npm install  # Не используйте права суперпользователя (`root`) при установке npm- и bower-зависимостей.
```

bower-зависимости устанавливаются при выполнении npm postinstall в папку `libs`.

## Практическое применение

Сборка проекта возможна с помощью [ENB](https://bem.info/tools/bem/enb-bem-techs/) или [bem-tools](https://ru.bem.info/tools/bem/bem-tools/). Результаты сборки в обоих случаях одинаковы.

Вызов всех команд `enb` возможен из папки `node_modules/.bin/enb`, а команд `bem-tools` из `./node_modules/bem/bin/bem`.

### Сборка проекта с ENB

```bash
node_modules/.bin/enb make
```

Чтобы не указывать путь к исполняемому файлу (`node_modules/.bin/enb`) используйте:

```
export PATH=./node_modules/.bin:$PATH`
```

Теперь сборка доступна из любой точки проекта:

```
enb make
```

### Сборка проекта с bem-tools

```
./node_modules/bem/bin/bem make
```

Установите npm-пакет `bem-cli`, чтобы не указывать путь к исполняемому файлу (`./node_modules/bem/bin/bem`):

```
npm install -g bem-cli
```

Или используйте альтернативный метод:

```
export PATH=./node_modules/.bin:$PATH`
```
Теперь сборка доступна из любой точки проекта:

```
bem make
```

### Базовые команды для обоих сборщиков

> **Подсказка** все команды необходимо выполнять в терминале локально

Информация об основных командах для обоих сборщиков:

```
enb -h
```
и

```
bem -h
```

**Старт сервера с ENB**

```bash
node_modules/.bin/enb server
```

Команда `npm start` также запускает `enb server`, при этом нет необходимости указывать полный путь до `node_modules`.

```bash
npm start
```

**Старт сервера с bem-tools**

```bash
bem server
```

На вашем компьютере запустился сервер для разработки. Чтобы проверить это, откройте в браузере [http://localhost:8080/desktop.bundles/index/index.html](http://localhost:8080/desktop.bundles/index/index.html).

**Остановка сервера**

Комбинация клавиш `Ctrl` + `C` или `⌘` + `C` (для MAC) в активном окне терминала остановит сервер.

**Создание блока**

    bem create -l desktop.blocks -b newBlock

**Создание страницы**

    bem create -l desktop.bundles -b page

> **Совет** Вы можете еще больше упростить работу с сервером, прописав альтернативные имена:

<pre><code class="lasso">echo "alias 'bemblock'='bem create -l desktop.blocks -b'" >> ~/.bashrc
echo "alias 'bempage'='bem create -l desktop.bundles -b'" >> ~/.bashrc
</code></pre>

## Генератор БЭМ-проектов на Yeoman

`project-stub` – это универсальный проект-заготовка, покрывающий большинство стандартных задач БЭМ-проекта. Если вам необходимо создать оптимальную конфигурацию вашего проекта, воспользуйтесь инструментом [generator-bem-stub](https://ru.bem.info/tools/bem/bem-stub/).

* Видео [генератор БЭМ-проектов на Yeoman](https://ru.bem.info/talks/bemup-moscow-2014/#Генератор-БЭМ-проектов-на-Yeoman-—-Евгений-Гаврюшин)

## Полезные ссылки

* [Создаем свой проект на БЭМ](https://ru.bem.info/articles/start-with-project-stub/)
* [Собираем статическую страницу на БЭМ](https://ru.bem.info/tutorials/quick-start-static/)
* [Справочное руководство по BEMJSON](https://ru.bem.info/technology/bemjson/current/bemjson/)
* [Руководство пользователя по BEMHTML](https://ru.bem.info/libs/bem-core/current/bemhtml/reference/)
* [Пошаговое руководство по i-bem.js](https://ru.bem.info/tutorials/bem-js-tutorial/)
* [Команды bem-tools](https://ru.bem.info/tools/bem/bem-tools/commands/)

## Примеры проектов на основе project-stub

* [Создаем меню для показа коллекций геообъектов с API Яндекс.Карт и БЭМ](https://ru.bem.info/tutorials/yamapsbem/)
* [Создаем БЭМ-приложение на Leaflet и API 2GIS](https://ru.bem.info/tutorials/firm-card-story/)
* [Мастер-класс: вы пишете БЭМ-проект, а мы подсказываем](https://github.com/bem/do-it-yourself-workshop)
* [SSSR (Social Services Search Robot)](https://github.com/bem/sssr) — учебное приложение на полном стеке БЭМ

## Полезные инструменты

* [bem-cli](https://ru.bem.info/blog/bem-cli/) — запусти bem-tools локально
* [borschik](https://ru.bem.info/tools/optimizers/borschik/) — простой, но мощный сборщик файлов текстовых форматов

## Видео

* [Мастер-класс: разрабатываем сайт с нуля на полном стеке БЭМ-технологий](https://ru.bem.info/talks/bemup-minsk-2014/#Мастер-класс:-разрабатываем-сайт-с-нуля-на-полном-стеке-БЭМ-технологий-—-Жека-Константинов,-Дима-Белицкий-и-Слава-Аристов)
* [Мастер-класс наоборот: вы пишете БЭМ-проект, а мы подсказываем](https://ru.bem.info/talks/bemup-spb-2014/#Мастер-класс-наоборот:-вы-пишете-БЭМ-проект,-а-мы-подсказываем-—-Евгений-Константинов,-Дима-Белицкий,-Яндекс)
* [Инструменты фронтенд-разработчика](https://ru.bem.info/talks/bemup-moscow-2014/#Инструменты-фронтенд-разработчика-—-Владимир-Гриненко)

## Поднимаем окружение для разработки под Windows

* [bemup-workshop-vagrant](https://github.com/dab/bemup-workshop-vagrant/blob/master/README.ru.md) — Vagrant конфиг для установки виртуальной машины с Ubuntu сервером и предустановленными инструментами для разработки на Node.js
