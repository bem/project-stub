module.exports = function(deps) {
    return deps.entities.map(function(entity) {
        if (!entity.modName) return entity;

        var oldEntity = {
            block: entity.block,
            mod: entity.modName,
            val: entity.modVal
        };

        entity.elem && (oldEntity.elem = entity.elem);

        return oldEntity;
    });
};
