({
    shouldDeps : [
        { block : 'popup', mods : { theme : 'menu' } },
        {
            include : false,
            mods : { switcher : 'link' },
            shouldDeps : { block : 'link', mod : 'theme', val : 'menu' }
        },
        {
            include : false,
            mods : { switcher : 'button' },
            shouldDeps : { block : 'button', mod : 'theme', val : 'menu' }
        }
    ]
})
