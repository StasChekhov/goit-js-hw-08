// Add imports above this line
import { galleryItems } from './gallery-items';
// Change code below this line
import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";


const galleryUl = document.querySelector('.gallery');


const galleryMarkup =  galleryItems.map((galleryItem) => {
        return `
        <a
        class="gallery__item"
        href="${galleryItem.original}"
        >
        <img
        class="gallery__image"
        src="${galleryItem.preview}"
        alt="${galleryItem.description}"
        />
        </a>
        `
    })
  .join('');
//tttt


galleryUl.insertAdjacentHTML('beforeend', galleryMarkup)

const lightbox = new SimpleLightbox('.gallery a', {
  captionDelay: 250,
  captionPosition: 'bottom',
  captionSelector: 'img',
  captionsData: 'alt',
});

console.log(galleryItems);
