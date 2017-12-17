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
      attrs: { style: 'height: 456px; margin: 100px auto;' },
      mix: { block: 'pt-card', mods: { view: 'default' } },
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
                  elem: 'goods-price',
                  content: '$299'
                }
              ]
            },
            {
              elem: 'item'
            }
          ]
        },
        {
          elem: 'goods-info',
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
    },


    {
      block: 'offer',
      mods: { view: 'brabus'},
      attrs: { style: 'height: 456px; margin: 100px auto;' },
      mix: { block: 'pt-card', mods: { view: 'inverse' } },
      content: [
          {
            elem: 'background-wrapper',
            mix: { block: 'promo-cards', elem: 'offer-service-background'},
            content: {
              elem: 'bg-photo',
              mix: { block: 'promo-cards', elem: 'offer-service-photo'}
            }
        },
        {
          elem: 'title',
          mix: { block: 'pt-card', elem: 'header', elemMods: { 'space-v': 'xxl' } },
          content: [
            {
              block: 'text',
              mods: { view: 'inverse', size: 'l', transform: 'uppercase', align: 'center' },
              content: 'Brabus'
            }
          ]
        },
        {
          elem: 'service-info',
          mix: { block: 'pt-card', elem: 'footer', elemMods: { 'space-a': 'l' } },
          content: [
            {
              block: 'text',
              mix: { block: 'decorator', mods: { 'indent-b': 'xl'} },
              mods: { view: 'inverse', size: 'm', weight: 'semibold' },
              content: 'Luxury and comfort never comprised. The BRABUS GLE 700 Coupe will lead to an unforgettable journey'
            },
            {
              elem: 'price',
              content: [
                {
                  block: 'text',
                  mods: { view: 'inverse', size: 's', style: 'italic' },
                  content: 'from'
                },
                {
                  block: 'text',
                  mods: { view: 'inverse', size: 'xxxl', weight: 'semibold' },
                  content: '$299'
                }
              ]
            }
          ]
        }
      ]
    },

    {
      block: 'offer',
      attrs: { style: 'height: 456px; margin: 100px auto;' },
      mix: { block: 'pt-card', mods: { view: 'default' } },
      content: [
        {
          elem: 'brand-show',
          mix: { block: 'pt-card', elem: 'header', elemMods: { 'space-a': 'xl' } },
          content: [
            {
              elem: 'brand-image-wrapper',
              content: [
                {
                  elem: 'brand-image'
                }
              ]
            }
          ]
        },
        {
          elem: 'brand-info',
          mix: { block: 'pt-card', elem: 'content', elemMods: { 'space-h': 'xxl' } },
          content: [
            {
              block: 'text',
              mods: { view: 'primary', size: 'xxl', align: 'center', transform: 'uppercase', spacing: 's' },
              content: 'Magic For All'
            },
            {
              elem: 'brand-logo',
              mix: { block: 'decorator', mods: { 'indent-t': 'xl' } }
            }
          ]
        },
        {
          elem: 'brand-action',
          mix: { block: 'pt-card', elem: 'footer', elemMods: { 'space-a': 's' } },
          content: [
            {
              block: 'text',
              mods: { view: 'primary', size: 'm', align: 'center', weight: 'bold' },
              content: 'Learn More'
            }
          ]
        }
      ]
    }
  ]
}
