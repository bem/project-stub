({
    mustDeps: { block: 'i-bem', elem: { elem: 'dom', mods: { init: 'auto' } } },
    shouldDeps: [
        { block: 'loader', mods: { type: 'js' } },
        'vow',
        'next-tick'
    ]
})
