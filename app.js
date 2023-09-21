/**
 * Design LRU cache
*/

class Node {
    constructor(data = null) {
        this.data = data;
        this.previous = null;
        this.next = null;
    }
}

class Strategy {
    static CACHE_MISS = "CACHE MISS";
    static CACHE_HIT = "CACHE HIT";
    constructor() {
        this.size = 0;
    }
    refer(item) {}
}

class LRUStrategy extends Strategy {

    constructor(size) {
        super();
        this.CAPACITY = size;
        this.map = new Map();
        this.head = null;
        this.tail = null;
    }
    refer(item) {
        if (this.map.has(item)) {
            let node = this.map.get(item);
            this.remove(node);
            this.addToTail(node);
        } else {
            let node = new Node(item);
            if (this.map.size == this.CAPACITY) {
                let lru_node = this.head;
                this.map.delete(lru_node.data);
                this.shiftHead();
                this.addToTail(node);
            } else {
                this.addToTail(node);
            }
            this.map.set(item, node);
        }
    }
    print() {
        let node = this.head;
        let output = [];
        while(node != null) {
            output.push(node.data);
            node = node.next;
        }
        console.log(output);
    }
    remove(node) {
        if (node == this.head) {
            this.shiftHead(node);
        } else if (node == this.tail) {
            this.tail = node.previous;
            this.tail.next = null;
        } else {
            node.next.previous = node.previous;
            node.previous.next = node.next;
        }
    }
    shiftHead() {
        if (this.head == null ||
            this.head.next == null) {
            this.head = null;
            this.tail = null;
            return;
        }

        this.head = this.head.next;
        this.head.previous = null;
    }
    addToTail(node) {
        node.next = null;
        if (this.tail == null) {
            this.tail = node;
            this.head = node;
        } else {
            node.previous = this.tail;
            this.tail.next = node;
            this.tail = node;
        }
    }
}

class FIFOStrategy extends Strategy {
    constructor() {
        super();
    }
    get(item) {
    }


}

class Cache {
    constructor(size = 3, strategy = new LRUStrategy(size)) {
        this.strategy = strategy;
    }
    refer(item) {
        this.strategy.refer(item);
        this.strategy.print();
    }
}

let cacheA = new Cache(3);
cacheA.refer(5);
cacheA.refer(5);
cacheA.refer(6);
cacheA.refer(5);
cacheA.refer(7);
cacheA.refer(8);
cacheA.refer(9);
cacheA.refer(10);
cacheA.refer(8);
cacheA.refer(8);

// cacheA.refer(1);
// cacheA.refer(2);
// cacheA.refer(5);
// cacheA.refer(7);
// cacheA.refer(8);
// cacheA.refer(7);
// cacheA.refer(8);
// cacheA.refer(5);