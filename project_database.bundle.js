/******/ (() => { // webpackBootstrap
var __webpack_exports__ = {};
/*!******************************************!*\
  !*** ./src/database/project_database.js ***!
  \******************************************/

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
            },
            {
                _id: '1',
                title: 'Freelance',
                description: 'Work at home',
                dueDate: 'Jun 2th',
                priority: 'High',
                notes: 'Make some money from home by freelancing',
                checklist: false,
            },
            {
                _id: '2',
                title: 'Meditate',
                description: 'Perfect Meditation',
                dueDate: 'Jun 3th',
                priority: 'Medium',
                notes: 'Spend some time meditating',
                checklist: false,
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
            },
            {
                _id: '1',
                title: 'Submit work',
                description: 'Submission for the day',
                dueDate: 'Oct 2th',
                priority: 'Medium',
                notes: 'Make sure I submit my work before going home',
                checklist: false,
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
            },
            {
                _id: '1',
                title: 'Kids',
                description: 'Bring home the kids',
                dueDate: 'Mar 2th',
                priority: 'High',
                notes: 'Avoid trouble by making sure you take the kids home',
                checklist: true,
            },
            {
                _id: '2',
                title: 'Friends',
                description: 'Play with friends',
                dueDate: 'Jun 2th',
                priority: 'High',
                notes: 'Have fun with friends before and after school',
                checklist: false,
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
                checklist: true
            },
            {
                _id: '1',
                title: 'Chess',
                description: 'Play chess with neigbours',
                dueDate: 'Nov 3rd',
                priority: 'Medium',
                notes: 'Neigbours love you more when you do so',
                checklist: false
            },
            {
                _id: '2',
                title: 'Ride',
                description: 'Go for a ride',
                dueDate: 'Feb 2nd',
                priority: 'High',
                notes: 'Spend the whold day taking a ride with friends',
                checklist: false
            },
        ],
    },
];

