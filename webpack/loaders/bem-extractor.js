'use strict';

const bemNaming = require('bem-naming');
const glob = require('globby');
const loaderUtils = require('loader-utils');
const path = require('path');
const vm = require('vm');

const levels = [
  '../../libs/bem-core/common.blocks',
  '../../libs/bem-core/desktop.blocks',
  '../../libs/bem-components/common.blocks',
  '../../libs/bem-components/desktop.blocks',
  '../../libs/bem-components/design/common.blocks',
  '../../libs/bem-components/design/desktop.blocks',
  '../../common.blocks',
  '../../desktop.blocks',
];

/**
 * @param  {object} decl
 * @param  {string} decl.block
 * @param  {string} decl.elem
 * @param  {string} decl.modVal
 * @param  {string} decl.modName
 * @return {string}
 */
function resolveDeps(decl) {
  if (bemNaming.isElemMod(decl)) {
    return path.join(decl.block, '__' + decl.elem, '_' + decl.modName, bemNaming.stringify(decl));
  }

  if (bemNaming.isElem(decl)) {
    return path.join(decl.block, '__' + decl.elem);
  }

  if (bemNaming.isBlockMod(decl)) {
    return path.join(decl.block, '_' + decl.modName, bemNaming.stringify(decl));
  }

  return path.join(decl.block, decl.block);
}

/**
 * @param  {boolean|string} modVal
 * @return {string}
 */
function resolveModVal(modVal) {
  return typeof modVal === 'string'
    ? modVal
    : 'yes';
}

/**
 * @param  {string} content
 * @param  {?} map
 */
module.exports = function (content, map) {
  const callback = this.async();
  const query = loaderUtils.parseQuery(this.query);

  if (typeof query.tech !== 'string') {
    return void callback(new Error(`Should specify tech for ${path.basename(__filename)}`));
  }

  const deps = vm.runInNewContext(content);
  const pattern = deps.map(resolveDeps).reduce((total, decl) => {
    return total.concat(levels.map(level => path.resolve(this.context, level, `${decl}.${query.tech}`)));
  }, []);

  glob(pattern)
    .then(files => {
      const imports = files
        .map(file => {
          return `require(${loaderUtils.stringifyRequest(this, file)});`
        })
        .join('\n');

      callback(null, imports);
    })
    .catch(callback);
};
