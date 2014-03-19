<?xml version="1.0" encoding="utf-8"?>
<xsl:stylesheet xmlns:xsl="http://www.w3.org/1999/XSL/Transform" version="1.0"
    xmlns:bem="http://bem.info"
    exclude-result-prefixes="bem"
    >

    <xsl:template match="*" mode="bem:block-attributes">
        <xsl:attribute name="class">
            <xsl:apply-templates select="." mode="bem:block-class-content"/>
        </xsl:attribute>
    </xsl:template>

    <xsl:template match="*" mode="bem:block-class-content">
        <xsl:variable name="name">
            <xsl:choose>
                <xsl:when test="@b">
                    <xsl:value-of select="concat(@b, '__', local-name())"/>
                </xsl:when>
                <xsl:when test="substring(local-name(), 2, 1) = '-'">
                    <xsl:value-of select="substring(local-name(), 3)"/>
                </xsl:when>
                <xsl:otherwise>
                    <xsl:value-of select="concat(local-name(ancestor::bem:*[substring(local-name(), 2, 1) = '-'][1]), '__', local-name())"/>
                </xsl:otherwise>
            </xsl:choose>
        </xsl:variable>
        <xsl:value-of select="$name"/>
        <!-- XXX: select="@bem:*" вернет все атрибуты -->
        <xsl:for-each select="@*[namespace-uri() = 'http://bem.info']">
            <xsl:value-of select="concat(' ', $name, '_', local-name(), '_', .)"/>
        </xsl:for-each>
        <xsl:for-each select="bem:mix/*">
            <xsl:text> </xsl:text>
            <xsl:apply-templates select="." mode="bem:block-class-content"/>
        </xsl:for-each>
        <xsl:if test="@bem:is-bem = 'yes'">
            <xsl:text> i-bem</xsl:text>
        </xsl:if>
        <xsl:if test="@class">
            <xsl:value-of select="concat(' ', @class)"/>
        </xsl:if>
    </xsl:template>

    <xsl:template match="bem:*" mode="bem:content">
        <xsl:apply-templates/>
    </xsl:template>

</xsl:stylesheet>
