const hamburger = document.querySelector('.hamburger'),
    menu = document.querySelector('.menu'),
    closeElem = document.querySelector('.menu__close'),
    menuLink = document.querySelectorAll('.menu__link a');
const sidepanelPosition = document.querySelectorAll('.sidepanel-position');



hamburger.addEventListener('click', () => {
    menu.classList.add('active');
});

closeElem.addEventListener('click', () => {
    menu.classList.remove('active');
});

menuLink.forEach((i) => {
    i.addEventListener('click', () => {
        menu.classList.remove('active');
    });
})




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

const usingsPercentPr = document.querySelectorAll('.usings__percent_pr');
const lines = document.querySelectorAll('.usings__percent_card_bottom span');

usingsPercentPr.forEach((item, i) => {
    lines[i].style.width = item.innerHTML
});


$(document).ready(function() {
    //плавная прокрутка
    $("a").click(function() {
        const _href = $(this).attr("href");
        $("html, body").animate({ scrollTop: $(_href).offset().top + "px" });
        return false;
    });

    //отправка формы
    $('form').submit(function(e) {
        e.preventDefault();
        $.ajax({
            type: "POST",
            url: "mailer/smart.php",
            data: $(this).serialize()
        }).done(function() {
            $(this).find("input").val("");

            $('form').trigger('reset');
        });
        return false;
    });

    //up scroll
    $(window).scroll(function() {
        if ($(this).scrollTop() > 1600) {
            $('.pageup').fadeIn();
        } else {
            $('.pageup').fadeOut();
        }
    });

});