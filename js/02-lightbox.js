import { galleryItems } from "./gallery-items.js";
// Change code below this line

const containerLightBox = document.querySelector(".gallery");

const markupGallery = galleryItems
  .map(
    ({ preview, original, description }) =>
      `<li class="gallery__item">
   <a class="gallery__link" href="${original}">
      <img class="gallery__image" src="${preview}" alt="${description}" title='${description}' />
   </a>
</li>`
  )
  .join("");

containerLightBox.innerHTML = markupGallery;

new SimpleLightbox(".gallery a", { captionDelay: 250 });
