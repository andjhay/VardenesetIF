import { postUrl } from "./api.mjs";
import { fetchPosts } from "./fetch.mjs";

const posts = await fetchPosts(postUrl);

console.log(posts);

const pathOriginal = location.pathname;
const path = pathOriginal.slice(pathOriginal.lastIndexOf("/") + 1);
console.log(path);
const newsContainer = document.querySelector("#newsContainer");

posts.forEach((post) => {
  newsContainer.innerHTML += `<h2>${post.title}</h2>`;
});
