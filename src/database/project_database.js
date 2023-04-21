import { setApi } from "./api";

const todo_database = [
    {
        _id: '0',
        athome: [
            {
                _id: '0',
                title: 'Home chores',
                description: 'Chores',
                dueDate: 'Jun 1th',
                priority: 'Low',
                notes: 'A quick chores will help keep my home neat',
                checklist: true,
                objtitle: 'athome',
            },
            {
                _id: '1',
                title: 'Freelance',
                description: 'Work at home',
                dueDate: 'Jun 2th',
                priority: 'High',
                notes: 'Make some money from home by freelancing',
                checklist: false,
                objtitle: 'athome',
            },
            {
                _id: '2',
                title: 'Meditate',
                description: 'Perfect Meditation',
                dueDate: 'Jun 3th',
                priority: 'Medium',
                notes: 'Spend some time meditating',
                checklist: false,
                objtitle: 'athome',
            },
        ],
        work: [    
            {
                _id: '0',
                title: 'Register',
                description: 'Deal with Register',
                dueDate: 'Feb 1th',
                priority: 'High',
                notes: 'Make sure all workers are present',
                checklist: true,
                objtitle: 'work',
            },
            {
                _id: '1',
                title: 'Submit work',
                description: 'Submission for the day',
                dueDate: 'Oct 2th',
                priority: 'Medium',
                notes: 'Make sure I submit my work before going home',
                checklist: false,
                objtitle: 'work',
            },
        ],
        school: [    
            {
                _id: '0',
                title: 'Assignment',
                description: 'Submit assignment',
                dueDate: 'Feb 11th',
                priority: 'Low',
                notes: 'Make sure I submit assignment',
                checklist: false,
                objtitle: 'school',
            },
            {
                _id: '1',
                title: 'Kids',
                description: 'Bring home the kids',
                dueDate: 'Mar 2th',
                priority: 'High',
                notes: 'Avoid trouble by making sure you take the kids home',
                checklist: true,
                objtitle: 'school',
            },
            {
                _id: '2',
                title: 'Friends',
                description: 'Play with friends',
                dueDate: 'Jun 2th',
                priority: 'High',
                notes: 'Have fun with friends before and after school',
                checklist: false,
                objtitle: 'school',
            },
        ],
        playground: [
            {
                _id: '0',
                title: 'Safe',
                description: 'Play safe',
                dueDate: 'Jun 5th',
                priority: 'High',
                notes: 'Make sure the kids play safe...',
                checklist: true,
                objtitle: 'playground',
            },
            {
                _id: '1',
                title: 'Chess',
                description: 'Play chess with neigbours',
                dueDate: 'Nov 3rd',
                priority: 'Medium',
                notes: 'Neigbours love you more when you do so',
                checklist: false,
                objtitle: 'playground',
            },
            {
                _id: '2',
                title: 'Ride',
                description: 'Go for a ride',
                dueDate: 'Feb 2nd',
                priority: 'High',
                notes: 'Spend the whold day taking a ride with friends',
                checklist: false,
                objtitle: 'playground',
            },
        ],
    },
];
onload = () => {
    alert('yes')

};
const data = localStorage.getItem('todo');
if(data === null) {
    setApi(todo_database);
}
export default todo_database;