chrome.runtime.onInstalled.addListener(() => {
  chrome.contextMenus.create({
    id: "findThis",
    title: "Search \"%s\" exactly in Google",
    contexts: ["selection"]
  });
});

chrome.contextMenus.onClicked.addListener((info, tab) => {
  if (info.menuItemId === "findThis") {
    const selectedText = info.selectionText;
    const searchUrl = `https://www.google.com/search?q="${encodeURIComponent(selectedText)}"`;
    
    chrome.tabs.create({
      url: searchUrl,
      active: false,
      index: tab.index + 1
    });
  }
});