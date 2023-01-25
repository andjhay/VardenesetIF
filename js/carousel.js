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
      carouselContainer.innerHTML += `<div class="carousel-item active">
<img
  src="${media.source_url}"
  class="d-block w-100"
  alt="${media.alt_text}"
/>
</div>`;
    } else {
      carouselContainer.innerHTML += `<div class="carousel-item">
    <img
      src="${media.source_url}"
      class="d-block w-100"
      alt="${media.alt_text}"
    />
  </div>`;
    }
  });
}
