import '../css-folder/edit.css';
import setEdit from './edit-folder/setEdit';
import submitEdit from './edit-folder/submit-edit';

function createInputs(className, item, type) {
    const elem = document.createElement(type);
    elem.classList.add(className);
    elem.value = item;
    return elem;
}
function createDiv() {
    const elem = document.createElement('div');
    elem.classList.add('edit-container');
    const box = document.createElement('div');
    box.classList.add('edit-box');
    elem.appendChild(box);
    return elem;
}
function createBox(txt, className) {
    const elem = document.createElement('div');
    elem.classList.add(className);
    elem.textContent = txt;
    return elem;
}
function createDate(className, item, type) {
    const elem = document.createElement('input');
    elem.type = 'date';
    elem.classList.add(className);
    return elem;
}
function dateBox(className) {
    const elem = document.createElement('div');
    elem.classList.add(className);
    elem.append(
        createBox('Due Date: '),
        createDate('change-date'),
    );
    return elem;
}
function priority(txt, className, items, title) {
    const elem = document.createElement('div');
    elem.classList.add(className);
    elem.textContent = txt;
    setEdit(elem, title, items,  'textContent', 'priority');
    return elem;
}
function priorityBox(className, items, title) {
    const elem = document.createElement('div');
    elem.classList.add(className);
    elem.append(
        createBox('Priority: ', 'priority'),
        priority('Low', 'low-btn', items, title),
        priority('Medium', 'medium-btn', items, title),
        priority('High', 'high-btn', items, title),
    );
    return elem;
}
function editFunc(txt, className, title, items) {
    const elem = document.createElement('div');
    elem.classList.add(className);
    elem.textContent = txt;        
    submitEdit(elem, title, items);
    return elem; 
} 
export default function(elem, items, title) { 

    elem.addEventListener('click', () => {
        document.body.appendChild(createDiv());
        const box = document.querySelector('.edit-box');
        box.append(
            createBox('X', 'close'),
            createInputs('textarea', items.title, 'textarea'),
            createInputs('textarea', items.notes, 'textarea'),
            createInputs('textarea', items.description, 'textarea'),
            dateBox('due-date', items.dueDate),
            priorityBox('change-priority', items, title),
            editFunc('Edit', 'confirm-edit', title, items),
        );
        
        document.querySelector('.close').addEventListener('click', () => {
            const container = document.querySelector('.edit-container');
            document.body.removeChild(container);
        })
    });
}