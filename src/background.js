console.log('IN APPJS')

const PROCESS = require('child_process');
window.spawn = PROCESS.spawn;

window.start = function () {
  console.log('STARTED')
}
