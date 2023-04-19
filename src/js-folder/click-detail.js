import '../css-folder/details.css';

function createDiv(txt, className) {
    const detail = document.createElement('div');
    detail.classList.add('detail-txt', className);
    detail.textContent = txt;
    
    return detail
}
function titleDiv(items) {
    const box = document.createElement('div');
    box.classList.add('detail-title');
    box.append(
        createDiv(`${items.title}`),
        createDiv('X', 'close')
    )

    return box;
}
function createBodyDiv(key, value) {
    const box = document.createElement('div');
    box.classList.add('detail-box');
    box.append(
        createDiv(key, 'key'),
        createDiv(value, 'value')
    )
    return box
}
export default function (detailBtn, items) {
    detailBtn.addEventListener('click', () => {
        const detailBg = document.createElement('div');
        detailBg.classList.add('check-details');
        const details = document.createElement('div');
        details.classList.add('details-info');
        detailBg.appendChild(details);
        details.append(
            titleDiv(items),
            createBodyDiv('Project: ', items.description),
            createBodyDiv('Due Date: ', items.dueDate),
            createBodyDiv('Priority: ', items.priority),
            createBodyDiv('Details: ', items.notes),
        );
        document.body.appendChild(detailBg);
        const close = document.querySelector('.close');
        if(close) {
            close.addEventListener('click', () => {
                const detailBg = document.querySelector('.check-details');
                document.body.removeChild(detailBg);
            });
        }
    })

}