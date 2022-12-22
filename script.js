
function navToggle() {
    var navToggleNav = document.getElementById("nav");
    var html = document.getElementById("html");
    var body = document.getElementById("body");
    navToggleNav.classList.toggle("_active");
    html.classList.toggle("_overflow");
    body.classList.toggle("_overflow");

}

// Нашли все заголовки табов по data атрибуту
const tabHeaders = document.querySelectorAll('[data-tab]');
// Нашли все контент боксы
const contentBoxes = document.querySelectorAll('[data-tab-content]');

tabHeaders.forEach(function (item) {
    item.addEventListener('click', function ()   {
        



        // 1. Скрыть все content box
        contentBoxes.forEach(function (item) {
            item.classList.add('hidden');
        });

        // 2. Выбрать нужный content box и показать его
        const contentBox = document.querySelector('#' + this.dataset.tab);
        contentBox.classList.remove('hidden');
        

    
    })
})

const items = document.querySelectorAll('.item');

items.forEach(item => {
item.addEventListener('click', function() {
    items.forEach(elem => elem.classList.remove('orange'));
    this.classList.add('orange');
});
});
/* 
        item.classList.toggle('orange');
 */