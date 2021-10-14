const Blockchain = require('.')
const Block = require('./block')

describe('Blockchain', () =>{
    let bc;

    beforeEach(() => {
        bc = new Blockchain();
        bcSecond = new Blockchain();
    })

    it('start genesis block', () => {
        expect(bc.chain[bc.chain.length - 1]).toEqual(Block.genesis());
    })

    it('add block', () => {
        const data = "hoge";

        bc.addBlock(data);

        expect(bc.chain[bc.chain.length - 1].data).toEqual(data);
    })

    it('valid chain',() => {
        bcSecond.addBlock('hoge');
        expect(bc.isValidChain(bcSecond.chain)).toBe(true);
    })

    it('invalid chain',() => {
        bcSecond.chain[0].data = 'invalid'
        expect(bc.isValidChain(bcSecond.chain)).toBe(false);
    })

    it('invalid middle chain',() => {
        bcSecond.addBlock('hoge');
        bcSecond.chain[1].data = 'invalid'
        expect(bc.isValidChain(bcSecond.chain)).toBe(false);
    })

    it('block chain update test',()=>{
        bcSecond.addBlock('new');
        bc.replaceChain(bcSecond.chain);

        expect(bc.chain).toEqual(bcSecond.chain);
    })

    it('block chain update test1',()=>{
        bc.addBlock('new');
        bc.replaceChain(bcSecond.chain);

        expect(bc.chain).not.toEqual(bcSecond.chain);
    })


})
