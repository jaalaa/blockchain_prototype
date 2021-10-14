const Block = require('./block');

describe('Block',() => {
    
    let data, lastblock, block;
    
    beforeEach(() => {
        data = 'sato';
        lastblock = Block.genesis();
        block = Block.mineBlock(lastblock, data)
    })

    it('data test', () => {
        expect(block.data).toEqual(data);
    })

    it('hash test', () => {
        expect(block.lastHash).toEqual(lastblock.hash);
    })
})