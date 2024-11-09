<h1 align="left">
  <img src="icon48.png" alt="FindThisGoogle Logo" width="48" height="48">
  FindThisGoogle Chrome Extension
</h1>

A simple Chrome extension that adds a context menu option to search for selected text in Google with exact match (quoted search). The search opens in a new background tab.

## Features

- Right-click context menu integration
- Searches selected text with exact match (adds quotes automatically)
- Opens search in a new background tab
- Keeps focus on your current tab

## Installation

Since this extension is not in the Chrome Web Store, you'll need to install it in developer mode:

1. Clone or download this repository
2. Open Chrome and go to `chrome://extensions/`
3. Enable "Developer mode" in the top right corner
4. Click "Load unpacked"
5. Select the folder containing the extension files

## Files Structure

```
findthisgoogle/
  ├── manifest.json
  ├── background.js
  ├── icon16.png
  ├── icon48.png
  └── icon128.png
```

## Usage

1. Select any text on a webpage
2. Right-click the selected text
3. Click "Search '{selected text}' exactly in Google"
4. A new tab will open in the background with the Google search results

## Requirements

- Google Chrome browser
- Developer mode enabled in Chrome extensions

## License

This project is licensed under the MIT License - see the LICENSE file for details.

## Contributing

1. Fork the repository
2. Create a new branch for your feature
3. Commit your changes
4. Push to the branch
5. Create a new Pull Request

## Support

If you have any issues or suggestions, please create an issue in the GitHub repository.

---

Made using Claude.ai by Ivan Vihe
