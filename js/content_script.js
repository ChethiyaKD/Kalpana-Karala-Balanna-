const init = () => {
  setInterval(() => {
    let googleLogo = document.querySelector("img[class='lnXdpd']");
    let searchButton = document.querySelector("input[value='Google Search']");
    let searchButton2 = document.querySelector(
      `input[value="I'm Feeling Lucky"]`
    );
    if (googleLogo) {
      googleLogo.src =
        "https://uvindubro.me/kalpana/images/kalpana-engine-logo-01.svg";
      googleLogo.srcset =
        "https://uvindubro.me/kalpana/images/kalpana-engine-logo-01.svg";
    }
    if (searchButton) {
      searchButton.value = "බලන්න";
    }
    if (searchButton2) {
      searchButton2.value = "නැද්ද හා";
    }
  }, 300);
};

init();
