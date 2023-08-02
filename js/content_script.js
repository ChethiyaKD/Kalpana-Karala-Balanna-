const handleFirstTime = () => {
  let isAnimated = localStorage.getItem("animated");
  if (isAnimated) return;

  let timer = setInterval(() => {
    let searchInput = document.querySelector("input[name='q']");
    let searchForm = document.querySelector("form[action='/search']");
    if (!searchInput) return;
    clearInterval(timer);

    setTimeout(() => {
      searchInput.value = "s";
    }, 2000);
    setTimeout(() => {
      searchInput.value = "sa";
    }, 2500);
    setTimeout(() => {
      searchInput.value = "sah";
    }, 3000);
    setTimeout(() => {
      searchInput.value = "saho";
    }, 3700);
    setTimeout(() => {
        localStorage.setItem("animated", true);
      if (searchForm) searchForm.submit();
    }, 5000);
  }, 100);
};

const isSaho = () => {
  let timer = setInterval(() => {
    if (!window.location.search.includes("q=saho")) return;
    clearInterval(timer);
    play();
  }, 100);
};

const googleOfferedIn = () => {
  let timer = setInterval(() => {
    let offeredIn = document.querySelector("#SIvCob");
    if (!offeredIn) return;
    offeredIn.innerHTML = offeredIn.innerHTML.replace(
      "Google offered in:",
      "අපිට දෙකම පුලුවන්:"
    );
  }, 100);
};

const changeMaps = () => {
  let timer = setInterval(() => {
    let aS = document.querySelectorAll("a");
    // let spans = document.querySelectorAll("span");
    for (a of aS)
      if (a.textContent === "Maps")
        a.innerHTML = a.innerHTML.replace("Maps", "මේ පාර කොහාටද?");
    // for (let span of spans)
    //   if (span.textContent === "Maps") span.textContent = "මේ පාර කොහාටද?";
  }, 300);
};

const changeGooogle = () => {
  let timer = setInterval(() => {
    let elems = document.querySelectorAll(".SJajHc");
    if (elems.length === 0) return;

    clearInterval(timer);

    for (let index in elems) {
      if (index == 0) {
        elems[index].style =
          "background:url(https://raw.githubusercontent.com/ChethiyaKD/Kalpana-Karala-Balanna-/main/images/kayanna.png) no-repeat;background-position:center;background-size:25px;width:28px";
        continue;
      }
      if (index == elems.length - 1) {
        elems[index].style =
          "background:url(https://raw.githubusercontent.com/ChethiyaKD/Kalpana-Karala-Balanna-/main/images/panaa.png) no-repeat;background-position: 0 5px;background-size:50px;width:71px";
        continue;
      }
      elems[index].style =
        "background:url(https://raw.githubusercontent.com/ChethiyaKD/Kalpana-Karala-Balanna-/main/images/layanna.png) no-repeat;background-position: -5px 3px;background-size: 27px;width:20px";
    }
  }, 100);
};

const addSahodaraya = () => {
  let timer = setInterval(() => {
    let parent = document.querySelector(".uU7dJb");
    if (parent) {
      clearInterval(timer);

      parent.style.display = "flex";
      parent.style.justifyContent = "space-between";

      let anchorNode = document.createElement("a");
      anchorNode.innerHTML = "Made by කුසල් සහෝදරයා";
      anchorNode.href = "https://github.com/ChethiyaKD";
      anchorNode.target = "_blank";
      anchorNode.style.color = "#8b8b8b";
      anchorNode.style.opacity = "0.3";

      parent.appendChild(anchorNode);
    }
  }, 300);
};

const init = () => {
  addSahodaraya();
  changeGooogle();
  changeMaps();
  googleOfferedIn();
  isSaho();
  handleFirstTime();

  let timer = setInterval(() => {
    let googleLogo = document.querySelector("img[class='lnXdpd']");
    let searchButton = document.querySelector("input[value='Google Search']");
    let logoInSearch = document.querySelector("img[class='jfN4p']");
    let searchButton2 = document.querySelector(
      `input[value="I'm Feeling Lucky"]`
    );
    if (googleLogo) {
      googleLogo.src =
        chrome.runtime.getURL("images/logo.svg");
      googleLogo.srcset =
        "https://uvindubro.me/kalpana/images/kalpana-engine-logo-01.svg";
    }
    if (logoInSearch) {
      logoInSearch.src =
        "https://uvindubro.me/kalpana/images/kalpana-engine-logo-01.svg";
      logoInSearch.srcset =
        "https://uvindubro.me/kalpana/images/kalpana-engine-logo-01.svg";
    }
    if (searchButton) {
      searchButton.value = "බලන්න";
    }
    if (searchButton2) {
      searchButton2.value = "නැද්ද හා";
      // clearInterval(timer);
    }
    let currentTitle = document.title;
    let newTitle = currentTitle.replace("Google", "කල්පනා කරලා බලන්න");
    document.title = newTitle;
  }, 100);
};

init();
