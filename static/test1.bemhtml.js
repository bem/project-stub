function runtimeTemplates() {
    block('test1')(
        content()(function() {
            var ctx = this.ctx;

            return [
                '<h1>Test1</h1>',
                ctx.content,
            ];
        }),
        js()(function(){
            return { test : 'test1' };
        })
    );

}
