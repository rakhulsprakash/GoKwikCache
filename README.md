# GoKwikCache

To run the app, please run "npm run start" command.

A Low Level Design of a Cache that runs on LRU Strategy, but can accept other Eviction Strategies as well.

Folder Structure:

Cache Factory: Factory Patter to create different flavours of Caches with different storages and different eviction strategies.

Storage: Interface to hold data with a designated capacity within a Cache such as MapStorage.

Structures: DoublyLinkedList inorder to implement O(1) reordering. They do not have a maximum size.
