/**
 * bh-php-test
 * ===========
 *
 * Собирает *bh.php*-файлы по deps'ам инклудами, сохраняет в виде `?.bh.php`.
 *
 * **Опции**
 *
 * * *String* **target** — Результирующий таргет. По умолчанию — `?.bh.php`.
 * * *String* **filesTarget** — files-таргет, на основе которого получается список исходных файлов
 *   (его предоставляет технология `files`). По умолчанию — `?.files`.
 * * *String* **sourceSuffixes** — суффиксы файлов, по которым строится `files`-таргет. По умолчанию — 'bh.php'.
 *
 * **Пример**
 *
 * ```javascript
 * nodeConfig.addTech(require('enb-bh-php'));
 */

module.exports = require('enb/lib/build-flow').create()
    .name('bh.php')
    .target('target', '?.bh.php')
    .useFileList('bh.php')
    .builder(function (sourceFiles) {
        var node = this.node;

        var bhChunk = [
            process.env.INCLUDE_PHP_BEM_BH === 'false' ? '' : '                \'require_once __DIR__ . "/../project-stub/vendor/php-bem-bh/index.php";\',',
            '                \'$bh = new BEM\\\\BH();\',',
            '                \'$bh->setOptions(["jsAttrName" => "data-bem", "jsAttrScheme" => "json"]);\''
        ].join('\n');

        var tmplIncludes = sourceFiles.map(function(file) {
            return '                \'$fn = include __DIR__ . "/' + node.relativePath(file.fullname).replace('../../', '') + '"; $fn($bh);\',';
        }).join('\n');

        return [
            "var spawn = require('child_process').spawn;",

            "module.exports = {",
            "    apply: function(bemjson, cb) {",
            "        bemjson = JSON.stringify(bemjson);",
            "        bemjson = bemjson.replace(/\\n/g, '').replace(/[\\\\\"']/g, '\\\\$&').replace(/\\u0000/g, '\\\\0')",
            "        var php = spawn('php'),",
            "            html = '',",
            "            errs = '',",
            "            code = [",
            "                '<?php',",
                             bhChunk + ",",
                             tmplIncludes,
            "                'echo $bh->apply(\"' + bemjson + '\");'",
            "            ].join('\\n');",

            "        php.stdout.on('data', function(data) {",
            "            html += data.toString();",
            "        });",

            "        php.stderr.on('data', function(data) {",
            "            errs += data.toString();",
            "        });",

            "        php.on('close', function(code) {",
            "            if (errs || code !== 0) {",
            "                console.log('php process exited with code ' + code + (errs ? '\\n' + errs : ''));",
            "                cb('php err code: ' + code + (errs ? '\\n' + errs : ''));",
            "            }",
            "            cb(null, html);",
            "        });",


            "        php.stdin.write(code);",
            "        php.stdin.end();",
            "    },",
            "    isAsync: true",
            "}"
        ].join('\n');

    })
    .createTech();
