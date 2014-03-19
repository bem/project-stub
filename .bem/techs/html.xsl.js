exports.baseTechPath = require.resolve('./xsl');

exports.techMixin = {

    getBuildSuffixesMap: function() {
        return {
            'html.xsl': ['xsl']
        };
    },

    xslAppend: function() {

        return [
            '',
            '<xsl:output',
            '   encoding="UTF-8"',
            '   method="html"',
            '   indent="no"',
            '   media-type="text/html"',
            '   omit-xml-declaration="yes"',
            '/>',
            '',
            '<xsl:template match="bem:page" xmlns:bem="http://bem.info">',
            '   <xsl:text disable-output-escaping="yes">&lt;!DOCTYPE html></xsl:text>',
            '   <xsl:apply-templates/>',
            '</xsl:template>'
        ].join('\n');

    }

};
