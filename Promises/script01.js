// Fetch com headers
fetch("https://reqres.in/api/users", {
    method: "POST",
    headers: {
        "Content-Type": "application/json",
    },
    body: JSON.stringify({name: "Isaac"}),

})
.then((resposta) => resposta.json())
.then((data) => console.log(data));