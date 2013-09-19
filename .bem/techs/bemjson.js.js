var Template = require('bem/lib/template');

exports.API_VER = 2;

exports.techMixin = {
    getCreateResult : function(path, suffix, vars) {
        return Template.process([
            "({",
            "    block: 'page',",
            "    title: '{{bemBlockName}}',",
            "    head: [",
            "        { elem: 'css', url: '_{{bemBlockName}}.css', ie: false },",
            "        { elem: 'css', url: '_{{bemBlockName}}', ie: true }",
            "    ],",
            "    content: [",
            "        'block content',",
            "        { elem: 'js', url:'_{{bemBlockName}}.js' }",
            "    ]",
            "})"], vars);
    }
};
