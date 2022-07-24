import { galleryItems } from './gallery-items.js';

console.log(galleryItems)

const gallery = document.querySelector('.gallery');
const newGalleryItems = [];

galleryItems.forEach(e => {
    const galleryItem = document.createElement('div');
    const galleryItemLink = document.createElement('a');
    const galleryItemImage = document.createElement('img');
    
    galleryItem.className = 'gallery__item';
    galleryItemLink.className = 'gallery__link';
    galleryItemImage.className = 'gallery__img';

    galleryItemLink.href = e.original;
    galleryItemImage.scr = e.preview;
    galleryItemImage.setAttribute('data-source', e.original);
    galleryItemImage.alt = e.description;
    
    galleryItem.append(galleryItemLink);
    galleryItemLink.append(galleryItemImage);
    newGalleryItems.push(galleryItem);
});

gallery.append(...newGalleryItems);








