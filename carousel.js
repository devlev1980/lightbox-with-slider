// Selectors
const slides = document.querySelectorAll('.lightbox_enabled');
const slidesArray = Array.from(slides);
const lastImage = slidesArray.length - 1;
const lightboxContainer = document.querySelector('.lightbox_container');
const lightboxImage = document.querySelector('.lightbox_image img#active_image');
const activeImageTitle = document.getElementById('#active_image-title');

const lightBoxButtons = document.querySelectorAll('.lightbox_btn');
const lightBoxButtonRight = document.querySelector('#right');
const lightBoxButtonLeft = document.querySelector('#left');
const closeBtn = document.querySelector('#close_btn');

let activeImage;

// Functions
const showLightbox = () => lightboxContainer.classList.add('active');
const hideLightbox = () => lightboxContainer.classList.remove('active');

const setActiveImage = (image) => {
    lightboxImage.src = image.dataset.imagesrc;
    activeImage = slidesArray.indexOf(image);
    console.log(activeImage)
}
const transitionSlidesLeft = ()=>{
    if(slidesArray[activeImage].parentElement.nextElementSibling){
        setActiveImage(slidesArray[activeImage].parentElement.nextElementSibling.firstElementChild);

    }else{
        setActiveImage(slidesArray[3])
    }


}
const transitionSlidesRight = ()=>{
    console.log('right')
}

const transitionSlideHandler = (moveItem) => {
    moveItem.includes('left')? transitionSlidesLeft():transitionSlidesRight()
}


// Event listeners
console.log(slides)

slides.forEach((slide) => {
    slide.addEventListener('click', (e) => {
        // console.log('clicked', e.target.dataset.imagesrc);
        showLightbox();
        setActiveImage(slide);
    })
});
// lightboxContainer.addEventListener('click', hideLightbox);

lightBoxButtons.forEach((button) => {
    button.addEventListener('click', (e) => {
        e.stopPropagation();
        // console.log(e.currentTarget.id) // get id of clicked button
        transitionSlideHandler(e.currentTarget.id)
    })
});

closeBtn.addEventListener('click',hideLightbox)


