const { Mastodon } = require('mastodon-api');
const { remote } = require('electron');

let loginButton = document.querySelector('#login');
let instanceUrl = document.querySelector('#instanceUrl');

// Set the placeholder URL as the value
instanceUrl.value = instanceUrl.placeholder;

loginButton.addEventListener('click', function() {
  // Redirect to the instance URL for handling authentication
  remote.getCurrentWindow().loadURL(instanceUrl.value);
});