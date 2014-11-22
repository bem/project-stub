# BEM project-stub with [php-bem-bh](https://github.com/zxqfox/php-bem-bh)

## Installation
```
git clone git@github.com:bem/project-stub.git -b php-bem-bh
cd project-stub
npm i
```

## Requirenments
It assumes there's `vendor/php-bem-bh` installed

```bash
mkdir vendor
cd vendor
git clone git@github.com:zxqfox/php-bem-bh.git
cd ..
```

## Build
```bash
./node_modules/.bin/bem make
```

or

```bash
./node_modules/.bin/enb make
```

## Run
```bash
php desktop.bundles/index/index.php
```

## Development
1. Edit desktop.bundles/index/index.php for server logic
2. Create new blocks in desktop.blocks/
