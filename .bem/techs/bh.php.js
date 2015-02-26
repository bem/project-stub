'use strict';

var FS = require('fs'),
    BEM = require('bem'),
    Q = BEM.require('q'),
    Template = require('bem/lib/template');

exports.API_VER = 2;

exports.techMixin = {

    getCreateResult: function(path, suffix, vars) {
        vars.Selector = '"' + vars.BlockName +
            (vars.ElemName? '__' + vars.ElemName : '') +
            (vars.ModVal? '_' + vars.ModName + '_' + vars.ModVal : '') + '"';

        return Template.process([
            '<?php',
            'return function ($bh) {',
            ' $bh->match({{bemSelector}}, function ($ctx, $json){',
            ' });',
            '};'], vars);
    },

    getBuildResultChunk: function(relPath, path) {
      //Development build
      if(process.env.YENV !== 'production'){
        return '\n$fn = include __DIR__ . "/' + relPath + '"; $fn($bh);';
      }

      //production build
      var fileContent = FS.readFileSync(path).toString();
      var trimmed = fileContent.replace(/<\?php(\r\n|\n|\r)return/,"\n$tpl =").replace(/\n/,'');
      return "\n/*"+relPath+"*/\n"+trimmed+"$tpl($bh);\n";
    },

    getBhChunk : function() {
        return [
            '<?php',
            process.env.INCLUDE_PHP_BEM_BH === 'false' ? '' : 'require_once __DIR__ . "../../vendor/bem/bh/index.php";',
            '$bh = new BEM\\BH();',
            '$bh->setOptions(["jsAttrName" => "data-bem", "jsAttrScheme" => "json"]);'
        ].join('\n');
    },

    getBuildResult : function(files, suffix, output, opts) {
        return Q.all([
                this.getBhChunk(),
                this.__base.apply(this, arguments)
            ])
            .spread(function(bh, res) {
                return [bh].concat(res, '\n?>');
            });
    }
};
