// with enums we can define the options
enum UserType {
  ADMIN,
  CLIENT,
  SUPERVISOR,
}

const cl = UserType.CLIENT

// by default the ADMIN will get value 0 and CLIENT will get value 1 but we can change that
enum SeatType {
  AISLE = 'AISLE',
  WINDOW = 'WINDOW',
  MIDDLE = 'MIDDLE',
}
// above code by default will create a iife when it will be transpiled in js to prevent that we can use const keyword
const enum SeatTypeCrew {
  CAPTAIN ,
  CREW,
  TRAVELLER,
}

// next file './interface.ts'