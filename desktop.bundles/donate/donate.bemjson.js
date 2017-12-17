module.exports = {
  block: 'page',
  title: 'BEM Layouts',
  favicon: '/favicon.ico',
  head: [
      { elem: 'meta', attrs: { name: 'description', content: '' } },
      { elem: 'meta', attrs: { name: 'viewport', content: 'width=device-width, initial-scale=1' } },
      { elem: 'css', url: 'donate.min.css' },
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
  scripts: [{ elem: 'js', url: 'donate.min.js' }],
  mods: { theme: 'islands' },
  content: [
    {
      block: 'donate',
      attrs: { style: 'height: 456px; margin: 100px auto;' },
      mix: { block: 'pt-card', mods: { view: 'default' } },
      content: [
        {
          elem: 'person-header',
          mix: { block: 'pt-card', elem: 'header' },
          content: [
            {
              elem: 'person-image'
            },
            {
              elem: 'person-avatar',
            }
          ]
        },
        {
          elem: 'person-info',
          mix: { block: 'pt-card', elem: 'content', elemMods: { 'space-h': 'l' } },
          content: [
            {
              block: 'text',
              mix: { block: 'decorator', mods: { 'indent-b': 'xs' } },
              mods: { view: 'primary', size: 'xxl', weight: 'bold' },
              content: [
                'Sam Harris ',
                {
                  block: 'text',
                  mods: { view: 'primary', size: 'xxl', weight: 'regular', style: 'italic', display: 'inline' },
                  content: 'is creating The Waking Up Podcast'
                }
              ]
            },
            {
              block: 'text',
              mods: { view: 'primary', size: 'm' },
              content: 'I launched Waking Up in 2015, and it regularly ranks among the top 100 podcasts in the US, ' +
              'UK, Canada, and Australia. It has been selected by Apple as one of "iTunes Best" and has won a Webby ' +
              'Award for best podcas…'
            }
          ]
        },
        {
          elem: 'person-action',
          mix: { block: 'pt-card', elem: 'footer', elemMods: { 'space-h': 'm', 'space-v': 'xl' } },
          content: [
            {
              block: 'button',
              mix: { block: 'text', mods: { view: 'inverse', size: 'm', transform: 'uppercase' } },
              mods: { theme: 'islands', size: 'xl', type: 'submit', view: 'donate', width: 'full' },
              text: 'Send $10'
            }
          ]
        }
      ]
    },
  ]
}
