chrome.runtime.onInstalled.addListener(() => {
  chrome.tabs.create({ url: "https://www.google.com/" });
});
