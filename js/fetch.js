const postUrl = "https://vardenesetif.no/wordpress/wp-json/wp/v2/posts?_embed";
const pageUrl = "https://vardenesetif.no/wordpress/wp-json/wp/v2/pages";

async function getData(url) {
  const response = await fetch(url);
  const results = await response.json();
  return results;
}

export const postsData = await getData(postUrl);
export const pageData = await getData(pageUrl);
