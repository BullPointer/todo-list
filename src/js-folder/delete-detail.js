import { getApi, setApi, getPosition } from "../database/api";
import todoHome from "./edit-folder/todo-home";
import todoAdd from "./edit-folder/todo-add";

export default function(elem, items, title) {
    elem.addEventListener('click', () => {
        let state = [getApi()];

        const newObj = state[0][title].filter(
            (obj) => obj['_id'] !== items['_id']
        );
        state[0][title] = newObj;
        setApi(state);
        if(getPosition() === 'home') {
            return todoHome();
        }
        return todoAdd(title);
    });
}