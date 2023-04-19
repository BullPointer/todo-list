import '../css-folder/topbar.css';


 function topbar(txt) {
    const elem = document.createElement('div');
    elem.classList.add('topbar');
    elem.textContent = txt;
    return elem;
}
export default topbar;