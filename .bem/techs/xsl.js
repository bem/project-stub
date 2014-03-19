var BEM = require('bem'),
    Q = BEM.require('q'),
    Template = BEM.require('./template');

exports.API_VER = 2;

exports.techMixin = {

    getCreateResult: function(path, suffix, vars) {

        vars.Match = 'bem:' + vars.BlockName +
            (vars.ElemName? '/bem:' + vars.ElemName : '') +
            (vars.ModVal?
                '[@bem:' + vars.ModName + " = '" + vars.ModVal + "']" :
                (vars.ModName? '[@bem:' + vars.ModName + ']' : ''));

        var jsParams = !vars.ElemName? [
                '',
                '            <xsl:apply-templates select="." mode="bem:js-params"/>'
            ].join('\n') : '';

        return Template.process([
            '<?xml version="1.0" encoding="utf-8"?>',
            '<xsl:stylesheet',
            '    xmlns:xsl="http://www.w3.org/1999/XSL/Transform"',
            '    xmlns:bem="http://bem.info"',
            '    exclude-result-prefixes=" bem "',
            '    version="1.0">',
            '',
            '    <xsl:template match="{{bemMatch}}">',
            '        <div>',
            '            <xsl:apply-templates select="." mode="bem:block-attributes"/>' + jsParams,
            '            <xsl:apply-templates select="." mode="bem:content"/>',
            '        </div>',
            '    </xsl:template>',
            '',
            '</xsl:stylesheet>'], vars);

    },

    getBuildResult: function(files, suffix, output, opts) {

        var _this = this;
        return Q.all([
                this.__base.apply(this, arguments),
                this.xslPrepend(suffix, output, opts),
                this.xslAppend(suffix, output, opts)
            ])
            .spread(function(content, prepend, append) {
                return _this.xslStylesheet(prepend + content.join('') + append);
            });

    },

    getBuildResultChunk: function(relPath, path, suffix) {
        return '<xsl:import href="' + relPath + '"/>\n';
    },

    xslStylesheet: function(content) {

        return [
            '<?xml version="1.0" encoding="utf-8"?>',
            '<xsl:stylesheet xmlns:xsl="http://www.w3.org/1999/XSL/Transform" version="1.0">',
            '',
            content,
            '',
            '</xsl:stylesheet>',

        ].join('\n');

    },

    xslPrepend: function(suffix, output, opts) {
        return '';
    },

    xslAppend: function(suffix, output, opts) {
        return '';
    }
};
