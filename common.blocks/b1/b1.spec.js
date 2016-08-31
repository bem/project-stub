modules.define(
    'spec',
    ['b1', 'i-bem__dom', 'jquery', 'BEMHTML'],
    function(provide, Button, BEMDOM, $, BEMHTML) {

describe('b1', function() {
    var b1;

    beforeEach(function() {
        b1 = BEMDOM.init($(BEMHTML.apply({ block: 'b1' })).appendTo('body'))
            .bem('b1');
    });

    afterEach(function() {
        BEMDOM.destruct(b1.domElem);
    });

    it('should be focused on pressrelease on itself', function() {
        b1.hasMod('focused').should.be.false;
        // b1.domElem
        //     .trigger('pointerpress')
        //     .trigger('pointerrelease');
        // b1.hasMod('focused').should.be.true;
    });
});

provide();

});
