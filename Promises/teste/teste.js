fetch(`https://pokeapi.co/api/v2/`, {
    method: "GET",
})
.then((resposta) => {
    return resposta.json()
})
.then((data) => {
    console.log(data)
})
