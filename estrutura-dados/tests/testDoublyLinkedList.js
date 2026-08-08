import assert from "node:assert/strict";
import DoublyLinkedList from "../lib/DoublyLinkedList.js";

const list = new DoublyLinkedList();

assert.equal(list.isEmpty, true);
assert.equal(list.removeTail(), undefined);

list.insertTail("Fusca");
list.insertTail("Corcel");
list.insertTail("Corcel");
list.insert(-1, "Belina");
list.insert(99, "Uno");

assert.equal(list.count, 5);
assert.equal(list.peekHead(), "Belina");
assert.equal(list.peekTail(), "Uno");
assert.equal(list.indexOf("Corcel"), 2);
assert.equal(list.indexOf("Ninguém"), -1);
assert.equal(list.remove(2), "Corcel");
assert.equal(list.removeHead(), "Belina");
assert.equal(list.removeTail(), "Uno");
assert.equal(list.print(), "( [0]: Fusca, [1]: Corcel ), count: 2");

console.log("DoublyLinkedList: OK");
