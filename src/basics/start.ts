// type declaring in ts let 'VARIABLE_NAME': TYPE = value
// string
let myName: string = "devdutt"
// boolean
let isMale: boolean = true
// number
let myAge: number = 23

// TYPE INFERENCE
let myEmail = "devduttchudasama1339@gmail.com"
// here type script automatically inferences that the type of variable 'myEmail' will be string as we are assigning varible a value and declaring at a same time
// so dont overuse type defining as ts is smart enough to infer type in such cases

// the cases when ts wont be able to infer type so it will implicitly apply a type called 'any'
let myFavSong

function myCurrentFavSong() {
  return "idgaf";
}

// hover over 'myFavSong' and you will see here ts dont know what will function return till runtime so it wont be able to infer type
myFavSong = myCurrentFavSong

// next file function.ts