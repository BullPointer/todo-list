import '../css-folder/content.css';
import click from './click-detail';


function createCheckbox(items) {
    const checkbox = document.createElement('input');
    checkbox.type = 'checkbox';
    checkbox.name = 'isread';
    checkbox.classList.add('check-box');
    checkbox.checked = items['checklist'];
    return checkbox;
}
function createProperties(txt, className, items) {
    const elem = document.createElement('div');
    elem.classList.add('item', className);
    elem.textContent = items['title'];
    return elem;
}
function detailButton(txt, className, items) {
    const elem = document.createElement('div');
    elem.classList.add('detail');
    const detail = document.createElement('div');
    detail.classList.add(className);
    elem.appendChild(detail);
    detail.textContent = txt;
    click(detail, items);
    return elem;
}
function dateButton(txt, className) {
    const elem = document.createElement('div');
    elem.classList.add('detail');
    const detail = document.createElement('div');
    detail.classList.add(className);
    elem.appendChild(detail);
    detail.textContent = txt;
    return elem;
}
function editButton(txt, className) {
    const elem = document.createElement('div');
    elem.classList.add('detail');
    const detail = document.createElement('div');
    detail.classList.add(className);
    elem.appendChild(detail);
    detail.textContent = txt;
    return elem;
}
function deleteButton(index, txt, className) {
    const elem = document.createElement('div');
    elem.classList.add(className);
    const deleteBtn = document.createElement('div');
    deleteBtn.classList.add('delete-btn');
    deleteBtn.id = index;
    elem.appendChild(deleteBtn);
    deleteBtn.textContent = txt;

    return elem;
}
function createDiv(index, className, items) {
    const elem = document.createElement('div');
    elem.classList.add(className);
    elem.append(
        createCheckbox(items),
        createProperties(index, 'key', items),
        detailButton('Details', 'detail-btn', items),
        dateButton(items['dueDate'], 'date'),
        editButton('Edit', 'edit-btn'),
        deleteButton(index, 'Delete', 'delete'),
    );
    return elem;
}
function contentFunc(items) {
    const container = document.createElement('div');
    container.classList.add('container');
    for (let index = 0; index < items.length; index++) {
        container.appendChild(
            createDiv(items[index]['_id'], 'todo', items[index])
        );
    }

    return container;
}
export default contentFunc;