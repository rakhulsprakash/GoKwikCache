class Cache {

    constructor(storage, strategy) {
        this.storage = storage;
        this.strategy = strategy;
    }

    refer(item) {

        if (this.isEvictionRequired(item))
            this.evict();

        this.add(item);

        this.display(item);

        return item;
    }

    add(item) {
        this.storage.add(item);
        this.strategy.refer(item);
    }

    isEvictionRequired(item) {
        return !this.storage.contains(item) && this.storage.isFull();
    }

    evict() {
        let data = this.strategy.evict();
        this.storage.remove(data);
    }

    display(item) {
        // this.storage.display(item); // Uncomment to visualise the storage
        this.strategy.display(item);
    }
}

module.exports = Cache;