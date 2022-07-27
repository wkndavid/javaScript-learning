// Fetch API método POST na API Reqres
// Uso do método then()
// Conversão da resposta em JSON
// Adição de headers - 'Content-Type'
// Usando body parar inserir dados na variável name 
// Usando método JSON.stringfy() para converter dados

fetch('https://reqres.in/api/users', {
    method: 'POST',
    headers: {
        'Content-Type': "application/json"
    },
    body: JSON.stringify({name: 'David Js'})
})
.then((response) => response.json())
.then((data) => console.log(data));