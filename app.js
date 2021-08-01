const contentBlock = document.querySelector('.dd_content_block');
const leftArrow = document.querySelector('.dd_left_arrow');
const rightArrow = document.querySelector('.dd_right_arrow');
const visiblePartSlider = document.querySelector('.dd_visible_part_slider');

const slider = document.querySelector('.dd_slider');
const allItemsSlider = document.querySelectorAll('.item_of_slider');


const moveSlider = (side) => {
    if (side === 'right') {
        console.log('right');
    } else {
        console.log('left')
    }
}


rightArrow.addEventListener('click', () => { moveSlider('right') }, false);
leftArrow.addEventListener('click', () => { moveSlider('left') }, false);


const imgReview = (visibility, itemSlider) => {
    visibility ? itemSlider.firstElementChild.style.display = 'none' : null;
    !visibility ? itemSlider.firstElementChild.style.display = 'block' : null;
}


let counter = 0;
const imgReviewMobile = (itemSlider) => {
    counter % 2 ? itemSlider.firstElementChild.style.display = 'none' : itemSlider.firstElementChild.style.display = 'block';
    counter++;
}


allItemsSlider.forEach(item => {
    item.addEventListener('mouseover', () => imgReview(true, item), false);
    item.addEventListener('mouseout', () => imgReview(false, item), false);
    item.addEventListener('touchstart', () => imgReviewMobile(item), false);
});



if (contentBlock.offsetWidth < 1024) {
    rightArrow.style.display = 'none';
    leftArrow.style.display = 'none';
}