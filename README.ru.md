# Как начать работать с проектом

Project-stub – это шаблонный репозиторий для создания БЭМ-проектов. Он содержит необходимый минимум конфигурационных файлов и директорий, который позволяет быстро развернуть проект с нуля.

В project-stub по умолчанию подключены основные БЭМ-библиотеки:

* [bem-core](https://ru.bem.info/libs/bem-core/)
* [bem-components](https://ru.bem.info/libs/bem-components/)

## Требования к установке

* [Node.js 0.12+](https://nodejs.org) – это программная платформа, основанная на языке JavaScript и позволяющая легко создавать быстрые и масштабируемые сетевые приложения.
* [Git Bash](https://git-for-windows.github.io/) – для пользователей операционной системы Windows.

**Важно** Пользователям Windows необходимо выполнять все команды в Git Bash. Убедитесь, что Git Bash запущен от имени администратора.

## Поддерживаемые браузеры

Список поддерживаемых браузеров зависит от версий библиотек [bem-core](https://ru.bem.info/libs/bem-core/current/#Поддерживаемые-браузеры) и [bem-components](https://ru.bem.info/libs/bem-components/current/#Поддерживаемые-браузеры).

**Важно:** Internet Explorer 8.0 не входит в перечень браузеров, поддерживаемых библиотеками по умолчанию. При необходимости можно [подключить IE8](https://ru.bem.info/libs/bem-components/current/#Поддержка-internet-explorer-8) в project-stub.

## Установка

Клонируем репозиторий и устанавливаем все необходимые зависимости:

```bash
git clone https://github.com/bem/project-stub.git --depth 1 my-bem-project
cd my-bem-project
npm install
```

**Важно:** Не используйте права суперпользователя (`root`) при установке npm- и bower-зависимостей. bower-зависимости ставятся при выполнении `npm postinstall` в директории `libs`.

## Практическое применение

Собрать проект можно с помощью [ENB](https://ru.bem.info/toolbox/enb/).

Вызов всех команд `ENB` возможен с помощью `./node_modules/.bin/enb`.

### Сборка проекта

```bash
./node_modules/.bin/enb make
```

Чтобы не указывать путь к исполняемому файлу (`./node_modules/.bin/enb`) используйте:

```bash
export PATH=./node_modules/.bin:$PATH
```

Теперь сборка доступна из любой точки проекта:

```bash
enb make
```

### Базовые команды ENB

Все команды необходимо выполнять в терминале локально.

#### Старт сервера

```bash
./node_modules/.bin/enb server
```

Команда `npm start` также запускает `enb server`, при этом нет необходимости указывать полный путь до `node_modules`.

```bash
npm start
```

На вашем компьютере запустился сервер для разработки. Чтобы проверить это, откройте в браузере [http://localhost:8080/desktop.bundles/index/index.html](http://localhost:8080/desktop.bundles/index/index.html).

Вы можете указать другой порт, если `8080` уже занят:

```bash
npm start -- --port=8181
```

#### Остановка сервера

Комбинация клавиш `Ctrl` + `C` или `⌘` + `C` (для MAC) в активном окне терминала остановит сервер.

#### Создание блока

Если вы планируете использовать `bem-tools` для создания блоков, вам необходимо установить дополнительные зависимости:

```bash
npm i ym --save-dev
```

После этого можно создавать блоки с помощью команды `bem create`:

```bash
bem create -l desktop.blocks -b newBlock
```

#### Создание страницы

```bash
bem create -l desktop.bundles -b page
```

## Полезные ссылки

* [Собираем статическую страницу на БЭМ](https://ru.bem.info/platform/tutorials/quick-start-static/)
* [Создаём свой проект на БЭМ](https://ru.bem.info/platform/tutorials/start-with-project-stub/)
* [Справочное руководство по BEMJSON](https://ru.bem.info/platform/bemjson/)
* [Руководство пользователя по BEMHTML](https://ru.bem.info/platform/bem-xjst/)
* [Пошаговое руководство по i-bem.js](https://ru.bem.info/platform/tutorials/i-bem/)

## Примеры проектов на основе project-stub

* [Мастер-класс: вы пишете БЭМ-проект, а мы подсказываем](https://github.com/bem/do-it-yourself-workshop)
* [SSSR (Social Services Search Robot)](https://github.com/bem/sssr) — учебное приложение на полном стеке БЭМ

## Видео

* [Автоматизация БЭМ](https://www.youtube.com/watch?v=-un-YYgU6Pg)
* [Мастер-класс: разрабатываем сайт с нуля на полном стеке БЭМ-технологий](https://ru.bem.info/talks/bemup-minsk-2014/#Мастер-класс:-разрабатываем-сайт-с-нуля-на-полном-стеке-БЭМ-технологий-—-Жека-Константинов,-Дима-Белицкий-и-Слава-Аристов)
* [Мастер-класс наоборот: вы пишете БЭМ-проект, а мы подсказываем](https://ru.bem.info/talks/bemup-spb-2014/#Мастер-класс-наоборот:-вы-пишете-БЭМ-проект,-а-мы-подсказываем-—-Евгений-Константинов,-Дима-Белицкий,-Яндекс)
* [Инструменты фронтенд-разработчика](https://ru.bem.info/talks/bemup-moscow-2014/#Инструменты-фронтенд-разработчика-—-Владимир-Гриненко)
