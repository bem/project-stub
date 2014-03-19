<?xml version="1.0" encoding="utf-8"?>
<xsl:stylesheet
    xmlns:xsl="http://www.w3.org/1999/XSL/Transform"
    xmlns:bem="http://bem.info"
    exclude-result-prefixes=" bem "
    version="1.0">

    <xsl:template match="bem:b-content">
        <div>
            <xsl:apply-templates select="." mode="bem:block-attributes"/>
            <xsl:apply-templates select="." mode="bem:content"/>
        </div>
    </xsl:template>

</xsl:stylesheet>
