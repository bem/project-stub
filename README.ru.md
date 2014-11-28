# Как начать работать с проектом

[Project-stub](https://github.com/bem/project-stub) – это шаблонный репозиторий для создания БЭМ-проектов. Он содержит необходимый минимум конфигурационных файлов и папок, который позволяет быстро развернуть проект с нуля.  
В project-stub по умолчанию подключены основные БЭМ-библиотеки:   

* [bem-core](https://github.com/bem/bem-core)  
* [bem-components](https://github.com/bem/bem-components)  

Попробуй БЭМ на вкус!

## Требования к установке

* [Node.js](http://nodejs.org) – это программная платформа, основанная на языке JavaScript и позволяющая легко создавать быстрые и масштабируемые сетевые приложения.

## Установка

Вы даже не представляете, насколько легко создать свой БЭМ-проект? *Очень легко*!

Начнем...

    git clone https://github.com/bem/project-stub.git -b bem-core my-bem-project  
    cd my-bem-project      
    npm install  

## Практическое применение 

Теперь вызов всех команд [bem-tools](https://ru.bem.info/tools/bem/bem-tools/) возможен так `./node_modules/bem/bin/bem`. Чтоб каждый раз не указывать путь к исполняемому файлу (./node_modules/bem/bin/bem), необходимо установить npm-пакет bem-cli:

`npm install -g bem-cli` или использовать альтернативный метод `export PATH=./node_modules/.bin:$PATH`


### Базовые команды

**Старт сервера**

```bash
bem server # bem server -p 8080 -v info|silly|debug|verbose|warn|error
```

> **подсказка** все команды необходимо выполнять в терминале локально

На вашем компьютере запустился БЭМ-сервер, чтобы проверить это:

    Откройте в браузере http://localhost:8080/desktop.bundles/index/index.html

Остановить сервер также просто: комбинация клавиш `Ctrl` + `C` в активном окне терминала остановит сервер.

**Создание блока**  

    bem create -l desktop.blocks -b newBlock

**Создание страницы**

    bem create -l desktop.bundles -b page

> **совет** Вы можете еще больше упростить работу с сервером, прописав альтернативные имена:

<pre><code class="lasso">echo "alias 'bemblock'='bem create -l desktop.blocks -b'" >> ~/.bashrc
echo "alias 'bempage'='bem create -l desktop.bundles -b'" >> ~/.bashrc
</code></pre>

## Генератор БЭМ-проектов на Yeoman

Если вам необходимо изменить конфигурацию заготовки проекта — воспользуйтесь инструментом 
* [generator-bem-stub](https://ru.bem.info/tools/bem/bem-stub/)
* Видео [генератор БЭМ-проектов на Yeoman](https://ru.bem.info/talks/bemup-moscow-2014/#Генератор-БЭМ-проектов-на-Yeoman-—-Евгений-Гаврюшин)


## Полезные ссылки

* [Создаем свой проект на БЭМ](https://ru.bem.info/articles/start-with-project-stub/)  
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
