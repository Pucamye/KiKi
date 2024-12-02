const trilho = document.querySelector('.trilho');
const body = document.body;
const button = document.querySelector('#button');


trilho.addEventListener('click', () => {
    body.classList.toggle('dark');
});


button.addEventListener('click', (event) => {
    event.stopPropagation();
    body.classList.toggle('dark');
});
