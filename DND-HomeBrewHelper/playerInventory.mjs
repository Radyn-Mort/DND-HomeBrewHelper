import { generateFood } from "./generateFood.mjs";
import { generateGems } from "./generateGems.mjs";
import { generateHerb } from "./generateHerb.mjs";
import { generateMetal } from "./generateMetal.mjs";

let food = generateFood(10)
let gems = generateGems(10)
let herb = generateHerb(10)
let metal = generateMetal(10)
document.open(inventory.txt)
console.log(food)
console.log(gems)
console.log(herb)
console.log(metal)