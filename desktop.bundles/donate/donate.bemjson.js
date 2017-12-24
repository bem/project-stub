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
          elem: 'person-image-wrapper',
          mix: { block: 'pt-card', elem: 'image' },
          content: [
            {
              block: 'image',
              url: '../../assets/i/donate-person-image.png'
            },
            {
              elem: 'person-avatar-wrapper',
              mix: { block: 'pt-card', elem: 'header' },
              content: [
                {
                  elem: 'person-avatar',
                  mix: { block: 'pt-avatar', elem: 'photo', elemMods: { size: 'm' } },
                }
              ]
            }
          ]
        },
        {
          elem: 'person-info',
          mix: { block: 'pt-card', elem: 'content', elemMods: { 'space-h': 'l', 'space-t': 'xxxl' } },
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
          elem: 'project-image-wrapper',
          mix: { block: 'pt-card', elem: 'image' },
          content: [
            {
              block: 'image',
              url: '../../assets/i/donate-project-image.png'
            },
            {
              elem: 'project-play',
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
              'modulated filtering, plenty of delay time, and a handful …'
            }
          ]
        },
        {
          elem: 'project-action',
          mix: { block: 'pt-card', elem: 'footer', elemMods: { 'space-h': 'm', 'space-v': 'l' } },
          content: [
            {
              block: 'button',
              mix: { block: 'text', mods: { view: 'inverse', size: 'm' } },
              mods: { theme: 'islands', size: 'xl', type: 'submit', view: 'project-donate', width: 'full', 'border-radius': 'full' },
              text: 'Back this project'
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
          elem: 'event-image-wrapper',
          mix: { block: 'pt-card', elem: 'image' },
          content: [
            {
              block: 'image',
              url: '../../assets/i/donate-event-image.png'
            }
          ]
        },
        {
          elem: 'event-header',
          mix: { block: 'pt-card', elem: 'header' },
          content: [
            {
              elem: 'event-avatar'
            },
            {
              block: 'text',
              mods: { view: 'primary', size: 'xxxl', weight: 'bold', style: 'italic', align: 'center', transform: 'uppercase' },
              mix: { block: 'decorator', mods: { 'indent-b': 'xxs' } },
              content: 'Ann’s B-day'
            },
            {
              block: 'text',
              mods: { view: 'primary', size: 's', align: 'center' },
              content: [
                {
                  block: 'text',
                  mods: { view: 'primary', size: 's', weight: 'bold', display: 'inline' },
                  content: '25:12:08:43 '
                },
                {
                  block: 'text',
                  mods: { view: 'primary', size: 's', display: 'inline' },
                  content: 'until the end'
                }
              ]
            }
          ]
        },
        {
          elem: 'event-info',
          mix: { block: 'pt-card', elem: 'content', elemMods: { 'space-h': 'xxl' } },
          content: [
            {
              elem: 'control',
              content: '-'
            },
            {
              block: 'text',
              mods: { view: 'primary', size: '4xl', weight: 'semibold', align: 'center' },
              mix: { block: 'decorator', mods: { 'indent-b': 'xxs' } },
              content: '$10'
            },
            {
              elem: 'control',
              content: '+'
            }
          ]
        },
        {
          elem: 'event-action',
          mix: { block: 'pt-card', elem: 'footer', elemMods: { 'space-h': 'l', 'space-v': 'xl' } },
          content: [
            {
              elem: 'event-avatar-group',
              content: [
                {
                  elem: 'event-mini-avatar',
                  elemMods: { view: '1' },
                  mix: { block: 'pt-avatar', elem: 'photo', elemMods: { size: 'xs' } },
                },
                {
                  elem: 'event-mini-avatar',
                  elemMods: { view: '2' },
                  mix: { block: 'pt-avatar', elem: 'photo', elemMods: { size: 'xs' } },
                },
                {
                  elem: 'event-mini-avatar',
                  elemMods: { view: '3' },
                  mix: { block: 'pt-avatar', elem: 'photo', elemMods: { size: 'xs' } },
                },
                {
                  elem: 'event-mini-avatar',
                  elemMods: { view: '4' },
                  mix: { block: 'pt-avatar', elem: 'photo', elemMods: { size: 'xs' } },
                }
              ]
            },
            {
              block: 'text',
              mods: { view: 'primary', size: 'm', weight: 'semibold' },
              content: '+6'
            },
            {
              block: 'button',
              mix: [
                { block: 'text', mods: { view: 'inverse', weight: 'bold', transform: 'uppercase', style: 'italic' } },
                { block: 'decorator', mods: { 'indent-l': 'xl' } }
              ],
              mods: { theme: 'islands', size: 'xl', type: 'submit', view: 'event-donate', 'border-radius': 'full' },
              text: 'Make a party'
            }
          ]
        }
      ]
    },
  ]
}
