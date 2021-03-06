const SHA256 = require('crypto-js/sha256')

class Block{
    constructor(timestamp, lastHash, hash, data){
        this.timestamp = timestamp;
        this.lastHash = lastHash;
        this.hash = hash;
        this.data = data;
    }

    toString(){
        return `Block
            Timestamp: ${this.timestamp}
            lastHash: ${this.lastHash.substring(0,10)}
            hash: ${this.hash.substring(0,10)}
            data: ${this.data}`;
    }

    static genesis(){
        return new this("timestamp","----","h4r0-h123",[]);
    }

    static mineBlock(lastBlock, data){
        const timestamp = Date.now();
        const lastHash = lastBlock.hash;
        const hash = this.hash(timestamp, lastHash, data);

        return new Block(timestamp, lastHash, hash, data);
    }

    static hash(timestamp, lastHash, data){
        return SHA256(`${timestamp}${lastHash}${data}`).toString();
    }

    static blockHash(block){
        const {timestamp, lastHash, data} = block;
        return Block.hash(timestamp, lastHash, data);
    }

}

module.exports = Block;
