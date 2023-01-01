import { posts } from "./fetch.js";

console.log(posts);

const pathOriginal = location.pathname;
const path = pathOriginal.slice(pathOriginal.lastIndexOf("/") + 1);
console.log(path);
const newsContainer = document.querySelector("#newsContainer");

posts.forEach((post) => {
  newsContainer.innerHTML += `<h2>${post.title}</h2>`;
});
