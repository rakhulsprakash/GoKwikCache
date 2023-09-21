const DoublyLinkedListNode = require("../../structures/DoublyLinkedListNode")
const DoublyLinkedList = require("../../structures/DoublyLinkedList");
const EvictionStrategy = require("./EvictionStrategy");

class LRUEvictionStrategy extends EvictionStrategy {

    constructor() {
        super();
        this.list = new DoublyLinkedList();
        this.map = new Map();
    }

    refer(item) {

        if (this.map.has(item)) {

            let node = this.map.get(item);
            this.list.remove(node);
            this.list.addTail(node);

        } else {

            let node = new DoublyLinkedListNode(item);
            this.list.addTail(node);
            this.map.set(item, node);

        }
    }

    evict() {

        let data = this.list.head.data;
        this.map.delete(data);

        this.list.removeHead();

        return data;

    }

    display(item) {

        let output = [];
        for (let node = this.list.head; node != null; node = node.next)
            output.push(node.data);

        console.log(`Input: ${item} LRU: ${output}`);
    }
}

module.exports = LRUEvictionStrategy;