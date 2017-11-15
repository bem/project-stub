# BEM GRID [sharps](https://github.com/theprotein/sharps)

## Стили
```js
head: [
  { elem: 'css', url: '/assets/bem-grid/bem-grid.css' },
],
```

## Разметка
```js
{
  block : 'row',
  content : [
    {
      elem : 'col',
      elemMods : { sw : 9 },
      content : '9'
    },
    {
      elem : 'col',
      elemMods : { sw : 3 },
      content : '3'
    }
  ]
}
```
