# 1-Click Pinboard Read Later extension
I created this pinboard Read Later extension because I don't trust any of the ones in the extension stores at present and Pinboard no longer provides a basic pinner.

## How it works
You click the button, the current tab is saved to Pinboard. If it can't figure out the title, it uses the word "title" instead. 

## Mandatory Configuration
You have to open the background.js file and replace the APITOKEN with your pinboard API token which you can find on the pinboard site under Settings > Password. Then save the file.

Then go to chrome:extensions in your browser. Turn on Dev mode. Drag the whole folder containing the extension in there. Done.  

## Security
As you can see, there is very little going on here. I read the code and understand it to see that there is no 'phoning home' or data collection. It really just sends a HTTP request to pinboard's api. 

## Technical details
Written for Chrome Extension Manifest V3. 