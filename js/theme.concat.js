var chopstick =
{
    // init, something like a constructor
    init: function()
    {
        chopstick.loadObject(chopstick.mobileNav, 'chopstick.mobileNav');
        chopstick.loadObject(chopstick.hide, 'chopstick.hide');
        chopstick.loadObject(chopstick.toggle, 'chopstick.toggle');
    },

    /**
     * This function will load an object by a given name
     *
     * If the object doesn't exist no error will be thrown
     * But if object exists but doesn't have an init method it will throw an error
     *
     * If everything is ok we'll initiate the given object
     */
    loadObject: function(obj, name)
    {
        // create object based on a name
        // var objName = window[objName];

        // check if object exists
        if(typeof obj != 'undefined') {

            // check if object has a method init
            if (typeof obj.init == 'undefined') {
                // we will throw an error so the designer / developer know there's a problem
                throw new Error('ERROR: "' + name + '" does not have an init function');

            } else {
                // everything is fine so initiate
                obj.init();
            }
        }
    }
};

var hideSettings
chopstick.hide =
{
    settings:
    {
        hide: $('.js-hide')
    },

    init: function()
    {
        hideSettings = chopstick.hide.settings;
        chopstick.hide.hideContent();
    },

    hideContent: function ()
    {
        hideSettings.hide.on('click', function(e)
        {
            e.preventDefault();
            $(this).closest(hideSettings.hide).parent().addClass('is-hidden');
        });
    }
};

var mobileNavSettings
chopstick.mobileNav =
{
    settings:
    {
        navigation: $('.js-nav'),
        trigger: $('.js-nav-trigger')
    },

    init: function()
    {
        // Initialize mobile nav settings
        mobileNavSettings = chopstick.mobileNav.settings;
        // Bind toggle events
        chopstick.mobileNav.bindUIEvents();
    },

    bindUIEvents: function()
    {
        mobileNavSettings.trigger.on('click', function() {
            chopstick.mobileNav.toggleNavigation();
        });
    },

    // build mobile nav
    toggleNavigation: function()
    {
        mobileNavSettings.navigation.toggleClass('is-visible');
        mobileNavSettings.trigger.toggleClass('is-active');
    }
};

var toggleSettings
chopstick.toggle =
{
    settings:
    {
        showHideToggle: $('.js-show-hide')
    },

    init: function()
    {
        // Initialize toggle settings
        toggleSettings = chopstick.toggle.settings;
        // Bind toggle events
        chopstick.toggle.bindUIEvents();
    },

    bindUIEvents: function()
    {
        // Bind show hide event
        toggleSettings.showHideToggle.on('touchstart click', function(e){
            var trigger = $(this);
            // Check if action needs to be prevented
            if (trigger.data("action") == "none") {
                e.preventDefault();
            }
            chopstick.toggle.showHide(trigger.data("target-selector"));
            trigger.toggleClass('is-toggled');
        });
    },

    showHide: function(targets)
    {
        //  Toggle the 'is-hidden' class
        $(targets).toggleClass('is-hidden');
    }
};

$(chopstick.init);

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
