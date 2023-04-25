import '../css-folder/topbar.css';
import image from '../image-folder/todo-favicon.png';

function createImg() {
    const img = document.createElement('img');
    img.src = image;
    img.classList.add('topbar-icon');
    return img;
}

 function topbar(txt) {
    const elem = document.createElement('div');
    elem.classList.add('topbar');
    elem.textContent = txt;
    elem.appendChild(createImg())
    return elem;
} 
export default topbar;