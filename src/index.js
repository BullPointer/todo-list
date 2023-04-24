import './style.css';
import topbar from './js-folder/topbar';
import mapCatFunc from './js-folder/sidebar';
import todoHome from './js-folder/edit-folder/todo-home';
import newContent from './js-folder/newContent';
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
        const project = document.querySelector('.project');
        newContent(project);
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

