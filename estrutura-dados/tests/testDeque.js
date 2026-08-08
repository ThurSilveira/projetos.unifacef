import assert from "node:assert/strict";
import Deque from "../lib/Deque.js";

const deque = new Deque();

assert.equal(deque.isEmpty, true);
assert.equal(deque.removeFront(), undefined);
assert.equal(deque.removeBack(), undefined);

deque.addFront("Arroz");
deque.insertFront("Feijão");
deque.addBack("Sabão");
deque.insertBack("Shampoo");

assert.equal(deque.peekFront(), "Feijão");
assert.equal(deque.peekBack(), "Shampoo");
assert.equal(deque.deleteFront(), "Feijão");
assert.equal(deque.deleteBack(), "Shampoo");
assert.equal(deque.print(), "[ (1º): Arroz, (2º): Sabão ]");

console.log("Deque: OK");
