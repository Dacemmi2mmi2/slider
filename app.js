const contentBlock = document.querySelector('.dd_content_block');
const leftArrow = document.querySelector('.dd_left_arrow');
const rightArrow = document.querySelector('.dd_right_arrow');
const visiblePartSlider = document.querySelector('.dd_visible_part_slider');

const slider = document.querySelector('.dd_slider');
const itemSlider = document.querySelector('.item_of_slider:first-child');
const allItemsSlider = document.querySelectorAll('.item_of_slider');


const moveSlider = side => {
    let widthItemSlider = itemSlider.offsetWidth;
    side === 'right' ? visiblePartSlider.scrollLeft += widthItemSlider : visiblePartSlider.scrollLeft -= widthItemSlider;
}


rightArrow.addEventListener('click', () => { moveSlider('right') }, false);
leftArrow.addEventListener('click', () => { moveSlider('left') }, false);


const imgReview = (visibility, itemSlider) => {
    visibility ? itemSlider.firstElementChild.style.display = 'none' : null;
    !visibility ? itemSlider.firstElementChild.style.display = 'block' : null;
}


const imgReviewMobile = item => {
    let styleItem = window.getComputedStyle(item.firstElementChild).display;
    styleItem === 'block' ? item.firstElementChild.style.display = 'none' : item.firstElementChild.style.display = 'block';
}


allItemsSlider.forEach(item => {
    item.addEventListener('mouseover', () => imgReview(true, item), false);
    item.addEventListener('mouseout', () => imgReview(false, item), false);
    item.addEventListener('touchstart', () => imgReviewMobile(item), false);
});
