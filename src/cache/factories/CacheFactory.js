const SetStorage = require("../storage/SetStorage");
const EvictionStrategy = require("../eviction_strategies/EvictionStrategy");
const LRUEvictionStrategy = require("../eviction_strategies/LRUEvictionStrategy");
const Cache = require("../Cache")

class CacheFactory {

    static STRATEGY = {
        LRU: "LRU",
        MRU: "MRU",
        FIFO: "FIFO"
    }

    static DEFAULT_SIZE = 3;
    static DEFAULT_STRATEGY = CacheFactory.STRATEGY.LRU;

    constructor() {}

    static create(capacity, strategy) {

        // if (strategy == CacheFactory.STRATEGY.FIFO) return new Cache(new Storage(capacity, new EvictionStrategy()));

        // if (strategy == CacheFactory.STRATEGY.MRU) return new Cache(new Storage(capacity, new EvictionStrategy()));

        if (strategy == CacheFactory.STRATEGY.LRU) return new Cache(new SetStorage(capacity), new LRUEvictionStrategy());
    }
}

module.exports = CacheFactory;