import { loadCarousel } from "./carousel.js";
import { postsData, pageData, mediaData } from "./fetch.js";
import { loadContent } from "./pages.js";
import { loadPosts } from "./posts.js";

const pathOriginal = location.pathname;
const path = pathOriginal.slice(pathOriginal.lastIndexOf("/") + 1, -5);

if (path == "") {
  loadCarousel(mediaData);
} else if (path == "nyheter") {
  loadPosts(postsData);
} else {
  loadContent(pageData, path);
}
