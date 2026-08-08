import assert from "node:assert/strict";
import LinkedList from "../lib/LinkedList.js";

const list = new LinkedList();

assert.equal(list.isEmpty, true);
assert.equal(list.removeHead(), undefined);

list.insertTail("Corcel");
list.insertHead("Fusca");
list.insert(1, "Gol");
list.insert(-1, "Belina");
list.insert(99, "Uno");

assert.equal(list.count, 5);
assert.equal(list.peekHead(), "Belina");
assert.equal(list.peekTail(), "Uno");
assert.equal(list.peek(2), "Gol");
assert.equal(list.peek(99), undefined);
assert.equal(list.indexOf("Gol"), 2);
assert.equal(list.indexOf("Ninguém"), -1);
assert.equal(list.remove(2), "Gol");
assert.equal(list.removeTail(), "Uno");
assert.equal(list.print(), "( [0]: Belina, [1]: Fusca, [2]: Corcel ), count: 3");

console.log("LinkedList: OK");
