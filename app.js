const CacheFactory = require("./src/cache/factories/CacheFactory");

const cacheA = CacheFactory.create(CacheFactory.DEFAULT_SIZE, CacheFactory.DEFAULT_STRATEGY);
const cacheB = CacheFactory.create(CacheFactory.DEFAULT_SIZE, CacheFactory.DEFAULT_STRATEGY);
const cacheC = CacheFactory.create(CacheFactory.DEFAULT_SIZE, CacheFactory.DEFAULT_STRATEGY);
const cacheD = CacheFactory.create(CacheFactory.DEFAULT_SIZE, CacheFactory.DEFAULT_STRATEGY);

// For custom testing
const cacheE = CacheFactory.create(CacheFactory.DEFAULT_SIZE, CacheFactory.DEFAULT_STRATEGY);
const cacheF = CacheFactory.create(CacheFactory.DEFAULT_SIZE, CacheFactory.DEFAULT_STRATEGY);

console.log("\nTestCase A: Simple cache refers with no duplicates");
cacheA.refer(1);
cacheA.refer(2);
cacheA.refer(3);

console.log("\nTestCase B: Simple cache refers with duplicates");
cacheB.refer(1);
cacheB.refer(1);
cacheB.refer(1);

console.log("\nTestCase C: Cache refers with no duplicates");
cacheC.refer(1);
cacheC.refer(2);
cacheC.refer(3);
cacheC.refer(4);
cacheC.refer(5);

console.log("\nTestCase D: Combination tests");
cacheD.refer(1);
cacheD.refer(2);
cacheD.refer(1);
cacheD.refer(2);
cacheD.refer(3);
cacheD.refer(2);
cacheD.refer(3);
cacheD.refer(1);
cacheD.refer(5);
cacheD.refer(2);