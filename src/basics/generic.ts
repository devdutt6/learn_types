// using generic types Here T can be replaced with any word or character like "Type/Typ etc."
function getReturn<T>(val:T): T{
  return val
}

// generic in arrow function
let arrowReturn = <T>(val: T): T => {
  return val
}

interface User {
  name: string
  age: number
}
let dev: User = {
  name: "Dev",
  age: 12
}

// using function with generic typing
let newDev = getReturn<User>(dev)
arrowReturn<User>(dev)

// defining array of generic type
function returnArray<T>(arr: Array<T> | T[]): T{
  return arr[0]
}
function returnArray2<T,>(arr: Array<T>): T{
  return arr[0]
}

// use of generic in class declaration
interface Course{
  title: string,
  author: string
}

interface Quiz{
  numberOfQuestion: number,
  title: string,
  tags: string[]
}

class Sellable<T> {
  public cart: T[]

  constructor(){
    this.cart = []
  }

  addToCart(product: T){
    this.cart.push(product);
  }
}
let java: Course = { title: "java", author: "devdutt" }
// using class having generic type
let coursecart: Sellable<Course> = new Sellable<Course>()
coursecart.addToCart(java);

// type narrowing: narrowing the possibilities of some type when the parameter can be of any listed possible type
interface Admin {
  name: string
  age: number
  isAdmin: boolean
}

// narrowing using in keyword/operator
function isAdminAccount(account: User | Admin): boolean{
  if("isAdmin" in account) return true
  else return false
}

// type specifiying
interface Fish{ swim: () => void }
interface Bird{ fly: () => void }

function isFish(pet: Fish | Bird): pet is Fish{
  return (pet as Fish).swim !== undefined
}

function getFood(pet: Fish | Bird): string{
  if(isFish(pet)){
    pet
    return "FISH FOOD"
  }
  else{
    pet
    return "BIRD FOOD"
  }
}

// exhaustive Check using never keyword to know that we are not missing any possiblities in narrowing
interface Square{
  kind: "square",
  side: number
}

interface Circle{
  kind: "circle",
  radius: number
}

interface Rectangle{
  kind: "rectangle",
  length: number
  width: number
}

type Shape = Square | Circle
// type Shape = Square | Circle | Rectangle

function getArea(shape: Shape){
  switch(shape.kind){
    case "square":
      return shape.side ** 2
    case "circle":
      return Math.PI * shape.radius ** 2
    default:
      const _exhaustiveCheck: never = shape;
      return _exhaustiveCheck;
  }
}

export = {}