import { postsData } from "./fetch.js";

console.log(postsData);

const pathOriginal = location.pathname;
const path = pathOriginal.slice(pathOriginal.lastIndexOf("/") + 1);

console.log(path);

function loadPosts(postsData) {
  const newsContainer = document.querySelector("#newsContainer");
  newsContainer.innerHTML = "";
  postsData.forEach((post) => {
    const dateFormat = `${post.date.slice(8, 10) + "-" + post.date.slice(5, 7) + "-" + post.date.slice(0, 4)}`;

    newsContainer.innerHTML += `<div class="col container my-2"><div class="card p-3"><h2 class="text-center">${post.title.rendered}</h2><h5>Dato: ${dateFormat}</h5>${post.content.rendered}</div></div>`;
  });
}

loadPosts(postsData);
