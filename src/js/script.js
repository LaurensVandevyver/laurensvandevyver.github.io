// const createWork = $work => {
//   const $container = document.querySelector(`.work-wrapper`);
//
//   const $workie = document.createElement(`article`);
//   $workie.classList.add(`workie`);
//   $workie.classList.add($work.image);
//
//   const $uitleg = document.createElement(`div`);
//   $uitleg.classList.add(`uitleg`);
//
//   const $title = document.createElement(`h4`);
//   $title.innerHTML = $work.title;
//
//   const $p = document.createElement(`p`);
//   $p.innerHTML = $work.desc;
//
//   const $image = document.createElement(`div`);
//   $image.classList.add($work.image);
//   $image.classList.add(`regular`);
//   // if ($work.big === true) {
//   //   $image.classList.add(`large`);
//   // } else {
//   //   $image.classList.add(`regular`);
//   // }
//
//   $container.appendChild($workie);
//   $workie.appendChild($image);
//   $workie.appendChild($uitleg);
//   $uitleg.appendChild($title);
//   $uitleg.appendChild($p);
//
//   $workie.addEventListener(`click`, onItemClick);
// };
//
// const onItemClick = e => {
//   console.log(e.target.class);
// };
//
// const parse = data => {
//   const works = data.works;
//
//   works.forEach(work => {
//     createWork(work);
//   });
// };

let openMenu = false;
let openToggle = false;
const $menu = document.querySelector(`.hamburger`);
const $nav = document.querySelector(`.main-nav`);
const $title = document.querySelector(`.main-title`);
const $overlay = document.querySelector(`.overlay`);
const $body = document.querySelector(`body`);

const onMenuClick = () => {
  // console.log(e);

  if (openMenu === false) {
    $nav.style.display = `flex`;
    $title.style.color = `white`;
    $menu.style.width = `2.3rem`;
    $menu.style.backgroundImage = `url(../assets/svg/close.svg)`;
    $body.style.overflow = `hidden`;
    openMenu = true;
  } else if (openMenu === true) {
    $nav.style.display = `none`;
    $title.style.color = `#333`;
    $menu.style.width = `3.5rem`;
    $menu.style.backgroundImage = `url(../assets/svg/hamburger.svg)`;
    $body.style.overflow = `scroll`;
    openMenu = false;
  }
};

const onScroll = () => {
  if (openMenu === false) {
    const scrollTop = window.pageYOffset;
    if (scrollTop > 100) {
      $title.style.marginTop = `3rem`;

    } else {
      $title.style.marginTop = `7rem`;
    }
  }
};

const closeOverlay = () => {
  $overlay.style.display = `none`;
  // $overlay.removeEventListener();
  openToggle = false;
  $body.style.overflow = `scroll`;
};

const toggleOverlay = () => {
  if (openToggle === false) {
    $overlay.style.display = `flex`;
    $overlay.addEventListener(`click`, closeOverlay);

    $body.style.overflow = `hidden`;

    openToggle = true;
  }
};

const handleBachelor = () => {
  toggleOverlay();
  const $overlay = document.querySelector(`.bachelor-overlay`);
  $overlay.style.display = `flex`;
};

const handleDaikin = () => {
  console.log(`daikin`);
};

const handleMsk = () => {
  console.log(`msk`);
};

const handleNico = () => {
  console.log(`nico`);
};

const handleWorkClick = () => {
  const $bachelor = document.querySelector(`.bachelor`);
  const $daikin = document.querySelector(`.daikin`);
  const $msk = document.querySelector(`.msk`);
  const $nico = document.querySelector(`.nico`);

  $bachelor.addEventListener(`click`, handleBachelor);
  $daikin.addEventListener(`click`, handleDaikin);
  $msk.addEventListener(`click`, handleMsk);
  $nico.addEventListener(`click`, handleNico);
};


const init = () => {
  // fetch(`assets/data/works.json`)
  //   .then(r => r.json())
  //   .then(d => parse(d));
  $menu.addEventListener(`click`, onMenuClick);
  document.addEventListener(`scroll`, onScroll);
  handleWorkClick();
};

init();
