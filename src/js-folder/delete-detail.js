export default function() {
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