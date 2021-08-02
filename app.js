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


const imgReview = itemSlider => {
    let valueDisplay = window.getComputedStyle(itemSlider.firstElementChild).display;
    if (valueDisplay === 'block') {
        Array.from(itemSlider.children).forEach(item => {
            item.className === 'front' ? item.style.display = 'none' : null;
        });
    } else {
        Array.from(itemSlider.children).forEach(item => item.style.display = 'block');
    }
}
allItemsSlider.forEach(item => item.addEventListener('click', () => imgReview(item)));
