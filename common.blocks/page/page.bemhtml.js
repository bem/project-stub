block('page')(
    js()(true),
    content()(function() {
        return [
            applyNext(),
            ' ',
            this.i18n('page', 'key')
        ];
    }),
    // replace '?.min.css' with '?.{lang}.min.css'
    elem('css').match(function() { return this.ctx.i18n; }).def()(function() {
        var url = this.ctx.url.split('.');
        url.splice(1, 0, this.i18n('page', 'lang'));

        return applyNext({ 'ctx.url': url.join('.') });
    }),
    // replace '?.min.js' with '?.{lang}.min.js'
    elem('js').match(function() { return this.ctx.i18n; }).def()(function() {
        var url = this.ctx.url.split('.');
        url.splice(1, 0, this.i18n('page', 'lang'));

        return applyNext({ 'ctx.url': url.join('.') });
    })
);
