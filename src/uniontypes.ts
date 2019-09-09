// two types together (union type) can be a new variable
type Foo = string | {name: string}

let f1: Foo = { name: "James" }
let f2: Foo = "normal string"

console.log("f1 type:", typeof f1, "\nf2 type:", typeof f2)

// can make a generic type, with arguments to be passed at usage
type wrapGeneric<T> = (value: T) => {data: T}

// // without generic types
// const wrapString: (value: string) => { data: string } = (v: string) => ({ data: v })
// const wrapBoolean: (value: boolean) => { data: boolean } = (v: boolean) => ({ data: v })

// with generic types
const wrapString: wrapGeneric<string> = (v: string) => ({ data: v })
const wrapBoolean: wrapGeneric<boolean> = (v: boolean) => ({ data: v })

console.log(wrapString("true"), wrapBoolean(true))
