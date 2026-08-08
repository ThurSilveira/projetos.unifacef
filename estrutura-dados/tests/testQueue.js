import assert from "node:assert/strict";
import Queue from "../lib/Queue.js";

const queue = new Queue();

assert.equal(queue.isEmpty, true);
assert.equal(queue.peek(), undefined);
assert.equal(queue.dequeue(), undefined);

queue.enqueue("Alexandre");
queue.enqueue("João");
queue.enqueue("Maria");

assert.equal(queue.isEmpty, false);
assert.equal(queue.peek(), "Alexandre");
assert.equal(queue.dequeue(), "Alexandre");
assert.equal(queue.peek(), "João");
assert.equal(queue.print(), "[ (1º): João, (2º): Maria ]");

console.log("Queue: OK");
