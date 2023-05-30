// specify parameter type
function addThree(num: number){
  return num + 3
}

// specify parameter type and return type of a function
function addTwo(num: number): number{
  return num + 2
}

// declaring default values
function login(email: string, password: string, name: string = "devdutt"): boolean{
  if(email && password) return true
  return false
}

// function that returns nothing
function returnVoid(name: string): void {
  // somefunctions
}

// function from which the process never returns specially for functions like handleError
function handleError(errmsg: string): never {
  throw new Error(errmsg)
}

// for the array functions
let arrayFun = (param: string): string => {
  return "devdutt"
}

addTwo(5)
login("d@d.com", "d")

// next file './object.ts'