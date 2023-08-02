const generateRandomInteger = (min, max) => {
  return Math.floor(min + Math.random() * (max - min + 1));
};

const play = () => {
  const rand = generateRandomInteger(30, 50);
  const array = new Array(rand);
  for (let i = 0; i < array.length; i++) {
    let elem = document.createElement("div");
    const left = generateRandomInteger(0, window.innerWidth);
    const top = generateRandomInteger(0, window.innerHeight);
    const scale = generateRandomInteger(1, 5);
    const transform = `translate(${
      generateRandomInteger(100, window.innerWidth) - left
    }px, ${generateRandomInteger(100, window.innerHeight) - top}px)`;

    elem.classList.add("emojiBox");
    elem.style.position = "absolute";
    elem.style.left = `${left}px`;
    elem.style.top = `${top}px`;
    elem.style.scale = `${scale}`;
    elem.style.transform = transform;
    elem.style.transition = `all 3s ease-in-out`;
    elem.style.zIndex = "9999";
    elem.innerHTML = `<img src="${chrome.runtime.getURL(
      "images/fingers.png"
    )}" width="18px" height="auto" />`;
    document.body.appendChild(elem);
  }
};
