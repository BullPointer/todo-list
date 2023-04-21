import { getApi, setApi, getPosition } from "../../database/api";
import todoHome from "./todo-home";
import todoAdd from "./todo-add";
import calender from "./calender";


export default function(elem, title, items, txtContent, value) {
    elem.addEventListener('click', () => {
        const api = [getApi()];
        const editContainer = document.querySelector('.edit-container');
        const textarea = document.querySelectorAll('.textarea');
        const myArr = ['title', 'notes', 'description']

        for (let index = 0; index < textarea.length; index++) {
            let objIndex = api[0][title].findIndex((obj) => {
                return obj['_id'] == items['_id']
            });
            api[0][title][objIndex][myArr[index]] = textarea[index].value;
            setApi(api);
        }
        const changeDate = document.querySelector('.change-date').value;
        const date = new Date(changeDate);

        if (!!date.valueOf()) {
            const year = date.getFullYear();
            const month = date.getMonth();
            const dateNo = date.getDate() +1;
            let index = api[0][title].findIndex((obj) => {
                return obj['_id'] == items['_id']
            });
            api[0][title][index]['dueDate'] = `${year} ${calender[month]} ${dateNo}`;
            setApi(api);
        }
        document.body.removeChild(editContainer);
        if(getPosition() === 'home') {
            return todoHome();
        }
        return todoAdd(title);
    });  
}   