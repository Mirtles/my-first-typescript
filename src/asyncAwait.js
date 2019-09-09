const fetch = require('superagent')

async function getData() {
  const response = await fetch('https://swapi.co/api/people/1/')
  const luke = response.body
  const response2 = await fetch(luke.homeworld)
  const tatooine = response2.body
  const response3 = await fetch(tatooine.residents[tatooine.residents.length - 1])
  const person = response3.body
  const name = person.name
  console.log(name)
  return name
}

getData()