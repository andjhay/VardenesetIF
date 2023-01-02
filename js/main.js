import { posts } from "./fetch.js";

console.log(posts);

const pathOriginal = location.pathname;
const path = pathOriginal.slice(pathOriginal.lastIndexOf("/") + 1);

const newsContainer = document.querySelector("#newsContainer");

posts.forEach((post) => {
  const dateFormat = `${post.date.slice(8, 10) + "-" + post.date.slice(5, 7) + "-" + post.date.slice(0, 4)}`;

  newsContainer.innerHTML += `<div class="col container my-2"><div class="card p-3"><h2>${post.title.rendered}</h2><h5>${dateFormat}</h5>${post.content.rendered}</div></div>`;
});
