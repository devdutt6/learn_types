// using tuple you can specify specific type of element at specific index in array
let arr1: [string, number] = ["devdut", 12];
// still you can use array methods like push, pop, unshieft etc and typescript wont show any errors
arr1.push(12);

// usecase
type RGB = [number, number, number]
let arr2: RGB = [123, 123, 123]

// next file './enum.ts'