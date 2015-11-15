# Как начать работать с проектом

[Project-stub](https://github.com/bem/project-stub) – это шаблонный репозиторий для создания БЭМ-проектов. Он содержит необходимый минимум конфигурационных файлов и папок, который позволяет быстро развернуть проект с нуля.
В project-stub по умолчанию подключены основные БЭМ-библиотеки:

* [bem-core](https://ru.bem.info/libs/bem-core/)
* [bem-components](https://ru.bem.info/libs/bem-components/)

## Требования к установке

* [Node.js 0.10+](http://nodejs.org) – это программная платформа, основанная на языке JavaScript и позволяющая легко создавать быстрые и масштабируемые сетевые приложения.
* [Git Bash](http://msysgit.github.io/) – для пользователей операционной системы Windows.

## Поддерживаемые браузеры

Список поддерживаемых браузеров зависит от версий библиотек [bem-core](https://ru.bem.info/libs/bem-core/current/#Поддерживаемые-браузеры) и [bem-components](https://ru.bem.info/libs/bem-components/current/#supported-browsers).

>**Важно** Internet Explorer 8.0 не входит в перечень браузеров, поддерживаемых библиотеками по умолчанию. При необходимости можно [подключить IE8](https://ru.bem.info/libs/bem-components/current/#Поддержка-internet-explorer-8) в project-stub или использовать [generator-bem-stub](https://ru.bem.info/tools/bem/bem-stub/) для создания оптимального конфигурационного файла вашего БЭМ-проекта.

## Установка

Вы даже не представляете, насколько легко создать свой БЭМ-проект — *Очень легко!*

Клонируем репозиторий и устанавливаем все необходимые зависимости:

```
git clone https://github.com/bem/project-stub.git --depth 1 --branch v1.3.2 my-bem-project
cd my-bem-project
npm install  # Не используйте права суперпользователя (`root`) при установке npm- и bower-зависимостей.
```

bower-зависимости автоматически устанавливаются при выполнении `npm postinstall` в папку `libs`.

## Практическое применение

Собрать проект можно с помощью [ENB](https://ru.bem.info/tools/bem/enb-bem-techs/) или [bem-tools](https://ru.bem.info/tools/bem/bem-tools/). Результаты сборки в обоих случаях одинаковы, т.к. `bem-tools` просто проксирует вызовы к `ENB`.

Вызов всех команд `enb` возможен из папки `node_modules/.bin/enb`, а команд `bem-tools` из `./node_modules/bem/bin/bem`.

### Сборка проекта

```bash
node_modules/.bin/enb make
```
либо
```
./node_modules/bem/bin/bem make
```

Чтобы не указывать путь к исполняемому файлу (`node_modules/.bin/enb`) используйте:

```
export PATH=./node_modules/.bin:$PATH
```

Теперь сборка доступна из любой точки проекта:

```
enb make
```

### Базовые команды для обоих сборщиков

>Все команды необходимо выполнять в терминале локально.

Информация об основных командах для обоих сборщиков:

```
enb -h
```
и

```
bem -h
```

**Старт сервера**

```bash
node_modules/.bin/enb server
```
либо
```bash
bem server
```

Команда `npm start` также запускает `enb server`, при этом нет необходимости указывать полный путь до `node_modules`.

```bash
npm start
```

На вашем компьютере запустился сервер для разработки. Чтобы проверить это, откройте в браузере `http://localhost:8080/desktop.bundles/index/index.html`.

**Остановка сервера**

Комбинация клавиш `Ctrl` + `C` или `⌘` + `C` (для MAC) в активном окне терминала остановит сервер.

**Создание блока**

```bash
bem create -l desktop.blocks -b newBlock
```

**Создание страницы**

```bash
bem create -l desktop.bundles -b page
```

>Можно упростить работу с сервером, прописав альтернативные имена:<br>
```bash
echo "alias 'bemblock'='bem create -l desktop.blocks -b'" >> ~/.bashrc
echo "alias 'bempage'='bem create -l desktop.bundles -b'" >> ~/.bashrc
```

## Генератор БЭМ-проектов на Yeoman

`project-stub` – это универсальный проект-заготовка, покрывающий большинство стандартных задач БЭМ-проекта. Если вам необходимо создать уникальную конфигурацию вашего проекта, воспользуйтесь инструментом [generator-bem-stub](https://ru.bem.info/tools/bem/bem-stub/).

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

* [borschik](https://ru.bem.info/tools/optimizers/borschik/) — простой, но мощный сборщик файлов текстовых форматов

## Видео

* [Мастер-класс: разрабатываем сайт с нуля на полном стеке БЭМ-технологий](https://ru.bem.info/talks/bemup-minsk-2014/#Мастер-класс:-разрабатываем-сайт-с-нуля-на-полном-стеке-БЭМ-технологий-—-Жека-Константинов,-Дима-Белицкий-и-Слава-Аристов)
* [Мастер-класс наоборот: вы пишете БЭМ-проект, а мы подсказываем](https://ru.bem.info/talks/bemup-spb-2014/#Мастер-класс-наоборот:-вы-пишете-БЭМ-проект,-а-мы-подсказываем-—-Евгений-Константинов,-Дима-Белицкий,-Яндекс)
* [Инструменты фронтенд-разработчика](https://ru.bem.info/talks/bemup-moscow-2014/#Инструменты-фронтенд-разработчика-—-Владимир-Гриненко)
