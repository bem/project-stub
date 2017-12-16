module.exports = {
  block: 'page',
  title: 'BEM Layouts',
  favicon: '/favicon.ico',
  head: [
      { elem: 'meta', attrs: { name: 'description', content: '' } },
      { elem: 'meta', attrs: { name: 'viewport', content: 'width=device-width, initial-scale=1' } },
      { elem: 'css', url: 'offer.min.css' },
      { elem: 'css', url: '../../assets/ibm-type/css/ibm-type.css' },
      { elem: 'js', url: 'https://code.jquery.com/jquery-3.2.1.js' },
  ],
  mix: {
      block: 'theme',
      mods: { color: 'default', space: 'default', size: 'default' }
  },
  attrs: {
    style: 'background: #F5F5F5;'
  },
  scripts: [{ elem: 'js', url: 'offer.min.js' }],
  mods: { theme: 'islands' },
  content: [
    {
      block: 'offer',
      attrs: { style: 'height: 496px; margin: 100px auto;' },
      mix: { block: 'pt-card', mods: { view: 'default' } },
      mods: { view: 'nike' },
      content: [
        {
          elem: 'show',
          mix: { block: 'pt-card', elem: 'header' },
          content: [
            {
              elem: 'background'
            },
            {
              elem: 'price-centralized',
              content: [
                {
                  elem: 'price',
                  content: '$299'
                }
              ]
            },
            {
              elem: 'item',
            }
          ]
        },
        {
          elem: 'info',
          mix: { block: 'pt-card', elem: 'content', elemMods: { 'space-v': 'xxl' } },
          content: [
            {
              block: 'text',
              mix: { block: 'decorator', mods: { 'indent-b': 'xs' } },
              mods: { view: 'primary', size: 'xl', align: 'center', transform: 'uppercase', spacing: 's' },
              content: 'Nike Gyakusou Gaiter Boot'
            },
            {
              block: 'text',
              mods: { view: 'primary', size: 's', align: 'center' },
              content: 'You have the goal. We have a gift'
            }
          ]
        },
        {
          elem: 'action',
          mix: { block: 'pt-card', elem: 'footer', elemMods: { 'space-v': 'xl' } },
          content: [
            {
              block: 'text',
              mods: { view: 'secondary', size: 'm', align: 'center', weight: 'semibold' },
              content: 'Shop Now'
            },
            {
              elem: 'border-bottom'
            }
          ]
        }
      ]
    }
  ]
}
