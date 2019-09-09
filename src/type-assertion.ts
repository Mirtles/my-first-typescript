console.table({"Loaded?":true, "Changed?": true})

// type assertion: danger zone!
let foo: any = "hey there"
// asserting that foo is a string
let bar: string = foo as string
// console.log(bar.toUpperCase())

let a: number = 1
let b: string = "hello"
let c: boolean[] = [true, false]
let d: object = {}
console.log("Output of [a,b,c,d]:", [a,b,c,d])  