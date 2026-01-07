# Event Loop Deep Dive

**Concept**: How JavaScript's event loop works

The JavaScript event loop is the mechanism that handles asynchronous operations. Here's how it works:

## Call Stack
The call stack executes synchronous code first. It follows LIFO (Last In, First Out) principle.

## Task Queue (Macrotasks)
Contains callbacks from:
- `setTimeout`
- `setInterval`
- I/O operations

## Microtask Queue
Contains callbacks from:
- `Promise.then()`
- `queueMicrotask()`
- `MutationObserver`

## Execution Order
1. Execute all synchronous code in call stack
2. Execute all microtasks
3. Execute one macrotask
4. Repeat from step 2

```javascript
console.log('1');

setTimeout(() => console.log('2'), 0);

Promise.resolve().then(() => console.log('3'));

console.log('4');

// Output: 1, 4, 3, 2
```

**Key Insight**: Microtasks always execute before the next macrotask!


---

*Generated on 2026-01-07*
