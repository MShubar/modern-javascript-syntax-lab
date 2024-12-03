console.log('Exercise 1: ')
console.log(``)
const nums = [13, 87, 2, 89, 12, 4, 90, 63]
const numss = nums.map((currentElement) => {
  return currentElement * 2
})
console.log(numss)

console.log(`Exercise 2: `)
const pizzaToppings = ['Pineapple', 'Olives', 'Anchovies']
const [firstTopping, secondTopping] = pizzaToppings
console.log(firstTopping)
console.log(secondTopping)

console.log(`Exercise 3: `)
const car = {
  make: 'Audi',
  model: 'q5'
}
const { make, model } = car
console.log(make)
console.log(model)

console.log(`Exercise 4: `)
const pizzaTopping = ['Pineapple', 'Olives', 'Anchovies']
const controversialPizzaToppings = pizzaToppings

console.log(controversialPizzaToppings)

console.log(`Exercise 5: `)
const myCar = car
myCar.model = 'q7'
console.log(myCar)

console.log(`Exercise 6: `)
let propertyName = 'Tubli'
const userProfile = {
  username: 'Mohsen',
  age: '23',
  email: 'mohsen.salman099@gmail.com'
}

const selectedFruitCount = userProfile[propertyName]

console.log(selectedFruitCount)

console.log(`Exercise 7: `)
import name, { age, job } from './exportingFile.js'
console.log(name, age, job)

console.log(`Exercise 8: `)
const addThreeNumbers = (noun, adjective) => {
  return 'the ' + noun + ' is ' + adjective
}

addThreeNumbers('cat', 'white')

console.log('Exercise 9: ')
let pizza = 'tasty'
console.log(pizza === 'tasty' ? 'yum' : 'yuck')

console.log(`Exercise 10: `)
const localLangConfig = null
const LANG = localLangConfig || 'en'
console.log('Language setting:', LANG)

const userSavedTheme = null
const USER_THEME = userSavedTheme || 'light'

console.log('User theme setting:', USER_THEME)

console.log(`Exercise 11:`)
const adventurer = {
  name: 'Alice'
}

let cat

console.log(adventurer.cat?.age)
