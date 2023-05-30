// this is union type
let avar: string | number;
avar = "23"
avar = 23

// also works with type aliases
type User = {
  name: string
}
type Admin = {
  username: string
}

let profile: User | Admin = { name: "devdutt" }
profile = { username: "devdutt" }

// problem with union type
// console.log(profile.name) // you cant guess what the current type of the object can be so you might run into error in such cases

// array we have to allow number and string in array
let arr1: number | string[] // this signifies the variable can be a number or an array of string not an array of string or number
let arr2: number[] | string[] // this signifies the varible can be either array of numbers or array of string
// to solve this we can either
let arr3: (number|string)[] = [12, "12"]
let arr4: Array<number|string> = [13, "1!3"]

export = {}

// next file './interface.ts'