const btnMobile = document.getElementById('btn-mobile');


function toggleMenu(event) {
    if (event.type === 'touchstart') event.preventDefault()
    const nav = document.getElementById('nav');
    const section = document.getElementById('conteudo');
    section.classList.toggle('active');
    nav.classList.toggle('active');
}


btnMobile.addEventListener('click', toggleMenu);
btnMobile.addEventListener('touchstart', toggleMenu);
