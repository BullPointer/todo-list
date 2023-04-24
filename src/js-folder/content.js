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
function renderLinkIcon(shape, a) {
    const iconSvg = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
    const iconPath = document.createElementNS('http://www.w3.org/2000/svg','path');
    iconSvg.setAttribute('viewBox', `0 0 ${a} ${a}`);
    iconPath.setAttribute('d', shape);
    iconSvg.appendChild(iconPath);
    return iconSvg;
}
function editButton(txt, className, items, title) {
    const link = "M5 22q-.825 0-1.413-.588T3 20V6q0-.825.588-1.413T5 4h1V3q0-.425.288-.713T7 2q.425 0 .713.288T8 3v1h8V3q0-.425.288-.713T17 2q.425 0 .713.288T18 3v1h1q.825 0 1.413.588T21 6v5q0 .425-.288.713T20 12q-.425 0-.713-.288T19 11v-1H5v10h6q.425 0 .713.288T12 21q0 .425-.288.713T11 22H5Zm17.125-5L20 14.875l.725-.725q.275-.275.7-.275t.7.275l.725.725q.275.275.275.7t-.275.7l-.725.725ZM15.7 23h-1.2q-.2 0-.35-.15T14 22.5v-1.2q0-.2.075-.388t.225-.337l5-5l2.125 2.125l-5 5q-.15.15-.338.225T15.7 23ZM5 8h14V6H5v2Zm0 0V6v2Z";
    const elem = document.createElement('div'); 
    elem.classList.add('edit');
    const edit = document.createElement('div');
    edit.classList.add(className);
    edit.appendChild(renderLinkIcon(link, '24'));
    elem.appendChild(edit);
    clickEdit(elem, items, title);
    return elem; 
} 
function deleteButton(index, txt, className, items, title) {
    const link= "m9.4 16.5l2.6-2.6l2.6 2.6l1.4-1.4l-2.6-2.6L16 9.9l-1.4-1.4l-2.6 2.6l-2.6-2.6L8 9.9l2.6 2.6L8 15.1l1.4 1.4ZM7 21q-.825 0-1.413-.588T5 19V6H4V4h5V3h6v1h5v2h-1v13q0 .825-.588 1.413T17 21H7ZM17 6H7v13h10V6ZM7 6v13V6Z";
    const elem = document.createElement('div');
    elem.classList.add(className);
    const deleteBtn = document.createElement('div');
    deleteBtn.classList.add('delete-btn');
    deleteBtn.id = index;
    deleteBtn.appendChild(renderLinkIcon(link, '24'));
    elem.appendChild(deleteBtn);
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