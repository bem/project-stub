'use strict';

const bemdeclToFs = require('bemdecl-to-fs');
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
 * @param  {string} content
 * @param  {?} map
 */
module.exports = function (content, map) {
  const callback = this.async();
  const query = loaderUtils.parseQuery(this.query);

  if (!query.tech) {
    return void callback(new Error(`Should specify tech for ${path.basename(__filename)}`));
  }

  let tech = query.tech;
  if (!Array.isArray(tech)) {
    tech = [tech];
  }

  const deps = vm.runInNewContext(content);
  bemdeclToFs(deps, levels.map(level => path.resolve(this.context, level)), tech)
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
