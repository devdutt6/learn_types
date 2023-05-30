// here is how we can declare function which takes object as paramaters and is returning a object
function createUser(user: {name: string, age: number}): { id: number } {
  return { id: user.age };
}

// but there is a better way to do above same thing
// 1. declare a type alias
type UserObj = {
  name: string,
  age: number
}

type UserResp = {
  id: number
}
// 2. use that alias as parameter and return type
function createUserToo(user: UserObj): UserResp {
  // user.name, user.age
  return { id: user.age };
}


// with question mark we can declare that field as optional typescript wont complaint if the field does not exist and readonly wont allow someone to change the value of that field
type CreatedUser = {
  readonly _id: number
  name: string
  age: number
  creditcard?: number
}

let newUser: CreatedUser = {
  _id: 12,
  name: "devdutt",
  age: 23
}

// newUser._id = 21;
newUser.name = "new name";

// we can use already existsing types and create a new type
type CreditNumber = {
  cardNumber: number
}
type CreditName = {
  nameOnCard: string
}

type CardDetails = CreditNumber & CreditName & { cvv: number }
let usercredit: CardDetails = {
  cardNumber: 12,
  nameOnCard: 'devdutt',
  cvv: 12
}

// next file './array.ts'