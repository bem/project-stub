// module.exports = {
//     block : 'header',
//     tag : 'header',
//     cls : 'row',
//     content : [
//         {
//             block: 'logo',
//             tag: 'a',
//             mix: {block: 'header', elem: 'logo', type: 'small'},
//             attrs: {href: '#', title: 'Перейти на главную страницу'},
//             content: '<svg class="logo__svg_big" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 114.15 92"><title>logo</title><rect width="24" height="92" fill="#68bdf8"/><text transform="translate(24.75 36.26)" font-size="25" font-family="ISOCPEUR, ISOCPEUR">Осип<tspan x="0" y="19">Бове</tspan><tspan font-size="14.3"><tspan x="0" y="37">Архитектурное</tspan><tspan x="0" y="52">бюро</tspan></tspan></text></svg><svg class="logo__svg_small" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 91 100"><defs><style>.a{fill:#68bdf8;}.b{font-size:92.59px;font-family:ISOCPEUR, ISOCPEUR;letter-spacing:-0.05em;}</style></defs><title>Logo2</title><rect class="a" y="2" width="18" height="92"/><text class="b" transform="translate(16 76.13) scale(0.87 1)">ОБ</text></svg>',
//             tabIndex: 1
//         },
//         {
//             block: 'menu',
//             mix: {block: 'header', elem: 'menu'},
//             content: [
//                 {
//                     elem: 'list',
//                     elemMods: {type: 'top'},
//                     content: [
//                         {
//                             elem: 'item',
//                             elemMods: {type: 'link'},
//                             content: {
//                                 block: 'link',
//                                 mix: {block: 'menu', elem: 'link'},
//                                 mods: {type: '1lvl'},
//                                 url: '#',
//                                 content: 'Проектирование домов и коттеджей',
//                                 tabIndex: 3
//                             }
//                         },
//                         {
//                             elem: 'item',
//                             elemMods: {type: 'link'},
//                             content: {
//                                 block: 'link',
//                                 mix: {block: 'menu', elem: 'link'},
//                                 mods: {type: '1lvl'},
//                                 url: '#',
//                                 content: 'Строительство домов под ключ',
//                                 tabIndex: 4
//                             }
//                         },
//                         {
//                             elem: 'item',
//                             elemMods: {type: 'link'},
//                             content: {
//                                 block: 'link',
//                                 mix: {block: 'menu', elem: 'link'},
//                                 mods: {type: '1lvl'},
//                                 url: '#',
//                                 content: 'Отзывы',
//                                 tabIndex: 5
//                             }
//                         }
//                     ]
//                 },
//                 {
//                     elem: 'list',
//                     elemMods: {type: 'down'},
//                     content: [
//                         {
//                             block: 'button',
//                             mix: {block: 'menu', elem: 'button', theme: 'menu'},
//                             mods: {togglable: 'check'},
//                             url: '#',
//                             title: 'Открыть меню сайта',
//                             content: '<b><span></span><span></span></b><strong>Меню</strong>',
//                             tabIndex: 2
//                         },
//                         {
//                             elem: 'item',
//                             elemMods: {type: 'link'},
//                             content: {
//                                 block: 'link',
//                                 mix: {block: 'menu', elem: 'link'},
//                                 mods: {type: '1lvl'},
//                                 url: '#',
//                                 content: 'Проектирование инженерных систем',
//                                 tabIndex: 6
//                             }
//                         },
//                         {
//                             elem: 'item',
//                             elemMods: {type: 'link'},
//                             content: {
//                                 block: 'link',
//                                 mix: {block: 'menu', elem: 'link'},
//                                 mods: {type: '1lvl'},
//                                 url: '#',
//                                 content: 'О компании',
//                                 tabIndex: 7
//                             }
//                         },
//                         {
//                             elem: 'item',
//                             elemMods: {type: 'link'},
//                             content: {
//                                 block: 'link',
//                                 mix: {block: 'menu', elem: 'link'},
//                                 mods: {type: '1lvl'},
//                                 url: '#',
//                                 content: 'Контакты',
//                                 tabIndex: 8
//                             }
//                         }
//                     ]
//                 },
//                 {
//                     elem : 'list',
//                     elemMods : { type : 'popup', level : '2' },
//                     content : [
//                         {
//                             elem : 'item',
//                             content : [
//                                 {
//                                     block : 'link',
//                                     mix : { block : 'list', elem : 'link' },
//                                     url : 'ingenernye-izyskaniya.html',
//                                     attrs : { role : 'link' },
//                                     content : 'Инженерные изыскания'
//                                 },
//                                 {
//                                     elem : 'list',
//                                     mix : { block : 'menu', elem : 'list' },
//                                     elemMods : { type : 'popup', level : '3' },
//                                     content : [
//                                         {
//                                             elem : 'item',
//                                             content : [
//                                                 {
//                                                     block : 'link',
//                                                     mix : { block : 'list', elem : 'link' },
//                                                     attrs : { role : 'link' },
//                                                     url : 'ingenerno-geodezicheskie-izyskaniya.html',
//                                                     content : 'Инженерно-геодезические изыскания'
//                                                 }
//                                             ]
//                                         },
//                                         {
//                                             elem : 'item',
//                                             content : [
//                                                 {
//                                                     block : 'link',
//                                                     mix : { block : 'list', elem : 'link' },
//                                                     attrs : { role : 'link' },
//                                                     url : 'ingenerno-geologicheskie-izyskaniya.html',
//                                                     content : 'Инженерно-геологические изыскания'
//                                                 }
//                                             ]
//                                         }
//                                     ]
//                                 }
//                             ]
//                         },
//                         {
//                             elem : 'item',
//                             content : [
//                                 {
//                                     block : 'link',
//                                     mix : { block : 'list', elem : 'link' },
//                                     url : 'projectirovanie.html',
//                                     attrs : { role : 'link' },
//                                     content : 'Проектирование'
//                                 },
//                                 {
//                                     elem : 'list',
//                                     mix : { block : 'menu', elem : 'list' },
//                                     elemMods : { type : 'popap', level : '3' },
//                                     content : [
//                                         {
//                                             elem : 'item',
//                                             content : [
//                                                 {
//                                                     block : 'link',
//                                                     mix : { block : 'list', elem : 'link' },
//                                                     attrs : { role : 'link' },
//                                                     url : 'proecty-domov-i-cottedgey-individualnoe-proectirovanie.html',
//                                                     content : 'Индивидуальное проектирование домов и коттеджей'
//                                                 }
//                                             ]
//                                         },
//                                         {
//                                             elem : 'item',
//                                             content : [
//                                                 {
//                                                     block : 'link',
//                                                     mix : { block : 'list', elem : 'link' },
//                                                     attrs : { role : 'link' },
//                                                     url : 'proekty-domov-i-cottedgey-v-classicheskom-style.html',
//                                                     content : 'Классические дома'
//                                                 }
//                                             ]
//                                         },
//                                         {
//                                             elem : 'item',
//                                             content : [
//                                                 {
//                                                     block : 'link',
//                                                     mix : { block : 'list', elem : 'link' },
//                                                     attrs : { role : 'link' },
//                                                     url : 'proectirovanie-elitnych-domov-i-osobnyakov.html',
//                                                     content : 'Проектирование элитных домов и особняков'
//                                                 }
//                                             ]
//                                         },
//                                         {
//                                             elem : 'item',
//                                             content : [
//                                                 {
//                                                     block : 'link',
//                                                     mix : { block : 'list', elem : 'link' },
//                                                     attrs : { role : 'link' },
//                                                     url : 'proecty-sovremennych-domov.html',
//                                                     content : 'Современные дома'
//                                                 }
//                                             ]
//                                         },
//                                         {
//                                             elem : 'item',
//                                             content : [
//                                                 {
//                                                     block : 'link',
//                                                     mix : { block : 'list', elem : 'link' },
//                                                     attrs : { role : 'link' },
//                                                     url : 'proekt-doma-iz-brusa.html',
//                                                     content : 'Дома из бруса'
//                                                 }
//                                             ]
//                                         },
//                                         {
//                                             elem : 'item',
//                                             content : [
//                                                 {
//                                                     block : 'link',
//                                                     mix : { block : 'list', elem : 'link' },
//                                                     attrs : { role : 'link' },
//                                                     url : 'proectirovanie-ingenernyh-system.html',
//                                                     content : 'Инженерные системы проектирование'
//                                                 }
//                                             ]
//                                         },
//                                         {
//                                             elem : 'item',
//                                             content : [
//                                                 {
//                                                     block : 'link',
//                                                     mix : { block : 'list', elem : 'link' },
//                                                     attrs : { role : 'link' },
//                                                     url : 'proectirovanie-otdelnyh-razdelov-proecta.html',
//                                                     content : 'Отдельные разделы проекта'
//                                                 }
//                                             ]
//                                         },
//                                         {
//                                             elem : 'item',
//                                             content : [
//                                                 {
//                                                     block : 'link',
//                                                     mix : { block : 'list', elem : 'link' },
//                                                     attrs : { role : 'link' },
//                                                     url : 'dizain-project.html',
//                                                     content : 'Дизайн проект'
//                                                 }
//                                             ]
//                                         },
//                                         {
//                                             elem : 'item',
//                                             content : [
//                                                 {
//                                                     block : 'link',
//                                                     mix : { block : 'list', elem : 'link' },
//                                                     attrs : { role : 'link' },
//                                                     url : 'primery-proekta-doma-cottedga.html',
//                                                     content : 'Пример проекта дома'
//                                                 }
//                                             ]
//                                         }
//                                     ]
//                                 }
//                             ]
//                         },
//                         {
//                             elem : 'item',
//                             content : [
//                                 {
//                                     block : 'link',
//                                     mix : { block : 'list', elem : 'link' },
//                                     attrs : { role : 'link' },
//                                     url : 'stroitelstvo-domov-i-cottedgey-pod-kluch.html',
//                                     content : 'Строительство'
//                                 }
//                             ]
//                         },
//                         {
//                             elem : 'item',
//                             content : [
//                                 {
//                                     block : 'link',
//                                     mix : { block : 'list', elem : 'link' },
//                                     content : 'Современные технологии'
//                                 },
//                                 {
//                                     elem : 'list',
//                                     mix : { block : 'menu', elem : 'list' },
//                                     elemMods : { type : 'popup', level : '3' },
//                                     content : [
//                                         {
//                                             elem : 'item',
//                                             content : [
//                                                 {
//                                                     block : 'link',
//                                                     mix : { block : 'list', elem : 'link' },
//                                                     attrs : { role : 'link' },
//                                                     url : 'proectirovanie-v-bim-technologii.html',
//                                                     content : 'Проектирование в BIM-технологии'
//                                                 }
//                                             ]
//                                         }
//                                     ]
//                                 }
//                             ]
//                         },
//                         {
//                             elem : 'item',
//                             content : [
//                                 {
//                                     block : 'link',
//                                     mix : { block : 'list', elem : 'link' },
//                                     attrs : { role : 'link' },
//                                     url : 'kak-zakazat-proekt-doma.html',
//                                     content : 'Как заказать? Этапы работы'
//                                 }
//                             ]
//                         },
//                         {
//                             elem : 'item',
//                             content : [
//                                 {
//                                     block : 'link',
//                                     mix : { block : 'list', elem : 'link' },
//                                     attrs : { role : 'link' },
//                                     url : 'consultaciya.html',
//                                     content : 'Консультация'
//                                 }
//                             ]
//                         },
//                         {
//                             elem : 'item',
//                             content : [
//                                 {
//                                     block : 'link',
//                                     mix : { block : 'list', elem : 'link' },
//                                     attrs : { role : 'link' },
//                                     url : 'garantiinye-obyazatelstva.html',
//                                     content : 'Гарантийные обязательства'
//                                 }
//                             ]
//                         },
//                         {
//                             elem : 'item',
//                             content : [
//                                 {
//                                     block : 'link',
//                                     mix : { block : 'list', elem : 'link' },
//                                     attrs : { role : 'link' },
//                                     url : 'stoimost-proecta.html',
//                                     content : 'Стоимость проекта'
//                                 }
//                             ]
//                         },
//                         {
//                             elem : 'item',
//                             content : [
//                                 {
//                                     block : 'link',
//                                     mix : { block : 'list', elem : 'link' },
//                                     attrs : { role : 'link' },
//                                     url : 'sposoby-oplaty.html',
//                                     content : 'Способы оплаты'
//                                 }
//                             ]
//                         },
//                         {
//                             elem : 'item',
//                             content : [
//                                 {
//                                     block : 'link',
//                                     mix : { block : 'list', elem : 'link' },
//                                     attrs : { role : 'link' },
//                                     url : 'otzyvy.html',
//                                     content : 'Отзывы'
//                                 }
//                             ]
//                         },
//                         {
//                             elem : 'item',
//                             content : [
//                                 {
//                                     block : 'link',
//                                     mix : { block : 'list', elem : 'link' },
//                                     attrs : { role : 'link' },
//                                     url : 'o-companii.html',
//                                     content : 'О компании'
//                                 }
//                             ]
//                         },
//                         {
//                             elem : 'item',
//                             content : [
//                                 {
//                                     block : 'link',
//                                     mix : { block : 'list', elem : 'link' },
//                                     attrs : { role : 'link' },
//                                     url : 'karta-saita.html',
//                                     content : 'Карта сайта'
//                                 }
//                             ]
//                         }
//                     ]
//                 }
//             ]
//         },
//         {
//             block: 'communication',
//             mix: {block: 'header', elem: 'communication'},
//             content: [
//                 {
//                     block: 'tel',
//                     mix: {block: 'communication', elem: 'tel'},
//                     content: [
//                         {
//                             block: 'icon',
//                             mix: {block: 'tel', elem: 'icon'},
//                             content: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 50 50"><defs><style>.a{fill:#68bdf8;stroke:#68bdf8;stroke-miterlimit:10;}</style></defs><title>phone</title><path class="a" d="M35.35,48.62a47.61,47.61,0,0,1-9.62-4,52.46,52.46,0,0,1-16-13.45A58.17,58.17,0,0,1,2,18.63C.76,16,.64,15.59.54,13.7a6.39,6.39,0,0,1,.71-4A15.71,15.71,0,0,1,8.91,1.36c2-1,2.63-1.05,3.13-.41A145.8,145.8,0,0,1,16.69,15c0,.74-.45,1.08-2.9,2.19-1.89.86-2.53,1.57-2.11,2.36.11.21,4.85,4.5,10.52,9.52C28.83,35,32.7,38.22,33,38.22c.74,0,1.26-.67,1.26-1.62,0-1.49.29-2.76.68-3s1.31-.36,7.3-.91c5.72-.53,6.25-.52,6.67.19a8.1,8.1,0,0,1,.5,2.39A14.33,14.33,0,0,1,44.92,47C42.07,49.77,40.18,50.1,35.35,48.62Z" transform="translate(0 0)"/><path class="a" d="M35.35,48.62A51.29,51.29,0,0,1,14.93,36.87,57.1,57.1,0,0,1,2,18.63C.76,16,.64,15.59.54,13.7a6.39,6.39,0,0,1,.71-4A15.83,15.83,0,0,1,9.1,1.27C11,.38,11.55.33,12,.95A145.8,145.8,0,0,1,16.69,15c0,.74-.45,1.08-2.9,2.19-1.89.86-2.53,1.57-2.11,2.36.11.21,4.85,4.5,10.52,9.52C28.83,35,32.7,38.22,33,38.22c.77,0,1.26-.68,1.26-1.75,0-1.39.43-2.82.89-3s11-1.18,12.37-1.18,1.76.6,1.88,3.25a18.3,18.3,0,0,1-.78,5.94A17.63,17.63,0,0,1,44.92,47C42.07,49.77,40.18,50.1,35.35,48.62Z" transform="translate(0 0)"/><path class="a" d="M35.35,48.62a48.24,48.24,0,0,1-9.62-4C15.24,39,6.34,29.08,1.43,17.44a9.44,9.44,0,0,1-.9-3.9,6.41,6.41,0,0,1,.86-4.11A15.67,15.67,0,0,1,9.1,1.27a10.76,10.76,0,0,1,2-.77c.73,0,1.31,1,2.23,3.85C13.88,6,14.85,8.9,15.5,10.86c1.24,3.7,1.39,4.54.9,5A21.28,21.28,0,0,1,14,17.08c-2.12,1-2.76,1.68-2.34,2.48.11.21,4.85,4.5,10.52,9.52C32.93,38.59,33.45,39,34.05,37.73a3.77,3.77,0,0,0,.24-1.35c0-1.31.44-2.73.89-2.88s11-1.18,12.37-1.18c.84,0,1.12.12,1.38.58.77,1.34.65,5.53-.23,8.39a16.32,16.32,0,0,1-6.31,7.61C40.71,49.77,38.88,49.7,35.35,48.62Z" transform="translate(0 0)"/><path class="a" d="M37.93,49.39,35,48.48C20.64,44.14,8.58,33.25,2,18.74.72,15.8.6,15.39.53,13.55a6.49,6.49,0,0,1,.87-4.12,15.68,15.68,0,0,1,7.2-7.9c1.87-1,2.7-1.16,3.25-.71S16.69,14,16.69,15c0,.75-.24.94-2.58,2-2.12,1-2.79,1.65-2.44,2.47a70.33,70.33,0,0,0,5.49,5.16l7.48,6.62c7.17,6.37,7.88,7,8.52,7s1.13-.61,1.13-1.84.44-2.73.89-2.88,11.08-1.17,12.43-1.17,1.77.64,1.78,3.79A13.92,13.92,0,0,1,45,46.84c-2,2-3.38,2.67-5.33,2.65A11.74,11.74,0,0,1,37.93,49.39Z" transform="translate(0 0)"/><path class="a" d="M36.73,49a54.78,54.78,0,0,1-16.52-7.89A56.11,56.11,0,0,1,2.11,18.86L.61,15.6V13.38a7.14,7.14,0,0,1,.8-4A20.73,20.73,0,0,1,4.83,4.27,21.05,21.05,0,0,1,9.73,1c1.45-.59,2.13-.54,2.47.18.48,1,4.49,13.36,4.49,13.84,0,.69-.27.9-2.46,1.88s-2.81,1.5-2.62,2.35c.1.42,3.41,3.52,10.25,9.58C27.42,33.8,32.26,38,32.63,38.15c1.1.51,1.57-.06,1.74-2.14a4.08,4.08,0,0,1,.56-2.17c.33-.35,1.42-.53,5.34-.9C43,32.68,46,32.47,47,32.46c1.71,0,1.76,0,2.09.74.52,1.18.42,5.28-.18,7.35a15.71,15.71,0,0,1-6.36,8.22C41.13,49.56,39.18,49.64,36.73,49Z" transform="translate(0 0)"/><path class="a" d="M36.05,48.75c-14.47-4.09-26.44-14.46-33.5-29C.07,14.63-.08,12.67,1.69,8.95A17,17,0,0,1,6.92,2.59C8.7,1.42,11,.44,11.51.62s1.11,1.62,2.14,4.88c.36,1.13,1.19,3.67,1.85,5.65a18.73,18.73,0,0,1,1.08,4.14c-.09.41-.72.83-2.48,1.65s-2.38,1.23-2.49,1.7a2.13,2.13,0,0,0,0,1,26,26,0,0,0,2.9,2.81l7.59,6.72C31.27,37.25,32.7,38.48,33,38.48a1.82,1.82,0,0,0,.78-.38c.39-.3.53-.76.66-2.19s.26-1.88.67-2.15c.73-.49,12.85-1.57,13.49-1.2.86.51,1.07,4.18.4,7.36a13.52,13.52,0,0,1-3.46,6.25C42.31,49.67,40.78,50.09,36.05,48.75Z" transform="translate(0 0)"/><path class="a" d="M37.58,49.11c-10.93-2.58-21.41-9.61-29-19.49C5.17,25.25.82,16.78.57,14.08s1.22-6.27,4-9.35C6.55,2.6,9.26.94,10.88.91c1.21,0,1.21,0,3.12,5.76,2.27,6.87,2.69,8.3,2.57,8.74a6.73,6.73,0,0,1-2.41,1.46c-1.85.83-2.33,1.16-2.51,1.71a1.39,1.39,0,0,0,0,1.12c.26.46,18.83,17.08,20.33,18.19s2.52.24,2.53-2.51c0-1.7.23-1.82,4.25-2.19l6.52-.63c3.69-.37,3.78-.31,4,2.87.25,4.51-.78,7.36-3.9,10.77C43.74,48,43.06,48.52,42,49,40.42,49.59,39.72,49.62,37.58,49.11Z" transform="translate(0 0)"/><path class="a" d="M36.94,48.87A52.25,52.25,0,0,1,16.8,38.34,62.07,62.07,0,0,1,5,24.13a59.87,59.87,0,0,1-4-8.29C.11,12.9.77,10.12,3.24,6.36,5.31,3.22,11-.27,11.9,1.05c.28.41.88,2.1,3.15,8.91,1.9,5.69,1.89,5.79-.17,6.57-2.29.87-3.23,1.5-3.31,2.25-.1,1,.06,1.21,2.3,3.2L31,37.15a6,6,0,0,0,2,1.33c1.06,0,1.47-.76,1.51-2.86,0-1.7.54-2.05,3.32-2.31,11.24-1,10.4-1,10.84-.52.66.72.8,4.05.28,6.71a14.22,14.22,0,0,1-4.09,7.26C42.2,49.39,40.63,49.81,36.94,48.87Z" transform="translate(0 0)"/></svg>'
//                         },
//                         {
//                             block: 'link',
//                             mix: {block: 'tel', elem: 'link'},
//                             mods: {view: 'text'},
//                             url: 'tel:+7(3452)000-000',
//                             content: '8 (3452) 000-000',
//                             tabIndex: 9
//                         }
//                     ]
//                 },
//                 {
//                     block: 'button',
//                     mix: {block: 'communication', elem: 'button'},
//                     mods: {type: 'submit', theme: 'red'},
//                     text: 'заказать звонок',
//                     tabIndex: 10
//                 }
//             ]
//         },
//     ]
// }