'use strict';

var FS = require('fs'),
    BEM = require('bem'),
    Q = BEM.require('q');

exports.API_VER = 2;

exports.techMixin = {

    getBuildResultChunk: function(relPath, path) {
        return '\n$fn = include __DIR__ . "/' + relPath + '"; $fn($bh);';
    },

    getBhChunk : function() {
        return [
            '<?php',
            process.env.INCLUDE_PHP_BEM_BH === 'false' ? '' : 'require_once __DIR__ . "/../../vendor/php-bem-bh/index.php";',
            '$bh = new BEM\\BH();'
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
