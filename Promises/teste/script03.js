// Method POST 
// Prática 01 auto-avaliação 75 % em andamento ...


fetch("https://reqres.in/api/users",{
    method: "POST",
    headers: {
        'Content-Type': "application/json"
    },
    body: JSON.stringify({name: "json"})
})
.then((response) => response.json())
.then((data) => console.log(data))