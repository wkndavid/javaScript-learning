const url = 'https://api.nasa.gov/planetary/apod?api_key=kjGSZtnFbwhhAuThWke37d5onXeOIeMtzpRfPx2b';

const loadingElement = document.querySelector('#loading');
const postContainer = document.querySelector('#posts-container');

const postPage = document.querySelector('#posts');
const postsContainer = document.querySelector('#posts-container');
const commentsContainer = document.querySelector('#comments-container');

// Pegando id da url 
const urlSearch = new URLSearchParams(document.location.search);
const postId = urlSearch.get('id');

// Pegando todos os POSTS com async / await

async function getAllPosts() {

    const response = await fetch(url);

    console.log(response);

    const data = await response.json();
    console.log(data);

    loadingElement.classList.add('hide');

    data.map((posts) => {
        const div = document.createElement('div');
        const title = document.createElement('h2');
        const body = document.createElement('p');
        const link = document.createElement('a');

        title.innerText = posts.title;
        title.innerText = posts.body;
        link.innerText = 'Ler';
        link.setAttribute('href', `/post.html?id=${posts.id}`);

        div.appendChild(title);
        div.appendChild(body);
        div.appendChild(link);

        postsContainer.appendChild(div);
    });
}
// Post Id

if (!postId) {
    getAllPosts(); 
} else {
    console.log(postId)
}

console.log(urlSearch)
