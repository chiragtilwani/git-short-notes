const open=document.querySelector("#open")
const close = document.querySelector("#close")
const links = document.querySelector(".links")

open.addEventListener("click",show);
close.addEventListener("click",hide);

function show() {
    links.classList.add('show')
    open.style.display = 'none';
    close.style.display = 'block'
}
function hide() {
    links.classList.remove('show');
    open.style.display = 'block';
    close.style.display = 'none'
}

