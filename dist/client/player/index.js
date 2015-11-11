'use strict';

var _PlayerPerformance = require('./PlayerPerformance.js');

var _PlayerPerformance2 = _interopRequireDefault(_PlayerPerformance);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// Import Soundworks modules (client side)
var clientSide = require('soundworks')('client');
var client = clientSide.client;
var audioContext = clientSide.audioContext;

// Import modules written for Soundfield

// Initiliaze the client type
client.init('player');

// Constants
var files = ['sounds/sound-welcome.mp3', 'sounds/sound-others.mp3'];

// Where the magic happens
window.addEventListener('load', function () {
  // Instantiate the modules
  var welcome = new clientSide.Dialog({
    name: 'welcome',
    text: '<p>Welcome to <b>Soundfield</b>.</p>\n    <p>Touch the screen to join!</p>',
    activateAudio: true
  });
  var checkin = new clientSide.Checkin();
  var loader = new clientSide.Loader({ files: files });
  var performance = new _PlayerPerformance2.default(loader);

  // Start the scenario and link the modules
  client.start(function (serial, parallel) {
    return serial(parallel(
    // We launch in parallel the welcome module, the loader and the checkin…
    welcome, loader, checkin), performance // … and when all of them are done, we launch the performance.
    );
  });
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImluZGV4LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUNBLElBQU0sVUFBVSxHQUFHLE9BQU8sQ0FBQyxZQUFZLENBQUMsQ0FBQyxRQUFRLENBQUMsQ0FBQztBQUNuRCxJQUFNLE1BQU0sR0FBRyxVQUFVLENBQUMsTUFBTSxDQUFDO0FBQ2pDLElBQU0sWUFBWSxHQUFHLFVBQVUsQ0FBQyxZQUFZOzs7QUFBQzs7QUFNN0MsTUFBTSxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUM7OztBQUFDLEFBR3RCLElBQU0sS0FBSyxHQUFHLENBQUMsMEJBQTBCLEVBQUUseUJBQXlCLENBQUM7OztBQUFDLEFBR3RFLE1BQU0sQ0FBQyxnQkFBZ0IsQ0FBQyxNQUFNLEVBQUUsWUFBTTs7QUFFcEMsTUFBTSxPQUFPLEdBQUcsSUFBSSxVQUFVLENBQUMsTUFBTSxDQUFDO0FBQ3BDLFFBQUksRUFBRSxTQUFTO0FBQ2YsUUFBSSw4RUFDNkI7QUFDakMsaUJBQWEsRUFBRSxJQUFJO0dBQ3BCLENBQUMsQ0FBQztBQUNILE1BQU0sT0FBTyxHQUFHLElBQUksVUFBVSxDQUFDLE9BQU8sRUFBRSxDQUFDO0FBQ3pDLE1BQU0sTUFBTSxHQUFHLElBQUksVUFBVSxDQUFDLE1BQU0sQ0FBQyxFQUFFLEtBQUssRUFBRSxLQUFLLEVBQUUsQ0FBQyxDQUFDO0FBQ3ZELE1BQU0sV0FBVyxHQUFHLGdDQUFzQixNQUFNLENBQUM7OztBQUFDLEFBR2xELFFBQU0sQ0FBQyxLQUFLLENBQUMsVUFBQyxNQUFNLEVBQUUsUUFBUTtXQUM1QixNQUFNLENBQ0osUUFBUTs7QUFFTixXQUFPLEVBQ1AsTUFBTSxFQUNOLE9BQU8sQ0FDUixFQUNEO0FBQVcsS0FDWjtHQUFBLENBQ0YsQ0FBQztDQUNILENBQUMsQ0FBQyIsImZpbGUiOiJpbmRleC5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8vIEltcG9ydCBTb3VuZHdvcmtzIG1vZHVsZXMgKGNsaWVudCBzaWRlKVxuY29uc3QgY2xpZW50U2lkZSA9IHJlcXVpcmUoJ3NvdW5kd29ya3MnKSgnY2xpZW50Jyk7XG5jb25zdCBjbGllbnQgPSBjbGllbnRTaWRlLmNsaWVudDtcbmNvbnN0IGF1ZGlvQ29udGV4dCA9IGNsaWVudFNpZGUuYXVkaW9Db250ZXh0O1xuXG4vLyBJbXBvcnQgbW9kdWxlcyB3cml0dGVuIGZvciBTb3VuZGZpZWxkXG5pbXBvcnQgUGxheWVyUGVyZm9ybWFuY2UgZnJvbSAnLi9QbGF5ZXJQZXJmb3JtYW5jZS5qcyc7XG5cbi8vIEluaXRpbGlhemUgdGhlIGNsaWVudCB0eXBlXG5jbGllbnQuaW5pdCgncGxheWVyJyk7XG5cbi8vIENvbnN0YW50c1xuY29uc3QgZmlsZXMgPSBbJ3NvdW5kcy9zb3VuZC13ZWxjb21lLm1wMycsICdzb3VuZHMvc291bmQtb3RoZXJzLm1wMyddO1xuXG4vLyBXaGVyZSB0aGUgbWFnaWMgaGFwcGVuc1xud2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ2xvYWQnLCAoKSA9PiB7XG4gIC8vIEluc3RhbnRpYXRlIHRoZSBtb2R1bGVzXG4gIGNvbnN0IHdlbGNvbWUgPSBuZXcgY2xpZW50U2lkZS5EaWFsb2coe1xuICAgIG5hbWU6ICd3ZWxjb21lJyxcbiAgICB0ZXh0OiBgPHA+V2VsY29tZSB0byA8Yj5Tb3VuZGZpZWxkPC9iPi48L3A+XG4gICAgPHA+VG91Y2ggdGhlIHNjcmVlbiB0byBqb2luITwvcD5gLFxuICAgIGFjdGl2YXRlQXVkaW86IHRydWVcbiAgfSk7XG4gIGNvbnN0IGNoZWNraW4gPSBuZXcgY2xpZW50U2lkZS5DaGVja2luKCk7XG4gIGNvbnN0IGxvYWRlciA9IG5ldyBjbGllbnRTaWRlLkxvYWRlcih7IGZpbGVzOiBmaWxlc8KgfSk7XG4gIGNvbnN0IHBlcmZvcm1hbmNlID0gbmV3IFBsYXllclBlcmZvcm1hbmNlKGxvYWRlcik7XG5cbiAgLy8gU3RhcnQgdGhlIHNjZW5hcmlvIGFuZCBsaW5rIHRoZSBtb2R1bGVzXG4gIGNsaWVudC5zdGFydCgoc2VyaWFsLCBwYXJhbGxlbCkgPT5cbiAgICBzZXJpYWwoXG4gICAgICBwYXJhbGxlbChcbiAgICAgICAgLy8gV2UgbGF1bmNoIGluIHBhcmFsbGVsIHRoZSB3ZWxjb21lIG1vZHVsZSwgdGhlIGxvYWRlciBhbmQgdGhlIGNoZWNraW7igKZcbiAgICAgICAgd2VsY29tZSxcbiAgICAgICAgbG9hZGVyLFxuICAgICAgICBjaGVja2luXG4gICAgICApLFxuICAgICAgcGVyZm9ybWFuY2UgLy8g4oCmIGFuZCB3aGVuIGFsbCBvZiB0aGVtIGFyZSBkb25lLCB3ZSBsYXVuY2ggdGhlIHBlcmZvcm1hbmNlLlxuICAgIClcbiAgKTtcbn0pO1xuIl19