'use strict';

var FS = require('fs'),
    BEM = require('bem'),
    PATH = BEM.require('path'),
    Template = require('bem/lib/template'),
    bemUtil = require('bem/lib/util');

exports.API_VER = 2;

exports.techMixin = {

    getTemplate: function(path, suffix, vars) {
        return Template.process([
            "({",
            "    block: 'page',",
            "    title: '{{bemBlockName}}',",
            "    head: [",
            "        { elem: 'css', url: '_{{bemBlockName}}.css' }",
            "    ],",
            "    content: [",
            "        'block content',",
            "        { elem: 'js', url:'_{{bemBlockName}}.js' }",
            "    ]",
            "})"], vars);
    },

    getCreateResult: function(path, suffix, vars) {
        var basename = this.getPath(PATH.basename(path, '.' + suffix),
                                    'xml'),
            htmlPath = PATH.join(PATH.dirname(path), basename),
            html = bemUtil.isFile(htmlPath) ? FS.readFileSync(htmlPath, 'utf-8') : false,
            json;

        if (!html) return this.getTemplate(path, suffix, vars);

        try {
            json = convert(html);
        } catch(e) {
            console.log(convert(html));
            throw e;
        }

        return '(' + JSON.stringify(json, null, 4) + ')';
    },

    storeCreateResult: function(path, suffix, res, force) {
        bemUtil.mkdirs(PATH.dirname(path));
        return force?
            bemUtil.writeFile(path, res) :
            bemUtil.writeFileIfDiffers(path, res);
    },

    getDependencies: function() {
        return ['xml'];
    }

};

var htmlparser = require('htmlparser2');

// sample xml structure
// <bem:b-page>
//     <bem:b-header bem:mod="val" param="param-val"/>
//     <bem:b-content>
//         <bem:some-elem>
//             some text
//         </bem:some-elem>
//     </bem:b-content>
//     <bem:b-footer/>
// </bem:page>

var convert = function(html) {
    var bufArray = [],
        results = {};

    bufArray.last = function() {
        return this[this.length - 1];
    };

    var parser = new htmlparser.Parser({
        onopentag: function(tag, attrs) {
            var buf = {
                mods: {},
                attrs: {}
            };

            if (tag.indexOf('bem:b-') > -1) {
                buf.block = tag.replace('bem:b-', '');
            } else {
                buf.elem = tag.replace('bem:', '');;
            }

            // TODO: buf.mix

            Object.keys(attrs).forEach(function(param) {
                if (attrs[param].indexOf('bem:') > -1) {
                    buf.mods[param.replace('bem:', '')] = attrs.param;
                } else {
                    buf.attrs[param] = attrs.param;
                }
            });

            bufArray.push(buf);
        },
        onclosetag: function(tag) {
            var buf = bufArray.pop();
            if (bufArray.length === 0) {
                return results = buf;
            }
            var last = bufArray.last();
            if (!(last.content instanceof Array)) {
                last.content = [];
            }
            last.content.push(buf);
        },
        ontext: function(text) {
            if (text.match(/(^\n|^\n\s+$)/g)) return;

            var last = bufArray.last();
            if (!last) return;

            last.content = last.content || [];
            last.content.push(text);
        }
    });

    parser.write(html);
    parser.end();

    return results;
};

