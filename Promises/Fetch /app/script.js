const response = fetch('https://jsonplaceholder.typicode.com/posts')
.then(function(responseData){
    console.log(responseData);
});