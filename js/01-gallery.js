import { galleryItems } from "./gallery-items.js";
// Change code below this line

const container = document.querySelector(".gallery");

const markup = galleryItems
  .map(
    ({ preview, original, description }) => ` <li class="gallery__item">
      <a class="gallery__link" href="large-image.jpg">
        <img class="gallery__image " src="${preview}" data-source="${original}" alt="${description}" />
      </a>
    </li>`
  )
  .join("");

container.innerHTML = markup; //* insertAdjacentHTML("beforeend",markup)

container.addEventListener("click", onOpenLargeImage);

let instance;

function onOpenLargeImage(evt) {
  evt.preventDefault();

  if (evt.target.classList.contains("gallery__item")) {
    return;
  }

  instance = basicLightbox.create(
    `<img src="${evt.target.dataset.source}" alt="${evt.target.description}" 
    width="1300" height="900" data-source="${evt.target.dataset.source}">`,
    {
      onShow: () => {
        document.addEventListener("keydown", handlerEscapeModal);
      },
      onClose: () => {
        document.removeEventListener("keydown", handlerEscapeModal);
      },
    }
  );

  instance.show();
  console.log("onOpenLargeImage  data", instance);
}

function handlerEscapeModal(evt) {
  if (evt.code === "Escape") {
    instance.close();
  }
  console.log(evt.code);
}
window.addEventListener("keydown", handlerEscapeModal);
window.removeEventListener("keydown", handlerEscapeModal);
