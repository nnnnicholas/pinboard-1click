'use strict';

const apikey = "USERNAME:TOKEN";

function addPin() {
    getCurrentTab().then(tab => {
        post(tab.url, tab.title)
    });
}

async function getCurrentTab() {
    let queryOptions = { active: true, currentWindow: true };
    let [tab] = await chrome.tabs.query(queryOptions);
    return tab;
}

async function post(url, title) {
    title = title ? title.substring(0, 200) : 'title'
    title = encodeURI(title);
    url = encodeURI(url);
    console.log(title);
    fetch('https://api.pinboard.in/v1/posts/add' + '?auth_token=' + apikey +  '&description=' + title+'&url=' + url)
        .then(async response => {
            try {
                const data = await response
                console.log(response);
                console.log('response data ', data)
                chrome.action.setIcon({ path: "green.png" });
                setTimeout(()=>{chrome.action.setIcon({ path: "blue.png" })}, 1000);
            } catch (error) {
                console.log('error: '); console.error(error)
                chrome.action.setIcon({ path: "red.png" });
                setTimeout(()=>{chrome.action.setIcon({ path: "blue.png" })}, 1000);
            }
        })
}

chrome.action.onClicked.addListener(addPin);
