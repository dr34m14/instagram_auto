const ig = require('./bot.js');
// import {instagram} from './bot.js'
(async ()=>{
    console.log(ig)

await ig.initialize();
await ig.login('test','1234');

debugger;
})();