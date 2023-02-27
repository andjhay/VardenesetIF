import { postsData } from "./fetch.js";

export function loadPosts(posts) {
  const newsContainer = document.querySelector("#newsContainer");
  newsContainer.innerHTML = "";
  posts.forEach((post) => {
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
  searchPosts(postsData);
}

function searchPosts(postsData) {
  const form = document.querySelector("#search");

  if (form) {
    form.addEventListener("submit", (event) => {
      event.preventDefault();
      const form = event.target;
      const formData = new FormData(form);
      const searchTerm = Object.fromEntries(formData.entries()).search;
      sortPosts(searchTerm.toLowerCase(), postsData);
    });
  }
}

async function sortPosts(searchTerm, postsData) {
  const postsToSearch = postsData;
  const searchedPosts = postsToSearch.filter((post) => {
    if (
      post.title.rendered.toLowerCase().includes(searchTerm) == true ||
      post.content.rendered.toLowerCase().includes(searchTerm) == true
    ) {
      return true;
    }
  });
  const newsContainer = document.querySelector("#newsContainer");
  newsContainer.innerHTML = "";
  if (searchedPosts.length == 0) {
    newsContainer.innerHTML = "<h3>Ingen Treff</h3>";
  } else {
    loadPosts(searchedPosts);
  }
}
