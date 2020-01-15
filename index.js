const { app, BrowserWindow } = require('electron');
let mainWindow;

function createWindow() {
  // Create the browser window with node integration.
  mainWindow = new BrowserWindow({
    width: 460,
    height: 640,
    webPreferences: {
      nodeIntegration: true
    }
  });

  // Load the index.html page.
  mainWindow.loadURL(`http://localhost:6969/app/home`);

  // Emitted when the window is closed.
  mainWindow.on('closed', () => {
    // Dereference the window object
    mainWindow = null
  });
}

// Create the browser window when Electron is ready.
app.on('ready', createWindow);

// Quit when all windows are closed
app.on('window-all-closed', () => {
  // On macOS it is common for applications and their menu bar
  // to stay active until the user quits explicitly with Cmd + Q
  if (process.platform !== 'darwin') {
    app.quit();
  }
});

app.on('activate', () => {
  // On macOS it's common to re-create a window in the app when the
  // dock icon is clicked and there are no other windows open
  if (mainWindow === null) {
    createWindow();
  }
});

// In this file you can include the rest of your app's specific main process
// code. You can also put them in separate files and require them here.
const express = require('express');
const expressApp = express();
const ejs = require('ejs');

// Set the location where express looks for static files
expressApp.use(express.static(__dirname + '/public'));

// Use ejs as the default templating engine
expressApp.set('view engine', 'ejs');
//expressApp.use(express.bodyParser())

// TODO: Move this to router.js
expressApp.get('/app/login', (req, res) => {
  res.sendFile(__dirname + '/public/login.html');
});

expressApp.get('/app/home', (req, res) => {
  res.render(__dirname + '/public/pages/home.ejs');
})

expressApp.listen(6969);