const isDark =
  window.matchMedia &&
  window.matchMedia("(prefers-color-scheme: dark)").matches;
const body = document.querySelector("body");
const searchInput = document.querySelector("#searchInput");
const searchButton = document.querySelector("#searchIconButton");
const addQuickLinksContainer = document.querySelector(".quick-access");

const setColors = () => {
  body.classList.add("bodyDarkMode");
};

const handleGoogleSearch = () => {
  if (!searchInput.value) return;
  window.location.href = "https://www.google.com/search?q=" + searchInput.value;
};

const addEventListeners = () => {
  searchInput.addEventListener("keyup", (e) => {
    if (e.keyCode !== 13) return;
    handleGoogleSearch();
  });
  searchButton.addEventListener("click", handleGoogleSearch);
};

const addQuickLinks = () => {
  chrome.topSites.get((topSites) => {
    const innerHTML = topSites.map((site) => {
      const url = new URL(site.url);
      const hostname = url?.hostname;
      return ` <a href=${site.url} class="quick-access-button">
            <div class="icon-container">
              <img src="https://icon.horse/icon/${hostname}" alt="" />
            </div>
            <span class="website-name">${site.title}</span>
          </a>`;
    });

    const combinedHTML = innerHTML.join("");
    addQuickLinksContainer.innerHTML = combinedHTML;
  });
};

const init = () => {
  setColors();
  addEventListeners();
  addQuickLinks();
};

init();
