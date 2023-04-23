import '../css-folder/edit.css';
import submitCreate from './create-folder/submit-create';


function createOption(value, txt) {
    const options = document.createElement('option');
    options.value = value;
    options.text = txt;
    return options;
}
function createSelect() {
    const catArr = ['athome', 'work', 'school', 'playground'];
    const catText = ['At Home', 'Work', 'School', 'Playground'];
    const elem = document.createElement('select');
    elem.classList.add('select');
    for (let index = 0; index < catArr.length; index++) {

        elem.appendChild(createOption(catArr[index], catText[index]));
    }
    return elem;
}
function createInputs(className, type, defaultText) {
    const elem = document.createElement(type);
    elem.classList.add(className);
    elem.placeholder = defaultText;
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
function createDate(className) {
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
function createFunc(txt, className) {
    const elem = document.createElement('button');
    elem.classList.add(className);
    elem.style.width = '90px';
    elem.textContent = txt;    
    submitCreate(elem);
    return elem; 
}  
export default function(elem) { 

    elem.addEventListener('click', () => {
        document.body.appendChild(createDiv());
        const box = document.querySelector('.edit-box');
        box.append(
            createBox('X', 'close'),
            createSelect(),
            createInputs('textarea', 'textarea', 'Title'),
            createInputs('textarea', 'textarea', 'Project'),
            createInputs('textarea', 'textarea', 'Details'),
            createBox('Warning: character must be greater that 2', 'warning'),
            dateBox('due-date'),
            createFunc('Create', 'confirm-edit'),
        );
        
        document.querySelector('.close').addEventListener('click', () => {
            const container = document.querySelector('.edit-container');
            document.body.removeChild(container);
        })
    });
}