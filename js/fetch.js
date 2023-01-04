export const postUrl = "https://vardenesetif.no/wordpress/wp-json/wp/v2/posts/";

export async function getPosts() {
  const response = await fetch(postUrl);
  const results = await response.json();
  return results;
}

export const postsData = await getPosts();
