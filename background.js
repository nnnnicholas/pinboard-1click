'use strict';

const apikey = "USERNAME:APITOKEN";

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
  fetch('https://api.pinboard.in/v1/posts/add' + '?auth_token=' + apikey + '&url=' + encodeURI(url) + '&description=' + encodeURI(title ? title.substring(0,200) : 'title'))
    .then(async response => {
      try {
        const data = await response
        console.log(response);
        console.log('response data ', data)
      } catch (error) { 
        console.log('error: '); console.error(error) 
      }
    })
    // .then(data => { console.log(data) })
}

chrome.action.onClicked.addListener(addPin);
addPin();