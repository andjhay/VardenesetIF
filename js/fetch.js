const url = "https://vardenesetif.no/wordpress/wp-json";

const posts = "/wp/v2/posts?_embed";
const media = "/wp/v2/media";
const pages = "/wp/v2/pages";

async function getData(url) {
  const response = await fetch(url);
  const results = await response.json();
  return results;
}

export const postsData = await getData(url + posts);
export const pageData = await getData(url + pages);
export const mediaData = await getData(url + media);
