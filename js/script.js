let openMenu = false;
const $menu = document.querySelector(`.hamburger`);
const $nav = document.querySelector(`.main-nav`);
const $title = document.querySelector(`.main-title`);
const $body = document.querySelector(`body`);

const onMenuClick = () => {
  if (openMenu === false) {
    $nav.style.display = `flex`;
    $title.style.color = `white`;
    $menu.style.width = `2.3rem`;
    $menu.style.backgroundImage = `url(/assets/svg/close.svg)`;
    $body.style.overflow = `hidden`;
    openMenu = true;
  } else if (openMenu === true) {
    $nav.style.display = `none`;
    $title.style.color = `#333`;
    $menu.style.width = `3.5rem`;
    $menu.style.backgroundImage = `url(/assets/svg/hamburger.svg)`;
    $body.style.overflow = `scroll`;
    openMenu = false;
  }
};

const onScroll = () => {
  if (openMenu === false && window.innerWidth > 750) {
    const scrollTop = window.pageYOffset;
    if (scrollTop > 100) {
      $title.style.marginTop = `3rem`;

    } else {
      $title.style.marginTop = `8rem`;
    }
  }
};

const checkPage = () => {
    if($body.classList.value === `c-bachelor`) {
        // $title.innerHTML = `Vruchtbaarheid is geen eitje`;
    }
}

const pageTransition = () => {
    $(".work-wrapper2 a").on("click", function(event) {
        event.preventDefault()

        const href = $(this).attr("href")

        window.history.pushState(null, null, href)

        $.ajax({
            url: href,
            success: function (data) {
                $("main").fadeOut(500, function() {
                    const newPage = $(data).filter("main").html()
                    $("main").html(newPage)
                    window.scrollTo(0,0)
                    $("main").fadeIn(5)
                })
            }
        })
    })
}

const init = () => {
  $menu.addEventListener(`click`, onMenuClick);
  document.addEventListener(`scroll`, onScroll);
  checkPage();
  pageTransition();
};

init();
