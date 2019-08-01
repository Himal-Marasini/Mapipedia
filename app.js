const nav = document.querySelector('nav');
const menu = document.getElementById('menu');
let counter = 0;

menu.addEventListener("click", e => {
    counter += 1;
    if (counter === 1) {
        nav.style.display = "block";
        menu.style.bottom = "36px";
        menu.style.left = "116px";
    } else if (counter === 2) {
        nav.style.display = "none";
        menu.style.bottom = '36px';
        menu.style.left = '-3px';
        counter = 0;
    }
});

console.log(window.screen.width);