import fruits from "./foods";
import { choice, remove } from "./helpers";

let fruit = fruits

const fruitRes = choice(fruit)
fruit = remove(fruit, fruitRes)
console.log(`I'd like one ${fruitRes} please`)
console.log(`Here you go: ${fruitRes}`)
console.log("Delicious! May I have another?")
console.log(`I'm sorry, we're all out. We have ${fruit.length} left`)
