// // ugly fix
// function pythagoras(a:unknown, b:unknown) {
//   return Math.sqrt((a as number)*(a as number) + (b as number)*(b as number))
// }

// better fix
function pythagoras(a:unknown, b:unknown) {
  if (typeof a === "number" && typeof b === "number") {
    return Math.sqrt(a*a + b*b)
  }
}

// makes sense as a function call
let hypotenuse = pythagoras(3, 5)
// improper function call (although 'true' is '1')
let hypotenuseBroken = pythagoras(true, false)

console.log ({
  hypotenuse,
  hypotenuseBroken
})