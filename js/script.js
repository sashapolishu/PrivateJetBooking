let header__burger = document.querySelector(".burger");
let burger__line1 = document.querySelector(".burger-line1");
let burger__line3 = document.querySelector(".burger-line3");
let burger__line2 = document.querySelector(".burger-line2");
const menu = document.querySelector(".menu");
let burger__container = document.querySelector(".burger-container");
let logo = document.querySelector('.logo')
let header__buttons = document.querySelector('.header__buttons');

let button = document.querySelector('.switch-img');

const cards = document.querySelectorAll('.prices-card');
cards.forEach(cards=>cards.addEventListener("click" , function(event){
    const card = cards.closest('.prices-card');
    card.classList.add('prices-card-focus');
}));

button.onclick = function(){
    let cityFrom = document.querySelector('.city-from');
    let cityTo = document.querySelector('.city-to');
    [cityFrom.value, cityTo.value] = [cityTo.value, cityFrom.value];
    [cityFrom.placeholder, cityTo.placeholder] = [cityTo.placeholder, cityFrom.placeholder];
}

header__burger.onclick = function () {
    header__burger.classList.toggle('active');
    burger__line3.classList.toggle('active');
    burger__line1.classList.toggle('active');
    burger__line2.classList.toggle('active');
    menu.classList.toggle('active')
    burger__container.classList.toggle('active');
    logo.classList.toggle('active');
    header__buttons.classList.toggle('active');
}
const anchors = document.querySelectorAll('a[href*="#"]')

for (let anchor of anchors) {
    anchor.addEventListener("click", function (event) {
        event.preventDefault();
        const blockID = anchor.getAttribute('href')
        document.querySelector('' + blockID).scrollIntoView({
            behavior: "smooth",
            block: "start"
        })
    })
}