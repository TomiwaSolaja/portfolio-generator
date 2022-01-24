const fs= require('fs');
const generatePage = require('./src/page-template.js');

const profileDataArgs = process.argv.slice(2);

const [name1, github] = profileDataArgs;
/* same as line 2
const name = profileDataArgs[0];
const github = profileDataArgs[1];
*/
fs.writeFile('index.html',generatePage(name1,github),err=>{
  if (err) throw new Error(err);
  console.log('portfolio complete! Check out index.html to see the output!');
})