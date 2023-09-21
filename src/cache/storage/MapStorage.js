const Storage = require("./Storage");

class MapStorage extends Storage {

    constructor(capacity) {
        super(capacity);
        this.set = new Set();
    }

    isFull() {
        return this.set.size == this.capacity;
    }

    contains(data) {
        return this.set.has(data);
    }

    add(data) {
        if (this.isFull())
            return false; // TODO: Should throw an exception
        return this.set.add(data);
    }

    remove(data) {
        if (!this.set.has(data))
            return false; // TODO: Should throw an exception
        return this.set.delete(data);
    }

    display(item) {
        let output = [];
        this.set.forEach((item) => output.push(item));
        console.log(`Input: ${item} Storage: ${output}`);
    }
}

module.exports = MapStorage;