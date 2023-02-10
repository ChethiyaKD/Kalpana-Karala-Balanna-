const changeGooogle = () => {
  let timer = setInterval(() => {
    let elems = document.querySelectorAll(".SJajHc");
    if (elems.length === 0) return;
    
    clearInterval(timer);
    
  }, 100);
}

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

  let timer = setInterval(() => {
    let googleLogo = document.querySelector("img[class='lnXdpd']");
    let searchButton = document.querySelector("input[value='Google Search']");
    let logoInSearch = document.querySelector("img[class='jfN4p']");
    let searchButton2 = document.querySelector(
      `input[value="I'm Feeling Lucky"]`
    );
    if (googleLogo) {
      googleLogo.src =
        "https://uvindubro.me/kalpana/images/kalpana-engine-logo-01.svg";
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
      clearInterval(timer);
    }
    let currentTitle = document.title;
    let newTitle = currentTitle.replace("Google", "කල්පනා කරලා බලන්න");
    document.title = newTitle;
  }, 100);
};

init();
