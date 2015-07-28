bh.match('total-amount', function (ctx) {
    ctx
        .js(true)
        .content(VAT(ctx.param('total')));
});
