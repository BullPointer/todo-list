import '../css-folder/content.css';
import clickDetail from './click-detail';
import setEdit from './edit-folder/setEdit';
import clickEdit from './click-edit';
import deleteDetail from './delete-detail';

function createCheckbox(items, title) {
    const checkbox = document.createElement('input');
    checkbox.type = 'checkbox';
    checkbox.name = 'isread';
    checkbox.classList.add('check-box');
    checkbox.checked = items['checklist'];
    setEdit(checkbox, title, items, 'checked', 'checklist');
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
    clickDetail(detail, items);
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
function editButton(txt, className, items, title) {
    const elem = document.createElement('div'); 
    elem.classList.add('edit');
    const edit = document.createElement('div');
    edit.classList.add(className);
    elem.appendChild(edit);
    edit.textContent = txt;
    clickEdit(elem, items, title);
    return elem; 
} 
function deleteButton(index, txt, className, items, title) {
    const elem = document.createElement('div');
    elem.classList.add(className);
    const deleteBtn = document.createElement('div');
    deleteBtn.classList.add('delete-btn');
    deleteBtn.id = index;
    elem.appendChild(deleteBtn);
    deleteBtn.textContent = txt;
    deleteDetail(elem, items, title);
    return elem;
}
function createDiv(index, className, items, title) {
    const elem = document.createElement('div');
    elem.classList.add(className);
    elem.append(
        createCheckbox(items, title),
        createProperties(index, 'key', items),
        detailButton('Details', 'detail-btn', items),
        dateButton(
            items['dueDate'].substring(
                items['dueDate'].indexOf(' ') + 1), 
                'date'
        ),
        editButton('Edit', 'edit-btn', items, title),
        deleteButton(index, 'Delete', 'delete', items, title),
    );
    return elem;
}
function content(items) {
    const container = document.createElement('div');
    container.classList.add('container');
    for (let index = 0; index < items.length; index++) {
        container.appendChild(
            createDiv(items[index]['_id'], 'todo', items[index], items[index]['objtitle'])
        );
    }
    return container;
}
export default content;