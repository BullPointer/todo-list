import './style.css';
import topbar from './js-folder/topbar';
import mapCatFunc from './js-folder/sidebar';
import todoHome from './js-folder/edit-folder/todo-home';
import newContent from './js-folder/newContent';
import todoAdd from './js-folder/edit-folder/todo-add';
import renderIcon from './js-folder/renderIcon';
import clickIcon from './js-folder/clickIcon';


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
        const d="M1536 1088v128q0 26-19 45t-45 19H64q-26 0-45-19t-19-45v-128q0-26 19-45t45-19h1408q26 0 45 19t19 45zm0-512v128q0 26-19 45t-45 19H64q-26 0-45-19T0 704V576q0-26 19-45t45-19h1408q26 0 45 19t19 45zm0-512v128q0 26-19 45t-45 19H64q-26 0-45-19T0 192V64q0-26 19-45T64 0h1408q26 0 45 19t19 45z"
        const size1 = '1536';
        const size2 = '1280';
        document.body.append(
            this.createDiv('nav', 'nav'), 
            this.createDiv('div', 'sidebar'),
            this.createDiv('div', 'content')
        )
        const nav = document.querySelector('nav');
        nav.appendChild(topbar('Todo List App'));
        nav.appendChild(renderIcon(d, size1, size2, 'svg'));
        clickIcon();
        mapCatFunc();
        onload = () => {
            todoHome();
        }
        this.contentFunc();

    }
}
const todo = new Todo();
todo.appendBody();

