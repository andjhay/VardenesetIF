export async function fetchPosts(url, options) {
  const response = await fetch(url);
  const results = await response.json();
  return results;
}