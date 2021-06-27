const hamburger = document.querySelector('.hamburger'),
    menu = document.querySelector('.menu'),
    closeElem = document.querySelector('.menu__close');

const sidepanelPosition = document.querySelectorAll('.sidepanel-position');



hamburger.addEventListener('click', () => {
    menu.classList.add('active');
});

closeElem.addEventListener('click', () => {
    menu.classList.remove('active');
});

//изменение цвета sidepanel
let HeightSite = document.documentElement.clientHeight / 2; //высота экрана

function getBodyScrollTop() //на сколько прокручен сайт
{
    return self.pageYOffset || (document.documentElement && document.documentElement.scrollTop) || (document.body && document.body.scrollTop);
}

//добавление и удаление класса с цветом


//вызов функции при скролле
let sidepanel = window.addEventListener('scroll', function() {
    if (getBodyScrollTop() > HeightSite) {
        sidepanelPosition.forEach(function(i) {
            i.classList.add('sidepanel-color');
        })

    } else {
        sidepanelPosition.forEach(function(i) {
            i.classList.remove('sidepanel-color');
        })
    }
});


//скролл до координат

//получаем координаты 
let promo = document.querySelector('.promo');
let about = document.querySelector('.about');


function getOffset(el) {
    const rect = el.getBoundingClientRect();
    return {
        left: rect.left + window.scrollX,
        top: rect.top + window.scrollY
    };
}




let aboutScroll = window.addEventListener('scroll', function scrolling() {
    if (window.scrollY == 100) {
        window.scrollBy({
            left: getOffset(about).left,
            top: getOffset(about).top,
            behavior: 'smooth'
        });
    } else
    if (window.scrollY == getOffset(about).top) {
        window.removeEventListener('scroll', getOffset)
    } else
        return
})


/*let aboutScroll = window.addEventListener('scroll', function scrolling() {
    if (window.scrollY == 100) {
        window.scrollBy(getOffset(about).left, getOffset(about).top);
    } else
    if (window.scrollY == getOffset(about).top) {
        window.removeEventListener('scroll', getOffset)
    } else
        return
}) */

/*
let aboutScroll = window.addEventListener('scroll', function() {
    if (promo.offsetHeight == document.documentElement.clientHeight) {
        window.scrollBy(getOffset(about).left, getOffset(about).top);
    } else
        return;
})
*/