localStorage.setItem('todo', JSON.stringify(todo_database));

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicHJvamVjdF9kYXRhYmFzZS5idW5kbGUuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQSxLQUFLO0FBQ0w7O0FBRUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvZGF0YWJhc2UvcHJvamVjdF9kYXRhYmFzZS5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcbmNvbnN0IHRvZG9fZGF0YWJhc2UgPSBbXG4gICAge1xuICAgICAgICBfaWQ6ICcwJyxcbiAgICAgICAgYXRob21lOiBbXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgX2lkOiAnMCcsXG4gICAgICAgICAgICAgICAgdGl0bGU6ICdIb21lIGNob3JlcycsXG4gICAgICAgICAgICAgICAgZGVzY3JpcHRpb246ICdDaG9yZXMnLFxuICAgICAgICAgICAgICAgIGR1ZURhdGU6ICdKdW4gMXRoJyxcbiAgICAgICAgICAgICAgICBwcmlvcml0eTogJ0xvdycsXG4gICAgICAgICAgICAgICAgbm90ZXM6ICdBIHF1aWNrIGNob3JlcyB3aWxsIGhlbHAga2VlcCBteSBob21lIG5lYXQnLFxuICAgICAgICAgICAgICAgIGNoZWNrbGlzdDogdHJ1ZSxcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgX2lkOiAnMScsXG4gICAgICAgICAgICAgICAgdGl0bGU6ICdGcmVlbGFuY2UnLFxuICAgICAgICAgICAgICAgIGRlc2NyaXB0aW9uOiAnV29yayBhdCBob21lJyxcbiAgICAgICAgICAgICAgICBkdWVEYXRlOiAnSnVuIDJ0aCcsXG4gICAgICAgICAgICAgICAgcHJpb3JpdHk6ICdIaWdoJyxcbiAgICAgICAgICAgICAgICBub3RlczogJ01ha2Ugc29tZSBtb25leSBmcm9tIGhvbWUgYnkgZnJlZWxhbmNpbmcnLFxuICAgICAgICAgICAgICAgIGNoZWNrbGlzdDogZmFsc2UsXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIF9pZDogJzInLFxuICAgICAgICAgICAgICAgIHRpdGxlOiAnTWVkaXRhdGUnLFxuICAgICAgICAgICAgICAgIGRlc2NyaXB0aW9uOiAnUGVyZmVjdCBNZWRpdGF0aW9uJyxcbiAgICAgICAgICAgICAgICBkdWVEYXRlOiAnSnVuIDN0aCcsXG4gICAgICAgICAgICAgICAgcHJpb3JpdHk6ICdNZWRpdW0nLFxuICAgICAgICAgICAgICAgIG5vdGVzOiAnU3BlbmQgc29tZSB0aW1lIG1lZGl0YXRpbmcnLFxuICAgICAgICAgICAgICAgIGNoZWNrbGlzdDogZmFsc2UsXG4gICAgICAgICAgICB9LFxuICAgICAgICBdLFxuICAgICAgICB3b3JrOiBbICAgIFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIF9pZDogJzAnLFxuICAgICAgICAgICAgICAgIHRpdGxlOiAnUmVnaXN0ZXInLFxuICAgICAgICAgICAgICAgIGRlc2NyaXB0aW9uOiAnRGVhbCB3aXRoIFJlZ2lzdGVyJyxcbiAgICAgICAgICAgICAgICBkdWVEYXRlOiAnRmViIDF0aCcsXG4gICAgICAgICAgICAgICAgcHJpb3JpdHk6ICdIaWdoJyxcbiAgICAgICAgICAgICAgICBub3RlczogJ01ha2Ugc3VyZSBhbGwgd29ya2VycyBhcmUgcHJlc2VudCcsXG4gICAgICAgICAgICAgICAgY2hlY2tsaXN0OiB0cnVlLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBfaWQ6ICcxJyxcbiAgICAgICAgICAgICAgICB0aXRsZTogJ1N1Ym1pdCB3b3JrJyxcbiAgICAgICAgICAgICAgICBkZXNjcmlwdGlvbjogJ1N1Ym1pc3Npb24gZm9yIHRoZSBkYXknLFxuICAgICAgICAgICAgICAgIGR1ZURhdGU6ICdPY3QgMnRoJyxcbiAgICAgICAgICAgICAgICBwcmlvcml0eTogJ01lZGl1bScsXG4gICAgICAgICAgICAgICAgbm90ZXM6ICdNYWtlIHN1cmUgSSBzdWJtaXQgbXkgd29yayBiZWZvcmUgZ29pbmcgaG9tZScsXG4gICAgICAgICAgICAgICAgY2hlY2tsaXN0OiBmYWxzZSxcbiAgICAgICAgICAgIH0sXG4gICAgICAgIF0sXG4gICAgICAgIHNjaG9vbDogWyAgICBcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBfaWQ6ICcwJyxcbiAgICAgICAgICAgICAgICB0aXRsZTogJ0Fzc2lnbm1lbnQnLFxuICAgICAgICAgICAgICAgIGRlc2NyaXB0aW9uOiAnU3VibWl0IGFzc2lnbm1lbnQnLFxuICAgICAgICAgICAgICAgIGR1ZURhdGU6ICdGZWIgMTF0aCcsXG4gICAgICAgICAgICAgICAgcHJpb3JpdHk6ICdMb3cnLFxuICAgICAgICAgICAgICAgIG5vdGVzOiAnTWFrZSBzdXJlIEkgc3VibWl0IGFzc2lnbm1lbnQnLFxuICAgICAgICAgICAgICAgIGNoZWNrbGlzdDogZmFsc2UsXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIF9pZDogJzEnLFxuICAgICAgICAgICAgICAgIHRpdGxlOiAnS2lkcycsXG4gICAgICAgICAgICAgICAgZGVzY3JpcHRpb246ICdCcmluZyBob21lIHRoZSBraWRzJyxcbiAgICAgICAgICAgICAgICBkdWVEYXRlOiAnTWFyIDJ0aCcsXG4gICAgICAgICAgICAgICAgcHJpb3JpdHk6ICdIaWdoJyxcbiAgICAgICAgICAgICAgICBub3RlczogJ0F2b2lkIHRyb3VibGUgYnkgbWFraW5nIHN1cmUgeW91IHRha2UgdGhlIGtpZHMgaG9tZScsXG4gICAgICAgICAgICAgICAgY2hlY2tsaXN0OiB0cnVlLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBfaWQ6ICcyJyxcbiAgICAgICAgICAgICAgICB0aXRsZTogJ0ZyaWVuZHMnLFxuICAgICAgICAgICAgICAgIGRlc2NyaXB0aW9uOiAnUGxheSB3aXRoIGZyaWVuZHMnLFxuICAgICAgICAgICAgICAgIGR1ZURhdGU6ICdKdW4gMnRoJyxcbiAgICAgICAgICAgICAgICBwcmlvcml0eTogJ0hpZ2gnLFxuICAgICAgICAgICAgICAgIG5vdGVzOiAnSGF2ZSBmdW4gd2l0aCBmcmllbmRzIGJlZm9yZSBhbmQgYWZ0ZXIgc2Nob29sJyxcbiAgICAgICAgICAgICAgICBjaGVja2xpc3Q6IGZhbHNlLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgXSxcbiAgICAgICAgcGxheWdyb3VuZDogW1xuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIF9pZDogJzAnLFxuICAgICAgICAgICAgICAgIHRpdGxlOiAnU2FmZScsXG4gICAgICAgICAgICAgICAgZGVzY3JpcHRpb246ICdQbGF5IHNhZmUnLFxuICAgICAgICAgICAgICAgIGR1ZURhdGU6ICdKdW4gNXRoJyxcbiAgICAgICAgICAgICAgICBwcmlvcml0eTogJ0hpZ2gnLFxuICAgICAgICAgICAgICAgIG5vdGVzOiAnTWFrZSBzdXJlIHRoZSBraWRzIHBsYXkgc2FmZS4uLicsXG4gICAgICAgICAgICAgICAgY2hlY2tsaXN0OiB0cnVlXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIF9pZDogJzEnLFxuICAgICAgICAgICAgICAgIHRpdGxlOiAnQ2hlc3MnLFxuICAgICAgICAgICAgICAgIGRlc2NyaXB0aW9uOiAnUGxheSBjaGVzcyB3aXRoIG5laWdib3VycycsXG4gICAgICAgICAgICAgICAgZHVlRGF0ZTogJ05vdiAzcmQnLFxuICAgICAgICAgICAgICAgIHByaW9yaXR5OiAnTWVkaXVtJyxcbiAgICAgICAgICAgICAgICBub3RlczogJ05laWdib3VycyBsb3ZlIHlvdSBtb3JlIHdoZW4geW91IGRvIHNvJyxcbiAgICAgICAgICAgICAgICBjaGVja2xpc3Q6IGZhbHNlXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIF9pZDogJzInLFxuICAgICAgICAgICAgICAgIHRpdGxlOiAnUmlkZScsXG4gICAgICAgICAgICAgICAgZGVzY3JpcHRpb246ICdHbyBmb3IgYSByaWRlJyxcbiAgICAgICAgICAgICAgICBkdWVEYXRlOiAnRmViIDJuZCcsXG4gICAgICAgICAgICAgICAgcHJpb3JpdHk6ICdIaWdoJyxcbiAgICAgICAgICAgICAgICBub3RlczogJ1NwZW5kIHRoZSB3aG9sZCBkYXkgdGFraW5nIGEgcmlkZSB3aXRoIGZyaWVuZHMnLFxuICAgICAgICAgICAgICAgIGNoZWNrbGlzdDogZmFsc2VcbiAgICAgICAgICAgIH0sXG4gICAgICAgIF0sXG4gICAgfSxcbl07XG5cbmxvY2FsU3RvcmFnZS5zZXRJdGVtKCd0b2RvJywgSlNPTi5zdHJpbmdpZnkodG9kb19kYXRhYmFzZSkpO1xuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9