import './style.css';
import topbar from './js-folder/topbar';
import mapCatFunc from './js-folder/sidebar';
import todoHome from './js-folder/edit-folder/todo-home';
import todoAdd from './js-folder/edit-folder/todo-add';


class Todo {
    createDiv(elemType, className) {
        const elem = document.createElement(elemType);
        elem.classList.add(className);
        return elem;
    }
    
    contentFunc = () => {        
        const home = document.querySelectorAll('.home');
        home.forEach(btn => {
            btn.addEventListener('click', () => {
                todoHome();
            });
        });

        const categories = document.querySelectorAll('.cate');
        categories.forEach(btn => {
            btn.addEventListener('click', () => {
                todoAdd(btn.title);
            });
        });

    }
    appendBody() {
        document.body.append(
            this.createDiv('nav', 'nav'), 
            this.createDiv('div', 'sidebar'),
            this.createDiv('div', 'content')
        )
        const nav = document.querySelector('nav');
        nav.appendChild(topbar('Todo List App'));
        mapCatFunc();
        onload = () => {
            todoHome();
        }
        this.contentFunc();

    }
}
const todo = new Todo();
todo.appendBody();
// const str = '2023 Jan 13';
// console.log(str.slice(3, 7));
