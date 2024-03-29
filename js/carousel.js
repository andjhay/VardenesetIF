export function loadCarousel(mediaData) {
  let carouselMedia = [];
  mediaData.forEach((media) => {
    if (media.caption.rendered.toLowerCase().includes("carousel")) {
      carouselMedia.push(media);
    }
  });
  const carouselContainer = document.getElementById("carousel");
  carouselMedia.forEach((media, index) => {
    if (index == 0) {
      carouselContainer.innerHTML += `
      <div class="carousel-item active">
        <img
          class="rounded shadow"
          src="${media.source_url}"
          alt="${media.alt_text}"
        />
      </div>`;
    } else {
      carouselContainer.innerHTML += `
      <div class="carousel-item">
        <img
          class="rounded shadow"
          src="${media.source_url}"
          alt="${media.alt_text}"
        />
      </div>`;
    }
  });
}
