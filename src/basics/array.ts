const arr1 = []
// arr1.push("dev"); // shows error that cant assign to type of never

// this signifies empty array of type never so also cant add values
const arr2: [] = []
// just like
const pi: 3.14 = 3.14
let VARIATION: 'SHORT' | 'LONG' | 'MID'

// there are more than one way to declare array
// 1 this will signify array of type values string
let arr3: string[] = []
arr3.push("devdutt")
// 2
const arr4: Array<number> = []
arr4.push(12)

// also we can use it with type alias
type User = {
  name: string
  age: number
}
const arr5: Array<User> = []
const arr6: User[] = []
let newUser = { name: "devdutt", age: 12 }
arr5.push(newUser)
arr6.push(newUser)

// for matrix
const arr7: number[][] = []

//extra
// below signifies map function returning array of string
arr3 = arr5.map((val): string => {
  return `haha ${val}`
})

export = {}

// next file './union.ts'