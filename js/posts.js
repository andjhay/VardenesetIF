export function loadPosts(postsData) {
  const newsContainer = document.querySelector("#newsContainer");
  newsContainer.innerHTML = "";
  postsData.forEach((post) => {
    const dateFormat = `${post.date.slice(8, 10) + "-" + post.date.slice(5, 7) + "-" + post.date.slice(0, 4)}`;
    if (post._embedded["wp:featuredmedia"] == undefined) {
      newsContainer.innerHTML += `
    <div class="card p-3 m-3 shadow">
      <h2 class="text-center">${post.title.rendered}</h2>
      <h5>Dato: ${dateFormat}</h5>
      ${post.content.rendered}
    </div>`;
    } else {
      newsContainer.innerHTML += `
    <div class="card p-3 m-3 shadow">
      <h2 class="text-center">${post.title.rendered}</h2>
      <h5>Dato: ${dateFormat}</h5>
      <img class="w-75 m-auto" src="${post._embedded["wp:featuredmedia"]["0"].source_url}" 
      ${post.content.rendered}
    </div>`;
    }
  });
}
