// Вставляем стили перед каждым первым появлением БЭМ-сущности в BEMJSON
oninit(function(exports) {
    var ptp = exports.BEMContext.prototype;

    ptp._pushedCSS = {};

    // TODO: рекваирить правильный путь или борщик
    ptp._entitiesCSS = require('./css.json');

    ptp._onNode = function(node) {
        if (!node) return [];
        if (typeof node === 'string') return [node];

        node.mods || (node.mods = {});
        node.elemMods || (node.elemMods = {});

        // запоминаем текущую сущность без учета модификаторов
        var entities = [node.elem ? node.block + '__' + node.elem : node.block],
            modNames = Object.keys(node.mods),
            elemModNames = Object.keys(node.elemMods);

        // накапливаем модификаторы
        modNames.concat(elemModNames).forEach(function(modName) {
            // naming.stringify() для бедных
            var buf = node.block;
            node.elem && (buf += '__' + node.elem);
            buf += '_' + modName;

            var modVal = node.elemMods[modName] || node.mods[modName];

            if (!modVal) return;

            if (modVal !== true) {
                buf += '_' + modVal;
            }

            entities.push(buf);
        }, this);

        return entities;
    };
});

// TODO: replace()
block('*').match(function() { return this.block; }).def()(function() {
    var _this = this,
        entities = [].concat(this.ctx.mix || [], apply('mix') || []).reduce(function(acc, item) {
            return acc.concat(_this._onNode(item));
        }, this._onNode(this));

    var reqCss = this._pushedCSS,
        styles = [];

    entities.forEach(function(entityKey) {
        var entityCss = this._entitiesCSS[entityKey];

        if (!entityCss || (reqCss && reqCss[entityKey])) return;

        reqCss[entityKey] = true;

        // обрабатываем page отдельно, т.к. нельзя вставлять перед doctype
        if (_this.block === 'page' && this.ctx.head) {
            this.ctx.head.push({
                elem: 'css',
                content: entityCss
            });

            return;
        }

        entityCss.forEach(function(css) {
            styles.push(css);
        });
    }, this);

    return styles.length ? [
        '<style>',
        styles.join(''),
        '</style>',
        applyNext()
    ].join('') : applyNext();
});
