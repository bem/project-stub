module.exports = {
    block : 'page',
    title : 'Title of the page',
    favicon : '/favicon.ico',
    head : [
        { elem : 'meta', attrs : { name : 'description', content : '' } },
        { elem : 'meta', attrs : { name : 'viewport', content : 'width=device-width, initial-scale=1' } },
        { elem : 'css', url : 'index.min.css' }
    ],
    scripts: [{ elem : 'js', url : 'index.min.js' }],
    mods : { theme : 'islands' },
    content : {
        block : 'form',
        mods : {
            'has-validation' : true,
            message : 'text'
        },
        mix : { block: 'my-form', js : true },
        method : 'GET',
        action : '/',
        content : [
            {
                block : 'form-field',
                name : 'name',
                mods : {
                    type : 'input',
                    'has-validation' : true,
                    required : true,
                },
                content : [
                    {
                        block : 'label',
                        content : 'Input'
                    },
                    {
                        block : 'input',
                        mods : { theme : 'islands', size : 'm' },
                        name : 'firstName'
                    }
                ]
            },
            {
                block : 'button',
                mods : { theme : 'islands', size : 'm', type : 'submit' },
                text : 'Отправить'
            }
        ]
    }
};
