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
              mix: { block: 'decorator', mods: { 'indent-b': 's' } },
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
              mods: { view: 'secondary', size: 'm' },
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
              mix: { block: 'text', mods: { view: 'inverse', size: 's', transform: 'uppercase' } },
              mods: { theme: 'islands', size: 'xl', type: 'submit', view: 'person-donate', width: 'full' },
              text: 'Send $10'
            }
          ]
        }
      ]
    },

    {
      block: 'donate',
      attrs: { style: 'height: 456px; margin: 100px auto;' },
      mix: { block: 'pt-card', mods: { view: 'default' } },
      content: [
        {
          elem: 'project-header',
          mix: { block: 'pt-card', elem: 'header' },
          content: [
            {
              elem: 'project-image',
              content: [
                {
                  block: 'play'
                }
              ]
            },
            {
              elem: 'project-progress-bar',
            }
          ]
        },
        {
          elem: 'project-info',
          mix: { block: 'pt-card', elem: 'content', elemMods: { 'space-h': 'l' } },
          content: [
            {
              elem: 'project-countdowns',
              mix: { block: 'decorator', mods: { 'indent-v': 'xs' } },
              content: [
                {
                  elem: 'amount-wrapper',
                  mix: { block: 'decorator', mods: { 'indent-r': 'xxxxl' } },
                  content: [
                    {
                      elem: 'amount',
                      content: [
                        {
                          block: 'text',
                          mods: { view: 'primary', size: 'l', weight: 'bold' },
                          content: '$4,464'
                        }
                      ]
                    },
                    {
                      elem: 'description',
                      content: [
                        {
                          block: 'text',
                          mods: { view: 'secondary', size: 'xs' },
                          content: 'pledged of 6,217 goal'
                        }
                      ]
                    },
                  ]
                },
                {
                  elem: 'days-wrapper',
                  content: [
                    {
                      elem: 'days',
                      content: [
                        {
                          block: 'text',
                          mods: { view: 'primary', size: 'l', weight: 'bold' },
                          content: '32'
                        }
                      ]
                    },
                    {
                      elem: 'description',
                      content: [
                        {
                          block: 'text',
                          mods: { view: 'secondary', size: 'xs' },
                          content: 'days to go'
                        }
                      ]
                    }
                  ]
                }
              ]
            },
            {
              block: 'text',
              mods: { view: 'primary', size: 'xxl', weight: 'bold' },
              content: [
                {
                  block: 'text',
                  mods: { view: 'primary', size: 'xl', weight: 'bold' },
                  mix: { block: 'decorator', mods: { 'indent-b': 'xxs' } },
                  content: 'MIRAGE: A Feature-Packed Delay Pedal by RedShift Effects'
                }
              ]
            },
            {
              block: 'text',
              mods: { view: 'secondary', size: 'm' },
              content: 'A high-quality, hand-built tap tempo delay pedal with ' +
              'modulated filtering, plenty of delay time, and a handful of tricks up its…'
            }
          ]
        },
        {
          elem: 'project-action',
          mix: { block: 'pt-card', elem: 'footer', elemMods: { 'space-a': 'm' } },
          content: [
            {
              block: 'button',
              mix: { block: 'text', mods: { view: 'inverse', size: 'm' } },
              mods: { theme: 'islands', size: 'xl', type: 'submit', view: 'project-donate', width: 'full' },
              text: 'Back this project'
            }
          ]
        }
      ]
    },
  ]
}
