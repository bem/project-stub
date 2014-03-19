<?xml version="1.0" encoding="utf-8"?>
<xsl:stylesheet xmlns:xsl="http://www.w3.org/1999/XSL/Transform" version="1.0"
    xmlns:bem="http://bem.info"
    exclude-result-prefixes="bem"
    >

    <xsl:template match="bem:b-page">
        <html>
            <head>
                <meta http-equiv="X-UA-Compatible" content="IE=edge"/>
                <meta charset="utf-8"/>
                <title>
                    TODO
                </title>
                <script>(function(e,c){e[c]=e[c].replace(/(ua_js_)no/g,"$1yes");})(document.documentElement,"className");</script>
                <link rel="stylesheet" href="_index.css"/>
                <meta name="description" content="TODO"/>
            </head>
            <body>
                <xsl:apply-templates select="." mode="bem:block-attributes"/>
                <xsl:apply-templates select="." mode="bem:content"/>
                <script src="_index.js"></script>
            </body>
        </html>
    </xsl:template>

</xsl:stylesheet>
