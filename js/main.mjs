import { postUrl } from "./api.mjs";
import { fetchPosts } from "./fetch.mjs";

const posts = await fetchPosts(postUrl);

console.log(posts);
