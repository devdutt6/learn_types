// class declaration on class with some keywords like readonly and access modifiers like private, protected and public by default the access will be public
class User {
  name: string // public name: string
  age: number
  readonly role: "user"
  protected userId: number

  constructor( name: string, age: number, userId: number ){
    this.name = name;
    this.age = age;
    this.userId = userId;
    this.role = "user"
  }
}

// this class extends all the public properties and protected values like userId which we can modify and use but it wont inherit private properties which are only accessible in Class itself
class Subuser extends User {
  constructor(name: string, age: number, userId: number){
    super(name, age, userId)
  }
  updateUserId(userId: number): void {
    this.userId = userId
  }
}


// getters and setters: setters dont have any return type in ts
class Admin {
  readonly id: number
  private _count = 1
  constructor (public name: string, private age: number){
    this.name = name
    this.age = age
    this.id = 1
  }

  // getter
  get getName(): string {
    return this.name
  }

  //setter
  set setName(name: string) {
    this.name = name
  }

  // public function
  getFullname(): string{
    return `full ${this.name}`
  }

  // private function
  private getCount(){
    return this._count;
  }

  some(){
    // using private function only allowed within class
    const count = this.getCount()
  }
}

const dev = new User('devdutt', 23, 1);
// dev.role
// dev.userId
const subdev = new Subuser('devdutt', 23, 1);
subdev.updateUserId(12)
// subdev.userId
const ad = new Admin('admin', 23);
// ad.age


// class impliments interfaces and extends other class
interface ShareContent {
  typeOfContent: string
  preview: boolean
  thumbnail?: string
  expiring?: number
}

interface ExtraDetails {
  setExpiry(on: number): void
}
// multiple interfaces
class MediaShare implements ShareContent, ExtraDetails {
  public expiring: number
  constructor(
    public typeOfContent: string,
    public preview: boolean,
  ){
    this.preview = preview
    this.typeOfContent = typeOfContent
    this.expiring = 0
  }

  setExpiry(num: number): void {
    this.expiring = num
  }
}

// abstract classes just define how the class will look like it is just like a representation of real class
// the class extending it will have to follow the classes description the function declared with keyword abstract will have to be defined in the class extending it
abstract class SuperUser {
  constructor(public name: string, public role: "SA"){
    // this.name = name
  }

  abstract setAdmin(user: string): void
  getAdmin(): SuperUser {
    return this
  }
}
// the class extending abstract class followed the declarations and also defined the functions which needed to defined
class Super extends SuperUser {
  constructor(name: string, role: "SA", email: string){
    super(name, "SA")
    this.name = name
  }

  getAdmin(): SuperUser {
    return this
  }

  setAdmin(user: string): void {
    this.name = user
  }
}

export = {}

// next file "./generic.ts"