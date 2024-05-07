/*button to-top*/

$(window).scroll(function(){
    if ($(window).scrollTop() > 500) {
        $('.main__button-to-top').removeClass('main__button-to-top--hide');
    }

    if ($(window).scrollTop() <= 500) {
        $('.main__button-to-top').addClass('main__button-to-top--hide');
    }

});


document.querySelector('.main__button-to-top').onclick = () => {
    // переместим в начало страницы
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: 'smooth'
    });
}

/*burger*/

document.querySelector(".icon").addEventListener("click", function() {
    document.querySelector(".burger-menu").classList.toggle("burger-menu--show"); 
});

/*burger-icon*/

let menuBtn = document.querySelectorAll(".icon");
    for (var i = 0; i < menuBtn.length; i++) {
    menuBtn[i].addEventListener("click",(e)=>{
        console.log(e.target);
    e.target.classList.toggle("active");
    });
}

/*tabs*/

(function($) {
    $(function() {
    
    $('ul.tabs__caption').on('click', 'li:not(.active)', function() {
        $(this)
        .addClass('active').siblings().removeClass('active')
        .closest('div.tabs').find('div.tabs__content').removeClass('active').eq($(this).index()).addClass('active');
    });
    
    });
})(jQuery);


/*открытие fancybox*/

$('[data-fancybox]').fancybox({})

