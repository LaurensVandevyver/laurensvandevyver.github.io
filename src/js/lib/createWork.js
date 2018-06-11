export default $work => {
  const $container = document.querySelector(`.work-wrapper`);

  const $workItem = document.createElement(`article`);
  $workItem.classList.add(`work-item`);
  $workItem.classList.add($work.image);

  const $title = document.createElement(`h3`);
  $title.classList.add(`work-title`);
  $title.innerHTML = $work.title;

  const $wrapper = document.createElement(`div`);
  $wrapper.classList.add(`work-item-wrap`);

  const $image = document.createElement(`img`);
  $image.classList.add(`work-image`);
  $image.src = `assets/img/${ $work.image }.jpg`;

  const $text = document.createElement(`p`);
  $text.classList.add(`work-p`);
  $text.innerHTML = $work.desc;

  const $button = document.createElement(`div`);
  $button.classList.add(`work-link`);
  $button.classList.add($work.color);

  const $createA = document.createElement(`a`);
  const $createText = document.createTextNode(`Check it out`);
  $createA.setAttribute(`href`, `${$work.link}`);
  $createA.appendChild($createText);

  $container.appendChild($workItem);
  $workItem.appendChild($title);
  $workItem.appendChild($wrapper);
  $workItem.appendChild($button);
  $button.appendChild($createA);

  $wrapper.appendChild($image);
  $wrapper.appendChild($text);
};
