import './style.css';
import api from './database/api';
import topbar from './js-folder/topbar';
import mapCatFunc from './js-folder/sidebar';
import content from './js-folder/content';


class Todo {
    createDiv(elemType, className) {
        const elem = document.createElement(elemType);
        elem.classList.add(className);
        return elem;
    }
    deleteFunc() {
        const deleteBtn = document.querySelectorAll('.delete-btn');
        deleteBtn.forEach(btn => {
            btn.addEventListener('click', () => {
                const contentcontainer = document.querySelector('.content');
                const container = document.querySelector('.container');
                contentcontainer.removeChild(container);
                state = state.filter((e) => e._id !== btn.id);
                this.contentFunc();
            });
        });
    }
    contentFunc = () => {        
        const categories = document.querySelectorAll('.cate');
        categories.forEach(btn => {
            btn.addEventListener('click', () => {
                const contentcontainer = document.querySelector('.content');
                const container = document.querySelector('.container');
                if(container) {
                    contentcontainer.removeChild(container);
                }
                contentcontainer.appendChild(content(api()[btn.title]));
            });
        });
        this.deleteFunc();
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
        this.contentFunc();
        
    }
}
const todo = new Todo();
todo.appendBody();
