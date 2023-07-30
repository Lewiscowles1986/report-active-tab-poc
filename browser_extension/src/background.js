// background.js
const serverUrl = 'http://localhost/events/browser/tabChanged';

// @ts-ignore
const browserApi = typeof browser === 'object' ? browser : chrome;
let acting = false;
let lastWindow = -1;

// Hook into switching browser windows (from other apps and between browser)
browserApi.windows.onFocusChanged.addListener((windowId) => {
  if (windowId != lastWindow) {
    if (windowId !== -1) {
      lastWindow = windowId;
    }

    browserApi.tabs.query({ active: true, currentWindow: true }, (tabs) => {
      if (tabs && tabs.length > 0) {
        const activeTab = tabs[0];
        handleTabActivation(activeTab);
      }
    });
  };
});

// Hook into tab change / tab url change
browserApi.tabs.onActivated.addListener((activeInfo) => {
  browserApi.tabs.get(activeInfo.tabId, handleTabActivation);
});

const handleTabActivation = (tab) => {
  if (tab.url) {
    acting = true;
    const url = tab.url;
    const payload = { url: url };

    fetch(serverUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(payload),
    })
      .then((response) => {
        if (response.ok) {
          console.log('Tab changed event sent to server.', { payload, serverUrl });
        } else {
          console.error('Server Failed to process tab changed event.', { payload, serverUrl });
        }
      })
      .catch((error) => {
        console.error('Error sending tab changed event:', { payload, serverUrl, error });
      })
      .finally(() => {
        acting = false;
      });
  }
};
