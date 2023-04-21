/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/database/api.js":
/*!*****************************!*\
  !*** ./src/database/api.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "getApi": () => (/* binding */ getApi),
/* harmony export */   "getPosition": () => (/* binding */ getPosition),
/* harmony export */   "setApi": () => (/* binding */ setApi),
/* harmony export */   "setPosition": () => (/* binding */ setPosition)
/* harmony export */ });


const getPosition = () => {
    const athome = localStorage.getItem('position');
    return athome;
}
const setPosition = (data) => {
    return localStorage.setItem('position', data);
}
const getApi = () => {
    const athome = JSON.parse(localStorage.getItem('todo'));
    return athome[0];
}
const setApi = (data) => {
    return localStorage.setItem('todo', JSON.stringify(data));
}


 

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!******************************************!*\
  !*** ./src/database/project_database.js ***!
  \******************************************/
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _api__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./api */ "./src/database/api.js");


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
    (0,_api__WEBPACK_IMPORTED_MODULE_0__.setApi)(todo_database);
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (todo_database);
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicHJvamVjdF9kYXRhYmFzZS5idW5kbGUuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUdrRDs7Ozs7O1VDbEJsRDtVQUNBOztVQUVBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBOztVQUVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBOzs7OztXQ3RCQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHlDQUF5Qyx3Q0FBd0M7V0FDakY7V0FDQTtXQUNBOzs7OztXQ1BBOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7Ozs7Ozs7Ozs7O0FDTitCOztBQUUvQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLElBQUksNENBQU07QUFDVjtBQUNBLGlFQUFlLGFBQWEsRSIsInNvdXJjZXMiOlsid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9kYXRhYmFzZS9hcGkuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0L3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3RvZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0L3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vdG9kby1saXN0L3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL2RhdGFiYXNlL3Byb2plY3RfZGF0YWJhc2UuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXG5cbmNvbnN0IGdldFBvc2l0aW9uID0gKCkgPT4ge1xuICAgIGNvbnN0IGF0aG9tZSA9IGxvY2FsU3RvcmFnZS5nZXRJdGVtKCdwb3NpdGlvbicpO1xuICAgIHJldHVybiBhdGhvbWU7XG59XG5jb25zdCBzZXRQb3NpdGlvbiA9IChkYXRhKSA9PiB7XG4gICAgcmV0dXJuIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCdwb3NpdGlvbicsIGRhdGEpO1xufVxuY29uc3QgZ2V0QXBpID0gKCkgPT4ge1xuICAgIGNvbnN0IGF0aG9tZSA9IEpTT04ucGFyc2UobG9jYWxTdG9yYWdlLmdldEl0ZW0oJ3RvZG8nKSk7XG4gICAgcmV0dXJuIGF0aG9tZVswXTtcbn1cbmNvbnN0IHNldEFwaSA9IChkYXRhKSA9PiB7XG4gICAgcmV0dXJuIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCd0b2RvJywgSlNPTi5zdHJpbmdpZnkoZGF0YSkpO1xufVxuXG5cbmV4cG9ydCB7Z2V0QXBpLCBzZXRBcGksIGdldFBvc2l0aW9uLCBzZXRQb3NpdGlvbn07ICIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiaW1wb3J0IHsgc2V0QXBpIH0gZnJvbSBcIi4vYXBpXCI7XG5cbmNvbnN0IHRvZG9fZGF0YWJhc2UgPSBbXG4gICAge1xuICAgICAgICBfaWQ6ICcwJyxcbiAgICAgICAgYXRob21lOiBbXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgX2lkOiAnMCcsXG4gICAgICAgICAgICAgICAgdGl0bGU6ICdIb21lIGNob3JlcycsXG4gICAgICAgICAgICAgICAgZGVzY3JpcHRpb246ICdDaG9yZXMnLFxuICAgICAgICAgICAgICAgIGR1ZURhdGU6ICdKdW4gMXRoJyxcbiAgICAgICAgICAgICAgICBwcmlvcml0eTogJ0xvdycsXG4gICAgICAgICAgICAgICAgbm90ZXM6ICdBIHF1aWNrIGNob3JlcyB3aWxsIGhlbHAga2VlcCBteSBob21lIG5lYXQnLFxuICAgICAgICAgICAgICAgIGNoZWNrbGlzdDogdHJ1ZSxcbiAgICAgICAgICAgICAgICBvYmp0aXRsZTogJ2F0aG9tZScsXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIF9pZDogJzEnLFxuICAgICAgICAgICAgICAgIHRpdGxlOiAnRnJlZWxhbmNlJyxcbiAgICAgICAgICAgICAgICBkZXNjcmlwdGlvbjogJ1dvcmsgYXQgaG9tZScsXG4gICAgICAgICAgICAgICAgZHVlRGF0ZTogJ0p1biAydGgnLFxuICAgICAgICAgICAgICAgIHByaW9yaXR5OiAnSGlnaCcsXG4gICAgICAgICAgICAgICAgbm90ZXM6ICdNYWtlIHNvbWUgbW9uZXkgZnJvbSBob21lIGJ5IGZyZWVsYW5jaW5nJyxcbiAgICAgICAgICAgICAgICBjaGVja2xpc3Q6IGZhbHNlLFxuICAgICAgICAgICAgICAgIG9ianRpdGxlOiAnYXRob21lJyxcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgX2lkOiAnMicsXG4gICAgICAgICAgICAgICAgdGl0bGU6ICdNZWRpdGF0ZScsXG4gICAgICAgICAgICAgICAgZGVzY3JpcHRpb246ICdQZXJmZWN0IE1lZGl0YXRpb24nLFxuICAgICAgICAgICAgICAgIGR1ZURhdGU6ICdKdW4gM3RoJyxcbiAgICAgICAgICAgICAgICBwcmlvcml0eTogJ01lZGl1bScsXG4gICAgICAgICAgICAgICAgbm90ZXM6ICdTcGVuZCBzb21lIHRpbWUgbWVkaXRhdGluZycsXG4gICAgICAgICAgICAgICAgY2hlY2tsaXN0OiBmYWxzZSxcbiAgICAgICAgICAgICAgICBvYmp0aXRsZTogJ2F0aG9tZScsXG4gICAgICAgICAgICB9LFxuICAgICAgICBdLFxuICAgICAgICB3b3JrOiBbICAgIFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIF9pZDogJzAnLFxuICAgICAgICAgICAgICAgIHRpdGxlOiAnUmVnaXN0ZXInLFxuICAgICAgICAgICAgICAgIGRlc2NyaXB0aW9uOiAnRGVhbCB3aXRoIFJlZ2lzdGVyJyxcbiAgICAgICAgICAgICAgICBkdWVEYXRlOiAnRmViIDF0aCcsXG4gICAgICAgICAgICAgICAgcHJpb3JpdHk6ICdIaWdoJyxcbiAgICAgICAgICAgICAgICBub3RlczogJ01ha2Ugc3VyZSBhbGwgd29ya2VycyBhcmUgcHJlc2VudCcsXG4gICAgICAgICAgICAgICAgY2hlY2tsaXN0OiB0cnVlLFxuICAgICAgICAgICAgICAgIG9ianRpdGxlOiAnd29yaycsXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIF9pZDogJzEnLFxuICAgICAgICAgICAgICAgIHRpdGxlOiAnU3VibWl0IHdvcmsnLFxuICAgICAgICAgICAgICAgIGRlc2NyaXB0aW9uOiAnU3VibWlzc2lvbiBmb3IgdGhlIGRheScsXG4gICAgICAgICAgICAgICAgZHVlRGF0ZTogJ09jdCAydGgnLFxuICAgICAgICAgICAgICAgIHByaW9yaXR5OiAnTWVkaXVtJyxcbiAgICAgICAgICAgICAgICBub3RlczogJ01ha2Ugc3VyZSBJIHN1Ym1pdCBteSB3b3JrIGJlZm9yZSBnb2luZyBob21lJyxcbiAgICAgICAgICAgICAgICBjaGVja2xpc3Q6IGZhbHNlLFxuICAgICAgICAgICAgICAgIG9ianRpdGxlOiAnd29yaycsXG4gICAgICAgICAgICB9LFxuICAgICAgICBdLFxuICAgICAgICBzY2hvb2w6IFsgICAgXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgX2lkOiAnMCcsXG4gICAgICAgICAgICAgICAgdGl0bGU6ICdBc3NpZ25tZW50JyxcbiAgICAgICAgICAgICAgICBkZXNjcmlwdGlvbjogJ1N1Ym1pdCBhc3NpZ25tZW50JyxcbiAgICAgICAgICAgICAgICBkdWVEYXRlOiAnRmViIDExdGgnLFxuICAgICAgICAgICAgICAgIHByaW9yaXR5OiAnTG93JyxcbiAgICAgICAgICAgICAgICBub3RlczogJ01ha2Ugc3VyZSBJIHN1Ym1pdCBhc3NpZ25tZW50JyxcbiAgICAgICAgICAgICAgICBjaGVja2xpc3Q6IGZhbHNlLFxuICAgICAgICAgICAgICAgIG9ianRpdGxlOiAnc2Nob29sJyxcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgX2lkOiAnMScsXG4gICAgICAgICAgICAgICAgdGl0bGU6ICdLaWRzJyxcbiAgICAgICAgICAgICAgICBkZXNjcmlwdGlvbjogJ0JyaW5nIGhvbWUgdGhlIGtpZHMnLFxuICAgICAgICAgICAgICAgIGR1ZURhdGU6ICdNYXIgMnRoJyxcbiAgICAgICAgICAgICAgICBwcmlvcml0eTogJ0hpZ2gnLFxuICAgICAgICAgICAgICAgIG5vdGVzOiAnQXZvaWQgdHJvdWJsZSBieSBtYWtpbmcgc3VyZSB5b3UgdGFrZSB0aGUga2lkcyBob21lJyxcbiAgICAgICAgICAgICAgICBjaGVja2xpc3Q6IHRydWUsXG4gICAgICAgICAgICAgICAgb2JqdGl0bGU6ICdzY2hvb2wnLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBfaWQ6ICcyJyxcbiAgICAgICAgICAgICAgICB0aXRsZTogJ0ZyaWVuZHMnLFxuICAgICAgICAgICAgICAgIGRlc2NyaXB0aW9uOiAnUGxheSB3aXRoIGZyaWVuZHMnLFxuICAgICAgICAgICAgICAgIGR1ZURhdGU6ICdKdW4gMnRoJyxcbiAgICAgICAgICAgICAgICBwcmlvcml0eTogJ0hpZ2gnLFxuICAgICAgICAgICAgICAgIG5vdGVzOiAnSGF2ZSBmdW4gd2l0aCBmcmllbmRzIGJlZm9yZSBhbmQgYWZ0ZXIgc2Nob29sJyxcbiAgICAgICAgICAgICAgICBjaGVja2xpc3Q6IGZhbHNlLFxuICAgICAgICAgICAgICAgIG9ianRpdGxlOiAnc2Nob29sJyxcbiAgICAgICAgICAgIH0sXG4gICAgICAgIF0sXG4gICAgICAgIHBsYXlncm91bmQ6IFtcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBfaWQ6ICcwJyxcbiAgICAgICAgICAgICAgICB0aXRsZTogJ1NhZmUnLFxuICAgICAgICAgICAgICAgIGRlc2NyaXB0aW9uOiAnUGxheSBzYWZlJyxcbiAgICAgICAgICAgICAgICBkdWVEYXRlOiAnSnVuIDV0aCcsXG4gICAgICAgICAgICAgICAgcHJpb3JpdHk6ICdIaWdoJyxcbiAgICAgICAgICAgICAgICBub3RlczogJ01ha2Ugc3VyZSB0aGUga2lkcyBwbGF5IHNhZmUuLi4nLFxuICAgICAgICAgICAgICAgIGNoZWNrbGlzdDogdHJ1ZSxcbiAgICAgICAgICAgICAgICBvYmp0aXRsZTogJ3BsYXlncm91bmQnLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBfaWQ6ICcxJyxcbiAgICAgICAgICAgICAgICB0aXRsZTogJ0NoZXNzJyxcbiAgICAgICAgICAgICAgICBkZXNjcmlwdGlvbjogJ1BsYXkgY2hlc3Mgd2l0aCBuZWlnYm91cnMnLFxuICAgICAgICAgICAgICAgIGR1ZURhdGU6ICdOb3YgM3JkJyxcbiAgICAgICAgICAgICAgICBwcmlvcml0eTogJ01lZGl1bScsXG4gICAgICAgICAgICAgICAgbm90ZXM6ICdOZWlnYm91cnMgbG92ZSB5b3UgbW9yZSB3aGVuIHlvdSBkbyBzbycsXG4gICAgICAgICAgICAgICAgY2hlY2tsaXN0OiBmYWxzZSxcbiAgICAgICAgICAgICAgICBvYmp0aXRsZTogJ3BsYXlncm91bmQnLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBfaWQ6ICcyJyxcbiAgICAgICAgICAgICAgICB0aXRsZTogJ1JpZGUnLFxuICAgICAgICAgICAgICAgIGRlc2NyaXB0aW9uOiAnR28gZm9yIGEgcmlkZScsXG4gICAgICAgICAgICAgICAgZHVlRGF0ZTogJ0ZlYiAybmQnLFxuICAgICAgICAgICAgICAgIHByaW9yaXR5OiAnSGlnaCcsXG4gICAgICAgICAgICAgICAgbm90ZXM6ICdTcGVuZCB0aGUgd2hvbGQgZGF5IHRha2luZyBhIHJpZGUgd2l0aCBmcmllbmRzJyxcbiAgICAgICAgICAgICAgICBjaGVja2xpc3Q6IGZhbHNlLFxuICAgICAgICAgICAgICAgIG9ianRpdGxlOiAncGxheWdyb3VuZCcsXG4gICAgICAgICAgICB9LFxuICAgICAgICBdLFxuICAgIH0sXG5dO1xub25sb2FkID0gKCkgPT4ge1xuICAgIGFsZXJ0KCd5ZXMnKVxuXG59O1xuY29uc3QgZGF0YSA9IGxvY2FsU3RvcmFnZS5nZXRJdGVtKCd0b2RvJyk7XG5pZihkYXRhID09PSBudWxsKSB7XG4gICAgc2V0QXBpKHRvZG9fZGF0YWJhc2UpO1xufVxuZXhwb3J0IGRlZmF1bHQgdG9kb19kYXRhYmFzZTsiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=