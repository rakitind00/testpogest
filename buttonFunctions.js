import { ipcRenderer } from 'electron';
const ipc = ipcRenderer

minimize_btn.addEventListener('click', () =>{
  ipc.send('minimize')
});

// close_btn.addEventListener('click', () =>{
//   ipc.send('closeApp')
// });
