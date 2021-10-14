const Block = require('./blockchain/block')

const block = new Block("1","2","3","4")

console.log(block.toString())

console.log(Block.genesis().toString())

const fooBlock = Block.mineBlock(Block.genesis(),"5");

console.log(fooBlock.toString())