import { getApi, setApi, getPosition } from "../../database/api";
import todoHome from "../edit-folder/todo-home";
import todoAdd from "../edit-folder/todo-add";
import calender from "../edit-folder/calender";

export default function (elem) {
    elem.addEventListener('click', () => {
        const editContainer = document.querySelector('.edit-container');
        const warning = document.querySelector('.warning');
        let state = [getApi()];
        const arr = ['title', 'description', 'notes'];
        let todoObj = {};

        const select = document.querySelector('.select');
        todoObj['_id'] = state[0][select.value].length;

        const textarea = document.querySelectorAll('.textarea');
        for (let index = 0; index < textarea.length; index++) {
            if (textarea[index].value.length <= 2) {
                warning.style.display = 'block';
                return false;
            }
            todoObj[arr[index]] = textarea[index].value;
        }

        const myDate = document.querySelector('.change-date').value;
        const date = new Date(myDate);
        if (!!date.valueOf()) {
            todoObj['dueDate'] = `${date.getFullYear()} ${calender[date.getMonth()]} ${date.getDate()+1}`
        } else {
            todoObj['dueDate'] = '0000 Jan 00';
        }
        todoObj['priority'] = 'Low';
        todoObj['checklist'] = false;
        todoObj['objtitle'] = select.value;
        state[0][select.value].push(todoObj);
        setApi(state);
        document.body.removeChild(editContainer);
        if(getPosition() === 'home') {
            return todoHome();
        }
        return todoAdd(select.value);
    })
}