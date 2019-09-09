interface Counter {
  getCount: () => number
  increment: (n: number) => void
}

let f: Counter = {
  getCount: () => 1, 
  increment: (n:number) => {return null}
}

console.log(f)