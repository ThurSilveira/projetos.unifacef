import Queue from "lib/Queue.js";

let testQueue = new Queue()
console.log(testQueue.print())
console.log("Esta vazia?", testQueue.isEmpty)

//inserções na testQueue
testQueue.enqueue("Alexandre")
testQueue.enqueue("João")
testQueue.enqueue("Maria")
testQueue.enqueue("Joaquim")

console.log(testQueue.print())

let proximo = testQueue.peek()
console.log({proximo})

let atendido = testQueue.dequeue()
console.log({atendido})
console.log(testQueue.print())
proximo = testQueue.peek()
console.log({proximo})

testQueue.enqueue("Sergio")
console.log(testQueue.print())