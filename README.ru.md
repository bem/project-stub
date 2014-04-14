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

Теперь вызов всех команд [bem-tools](http://ru.bem.info/tools/bem/bem-tools/) возможен так `./node_modules/bem/bin/bem`. Чтоб каждый раз не указывать путь к исполняемому файлу (./node_modules/bem/bin/bem), необходимо установить npm-пакет bem-cli:

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
```bash
echo "alias 'bemblock'='bem create -l desktop.blocks -b'" >> ~/.bashrc
echo "alias 'bempage'='bem create -l desktop.bundles -b'" >> ~/.bashrc
````

## Полезные статьи

* [Попробуй БЭМ на вкус](http://ru.bem.info/articles/start-with-project-stub/)  
* [Руководство пользователя по BEMHTML](http://ru.bem.info/libs/bem-core/2.0.0/bemhtml/reference/)  
* [Пошаговое руководство по bem-js](http://ru.bem.info/tutorials/bem-js-tutorial/)  
* [Команды bem-tools](http://ru.bem.info/tools/bem/bem-tools/commands/)
