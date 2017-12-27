module.exports = {
  block: 'page',
  title: 'BEM Animations',
  favicon: '/favicon.ico',
  head: [
      { elem: 'meta', attrs: { name: 'description', content: '' } },
      { elem: 'meta', attrs: { name: 'viewport', content: 'width=device-width, initial-scale=1' } },
      { elem: 'css', url: 'animations.min.css' },
      { elem: 'css', url: '../../assets/ibm-type/css/ibm-type.css' },
      { elem: 'js', url: 'https://code.jquery.com/jquery-3.2.1.js' },
  ],
  mix: {
      block: 'theme',
      mods: { color: 'default', space: 'default', size: 'default' }
  },
  scripts: [{ elem: 'js', url: 'animations.min.js' }],
  mods: { theme: 'islands' },
  content: [
    {
    block: 'demo',
    mix: [
      { block: 'b-page', elem: 'content' },
      { block: 'theme' }
    ],
    params: {
      menusection: 'tools',
      pagename: 'animations',
    },
    content: [
    {
      elem: 'content',
      content: [
      {
        block: 'text',
        mods: { size: 'xxxxl', weight: 'bold', align: 'center' },
        mix: { block: 'decorator', mods: { 'indent-b': 'xxxxxl' } },
        content: 'Animations'
      },
      // {
      //   block: 'text',
      //   mods: { size: 'xxl', view: 'primary', width: 'default' },
      //   mix: { block: 'decorator', mods: { 'indent-b': 'xxxxl' } },
      //   content: 'Анимация — последовательное изменение свойств блока по какому-либо событию. Она мотивирует к действию, вовлекает в процесс, вызвает восторг'
      // },
      // {
      //   block: 'text',
      //   mods: { size: 'xl', view: 'primary', weight: 'bold' },
      //   mix: { block: 'decorator', mods: { 'indent-b': 'xl' } },
      //   content: 'Появление'
      // },
      {
        block: 'animation-list',
        content: [
        {
          block: 'animation-item',
          content: [
          {
            elem: 'view',
            mix: [{ block: 'js-paranja' }],
            content: [
            'click here',
            {
              elem: 'paranja',
              mix: { block: 'animation', mods: { 'fade': 'out' } },
            }]
          },
          {
            elem: 'name',
            content: [
            {
              block: 'text',
              mods: { size: 'm', view: 'primary', weight: 'bold' },
              content: "Fade In / Fade Out"
            },
            {
              block: 'text',
              mods: { size: 's', view: 'primary' },
              content: "mods: { 'fade': 'in' }   /   mods: { 'fade': 'out' }"
            }]
          }]
        },
        {
          block: 'animation-item',
          content: [
          {
            elem: 'view',
            mix: [{ block: 'js-modal-top' }],
            content: [
            'click here',
            {
              elem: 'modal',
              attrs: { style: 'display: none;' },
              mix: { block: 'animation', mods: { to: 'bottom' } },
            }]
          },
          {
            elem: 'name',
            content: [
            {
              block: 'text',
              mods: { size: 'm', view: 'primary', weight: 'bold' },
              content: "From top to bottom"
            },
            {
              block: 'text',
              mods: { size: 's', view: 'primary' },
              content: "mods: { 'from': 'top' }   /   mods: { 'to': 'bottom' }"
            }]
          }]
        },
        {
          block: 'animation-item',
          content: [
          {
            elem: 'view',
            mix: [{ block: 'js-modal-bottom' }],
            content: [
            'click here',
            {
              elem: 'modal',
              attrs: { style: 'display: none;' },
              mix: { block: 'animation', mods: { to: 'top' } },
            }]
          },
          {
            elem: 'name',
            content: [
            {
              block: 'text',
              mods: { size: 'm', view: 'primary', weight: 'bold' },
              content: "From bottom to top"
            },
            {
              block: 'text',
              mods: { size: 's', view: 'primary' },
              content: "mods: { 'from': 'bottom' }   /   mods: { 'to': 'top' }"
            }]
          }]
        },
        {
          block: 'animation-item',
          content: [
          {
            elem: 'view',
            mix: [{ block: 'js-modal-right' }],
            content: [
            'click here',
            {
              elem: 'modal',
              attrs: { style: 'display: none;' },
              mix: { block: 'animation', mods: { to: 'left' } },
            }]
          },
          {
            elem: 'name',
            content: [
            {
              block: 'text',
              mods: { size: 'm', view: 'primary', weight: 'bold' },
              content: "From right to left"
            },
            {
              block: 'text',
              mods: { size: 's', view: 'primary' },
              content: "mods: { 'from': 'right' }   /   mods: { 'to': 'left' }"
            }]
          }]
        },
        {
          block: 'animation-item',
          content: [
          {
            elem: 'view',
            mix: [{ block: 'js-modal-left' }],
            content: [
            'click here',
            {
              elem: 'modal',
              attrs: { style: 'display: none;' },
              mix: { block: 'animation', mods: { to: 'right' } },
            }]
          },
          {
            elem: 'name',
            content: [
            {
              block: 'text',
              mods: { size: 'm', view: 'primary', weight: 'bold' },
              content: "From left to right"
            },
            {
              block: 'text',
              mods: { size: 's', view: 'primary' },
              content: "mods: { 'from': 'left' }   /   mods: { 'to': 'right' }"
            }]
          }]
        },
        {
          block: 'animation-item',
          content: [
          {
            elem: 'view',
            content: [
            {
              block: 'e-accordion',
              content: [
              {
                elem: 'item',
                content: [
                {
                  elem: 'short',
                  mix: { block: 'decorator', mods: { 'space-a': 'm' } },
                  content: {
                    block: 'text',
                    mods: { size: 'm', view: 'link' },
                    content: 'click me!'
                  }
                },
                {
                  elem: 'more',
                  mix: { block: 'decorator', mods: { 'space-a': 'm' } },
                  content: {
                    block: 'text',
                    mods: { size: 'm', view: 'primary' },
                    content: 'here I am!'
                  }
                }]
              }]
            }]
          },
          {
            elem: 'name',
            content: [
            {
              block: 'text',
              mods: { size: 'm', view: 'primary', weight: 'bold' },
              content: "Accordion toggle"
            },
            {
              block: 'text',
              mods: { size: 's', view: 'primary' },
              content: "block: 'e-accordion'   /   elem: 'short'   /   elem: 'more'"
            }]
          }]
        },
        {
          block: 'animation-item',
          content: [
          {
            elem: 'view',
            content: [
            {
              block: 'decorator',
              mods: { 'indent-a': 's' },
              content: {
                block: 'button',
                mods: { size: 'm', theme: 'normal' },
                mix: [{ block: 'animation' }, { block: 'js-shake-horizontal' }],
                content: 'Shake me horizontal!'
              }
            },
            {
              block: 'decorator',
              mods: { 'indent-a': 's' },
              content: {
                block: 'button',
                mods: { size: 'm', theme: 'normal' },
                mix: [{ block: 'animation' }, { block: 'js-shake-radial' }],
                content: 'Shake me radial!'
              }
            }]
          },
          {
            elem: 'name',
            content: [
            {
              block: 'text',
              mods: { size: 'm', view: 'primary', weight: 'bold' },
              content: "Shake"
            },
            {
              block: 'text',
              mods: { size: 's', view: 'primary' },
              content: "mods: { shake: 'horizontal' }   /   mods: { shake: 'radial' }"
            }]
          }]
        }]
      }]
    }]
    },
  ]
};
