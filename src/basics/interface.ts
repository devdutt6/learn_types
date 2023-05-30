// declaring interface
interface User {
  readonly id: number,
  name: string,
  age: number,
  gender ?: string,
  getAge(): number
  addNumber: (a:number, b:number) => number
}

// re-opening interface
interface User {
  googleId?: number
}

interface Social {
  facebook?: string
}

// extending already existing interface
interface Admin extends User ,Social {
  role: number
}

// examples
let someone: User = {
  id: 1,
  name: 'devdutt',
  age: 23,
  googleId: 12,
  getAge: () => {
    return 23
  },
  addNumber: (some, nmber) => {
    return some+nmber;
  }
}

let someadmin: Admin = {
  id: 1,
  name: 'devdutt',
  role: 0,
  age: 23,
  googleId: 12,
  getAge: () => {
    return 23
  },
  addNumber: (some, nmber) => {
    return some+nmber;
  }
}

export = {}

// next file "./class.ts"