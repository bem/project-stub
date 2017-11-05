module.exports = {
  block: 'page',
  title: 'BEM Icons article',
  favicon: '/favicon.ico',
  head: [
      { elem: 'meta', attrs: { name: 'description', content: '' } },
      { elem: 'meta', attrs: { name: 'viewport', content: 'width=device-width, initial-scale=1' } },
      { elem: 'css', url: 'article-icons.min.css' },
      { elem: 'js', url: 'https://code.jquery.com/jquery-3.2.1.js' },
  ],
  mix: {
      block: 'theme',
      mods: { color: 'default', space: 'default', size: 'default' }
  },
  scripts: [{ elem: 'js', url: 'article-icons.min.js' }],
  mods: { theme: 'islands' },
  content: [
    {
      block: 'demo',
      mix: [
        { block: 'b-page', elem: 'content' },
        { block: 'vectors' }
      ],
      params: {
        menusection: 'tools',
        pagename: 'vectors',
      },
      content : [
        {
          elem: 'content',
          elemMods: { size: 's' },
          content: [
            {
              block: 'text',
              mods: { size: 'xxxl', weight: 'bold' },
              mix: { block: 'decorator', mods: { 'indent-b': 'xl' } },
              content: 'Как рисовать иконки'
            },
            {
              block : 'text',
              mods : { view : 'primary', size : 'xl', type : 'h2', weight : 'bold' },
              content: '1. Сетка'
            },
            {
              block : 'text',
              mods : { view : 'primary', size : 'm', type : 'p' },
              content: 'Иконки должны быть выполнены с помощью сетки размером 16px (_size_s) или 24px (_size_m).'
            },
            {
              block : 'image',
              mods : { view : 'icon-grid' }
            },
            {
              block : 'text',
              mods : { view : 'primary', size : 'xl', type : 'h2', weight : 'bold' },
              content: '2. Базовые формы'
            },
            {
              block : 'text',
              mods : { view : 'primary', size : 'm', type : 'p' },
              content: 'Привязка к этим фигурам в сетке сохраняет пропорции во всем наборе.'
            },
            {
              block : 'text',
              mods : { view : 'primary', size : 'm', type : 'p' },
              content: 'Круг прямоугольник (горизонтальные и вертикальные) квадрат.'
            },
            {
              block : 'image',
              mods : { view : 'icon-form' }
            },
            {
              block : 'text',
              mods : { view : 'primary', size : 'xl', type : 'h2', weight : 'bold' },
              content: '3. Размер'
            },
            {
              block : 'text',
              mods : { view : 'primary', size : 'm', type : 'p' },
              content: 'При создании иконок меньшего размера иногда можно просто изменить размер (выровняв по пиксельной сетке). Хороший пример иконки picture. Баланс между пробелами и штрихами по-прежнему выглядит хорошо при изменении размера.'
            },
            {
              block : 'image',
              mods : { view : 'icon-size' }
            },
            {
              block : 'text',
              mods : { view : 'primary', size : 'm', type : 'p' },
              content: 'Но в большинстве случаев элементы слишком малы и становится нечитаемыми при сжатии, поэтому имеет смысл сделать эти элементы целыми.'
            },
            {
              block : 'image',
              mods : { view : 'icon-sizes' }
            },
            {
              block : 'text',
              mods : { view : 'primary', size : 'xl', type : 'h2', weight : 'bold' },
              content: '4. Толщина штриха'
            },
            {
              block : 'text',
              mods : { view : 'primary', size : 'm', type : 'p' },
              content: 'Толщина штриха должна быть 2px. Однако, в некоторых случаях допустима 1,5px.'
            },
            {
              block : 'text',
              mods : { view : 'primary', size : 'xl', type : 'h2', weight : 'bold' },
              content: '5. Анатомия'
            },
            {
              block : 'text',
              mods : { view : 'primary', size : 'm', type : 'p' },
              content: 'Сложные формы должны образовываться слиянием простых фигур. Для создания дуг используйте круги. (Пример иконок notification и picture).'
            },
            {
              block : 'text',
              mods : { view : 'primary', size : 'xl', type : 'h2', weight : 'bold' },
              content: '6. Скругления'
            },
            {
              block : 'text',
              mods : { view : 'primary', size : 'm', type : 'p' },
              content: 'Скругление углов не является обязательным и должно зависеть от того, как выглядят объект в реальной жизни. Обычно у конверта углы всегда прямые, а у телефона есть скругления.'
            },
            {
              block : 'text',
              mods : { view : 'primary', size : 'xl', type : 'h2', weight : 'bold' },
              content: '7. Углы'
            },
            {
              block : 'text',
              mods : { view : 'primary', size : 'm', type : 'p' },
              content: 'Углы форм должны быть стремиться к 45 или 90 градусам.'
            },
            {
              block : 'text',
              mods : { view : 'primary', size : 'xl', type : 'h2', weight : 'bold' },
              content: '8. Использование логотипов в иконках'
            },
            {
              block : 'text',
              mods : { view : 'primary', size : 'm', type : 'p' },
              content: 'Иногда в иконках необходимо использовать логотип других сервисов. В таких случаях мы не изменяем форму, а только подгоняем в сетку и если это возможно выравниваем по пиксельной сетке. (Пример иконок метки и блога)'
            },
            {
              block : 'text',
              mods : { view : 'ghost', size : 'xl', type : 'h2', weight : 'bold' },
              content: '9. Примеры (хорошо и плохо)'
            }
          ]
        }
      ]
    },
  ]
};
