# GoKwikCache

## EXECUTION

Please run "npm run start" command.

## DESCRIPTION

A LRU Cache that is extensible enough to support other eviction policies. The primary goal of this solution is to ensure SOLID principles are followed.

## EXPLANATION

- Cache Storage: Entity to hold data of cache with a designated capacity. eg: SetStorage, MapStorage etc.

- Structures: Folder for implementing primay datastructures. eg: LinkedList,Heap etc.

- Eviction Strategies: Strategy to implement eviction policies on caches. eg: LRU, FIFO, MRU etc.

- Cache: Entity with a storage and an eviction policy to refer items in O(1) time complexity. eg: LRU Cache

Other pointers:

- All the classes adhere to SOLID principles.
- Cache Factory follows Factory Pattern to create different flavours of Caches with different storages and different eviction strategies.
- Structures: DoublyLinkedList inorder to implement O(1) reordering. They do not have a maximum size.

## THINGS TO IMPROVE

- Exception handling with various error types could be added (Factory method to create different error message based on error codes)
- Unit Testing (A comprehensive test suite for testing various use cases)
- Other functionalities of classes such as LinkedLists' removeFromTail is yet to be implemented.
- Need to make variables private in classes for data abstraction
