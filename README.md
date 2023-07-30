[![A picture of a tabbed interface](browser_extension/src/icons/icon.png) The icon is from flaticon](https://www.flaticon.com/free-icon/tab_3094392)

# Report Active Tab
A Browser addon for FireFox & Chrome to report the active tab

## Download from public

* [Chrome Web Store](#coming-soon)
* [Firefox Add-ons](#coming-soon)
* [Microsoft Edge (chromium) Add-ons](#coming-soon)

## Usage

After download / install you should have a server send HTTP POST request to `http://localhost/events/browser/tabChanged` every time the tab is changed.

No Extension is active by default for private tabs without explicit consent of the user, so by default this will need to be enabled to work in private tabs.

## Troubleshooting
Please do not send me an email, and instead file a bug in the [issues tab](https://github.com/Lewiscowles1986/report-active-tab-ff-chrome-poc/issues) or contribute a [Pull Request](https://github.com/Lewiscowles1986/report-active-tab-ff-chrome-poc/pulls)
