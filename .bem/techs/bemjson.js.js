'use strict';

var Template = require('bem/lib/template');

exports.API_VER = 2;

exports.techMixin = {

    getCreateResult : function(path, suffix, vars) {

        if (vars.opts && vars.opts.content) return vars.opts.content;

        return Template.process([
            "({",
            "    block: 'page',",
            "    title: '{{bemBlockName}}',",
            "    head: [",
            "        { elem: 'css', url: '_{{bemBlockName}}.css' }",
            "    ],",
            "    scripts: [{ elem: 'js', url: '_{{bemBlockName}}.js' }],",
            "    content: [",
            "       {",
            "           block: 'content',",
            "           content: [",
            "               'block content'",
            "           ]",
            "       }",
            "    ]",
            "})"], vars);
    }

};
