import { postsData, pageData } from "./fetch.js";
import { loadInnebandy, loadSvomming, loadTrim } from "./pages.js";
import { loadPosts } from "./posts.js";

const pathOriginal = location.pathname;
const path = pathOriginal.slice(pathOriginal.lastIndexOf("/") + 1);

console.log(path);
console.log(postsData);
console.log(pageData);

if (path === "nyheter.html") {
  loadPosts(postsData);
}
if (path === "innebandy.html") {
  loadInnebandy(pageData);
}
if (path === "trimogturn.html") {
  loadTrim(pageData);
}
if (path === "svomming.html") {
  loadSvomming(pageData);
}
