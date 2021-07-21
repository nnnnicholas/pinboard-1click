# 1-Click Pinboard Read Later extension

<img src="/bitmap.png" width="100" height="auto">

I created this pinboard Read Later extension because I don't trust any of the ones in the extension stores at present and Pinboard no longer provides a basic pinner.

## How it works
You click the button, the current tab is saved to Pinboard. If it can't figure out the title, it uses the word "title" instead. 

## Mandatory Configuration
You have to open the background.js file and replace the UNAME:APITOKEN with your pinboard API token which you can find on the pinboard site under Settings > Password ([link](https://pinboard.in/settings/password)). Then save the file.

Then go to chrome:extensions in your browser. Turn on Dev mode. Drag the whole folder containing the extension in there. Done.  

## Security
This extension is composed of 35 lines of Javascript and a short manifest. As you can see, there is very little going on here. Please read the code and understand it to see that there is no 'phoning home' or data collection, even on the local machine. It really just sends a HTTP request to Pinboard's API. 

## Technical details
Written for Chrome Extension Manifest V3. 

## Next steps
I may never touch this repo again, but if I do, I would like to make the following update(s):
- Extension icon should give visual confirmation when current tab is successfully saved
- Make portable to Firefox and Safari
- Add settings panel to input APITOKEN more comfortably
- Publish to Extension stores