import('./bootstrap').catch((err) => console.error(err));

//BELOW CODE IF WE NEED TO GIVE TIME FOR WEBPACK TO CHOOSE THE COMPATIBLE VERSION OF THE DEPEDENCIES WHEN SHELL AND REMOTE USE DIFFERENT VERSIONS
// import { loadRemoteEntry } from '@angular-architects/module-federation';
// Promise.all([loadRemoteEntry('https://localhost:8080/remoteEntry.js', 'mfe_dynamic')])
//   .catch(err => console.error('Error loading remote entries', err))
//   .then(() => import('./bootstrap'))
//   .catch(err => console.error(err));
