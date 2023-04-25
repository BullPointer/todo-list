
export default function() {
    const sidebar = document.querySelector('.sidebar');
    const svg = document.querySelector('.svg');
    svg.addEventListener('click', () => {
        sidebar.style.display = sidebar.style.display === 'block' 
        ? 'none' : 'block';

    })
}