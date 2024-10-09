const URL = `https://dummyjson.com/posts`;
const containerDiv = document.getElementById("container");

const loadingH2 = document.createElement('h2')
loadingH2.textContent = "Loading..."
containerDiv.appendChild(loadingH2)

fetch(URL)
.then(response => response.json())
.then(data => {
  containerDiv.removeChild(loadingH2)
  console.log(data);
  
  data.posts.forEach(post => {
    const postDiv = document.createElement("div");

    const titleH2 = document.createElement("h2");
    const bodyP = document.createElement("p");
    const likesSpan = document.createElement("span");
    const dislikesSpan = document.createElement("span");
    
    titleH2.textContent = post.title;
    bodyP.textContent = post.body;
    likesSpan.textContent = `Likes: ${post.reactions.likes} \n/ `;
    dislikesSpan.textContent = `Dislikes: ${post.reactions.dislikes}`;

    postDiv.appendChild(titleH2);
    postDiv.appendChild(bodyP);
    postDiv.appendChild(likesSpan);
    postDiv.appendChild(dislikesSpan);

    containerDiv.appendChild(postDiv);
  });

});