const path = require('path');
const fs = require('fs');
const { exec } = require('child_process')

const dir = path.join(__dirname,'schemas');

var aliases = {}

fs.readdir(dir, (err, files) => {
  files.forEach((file) => {
    fs.readFile(path.join(dir,file), 'utf-8', (err, content) => {
      exec('ceramic create tile --content \''+content+'\'', 
      (err, out, outerr) => {
      let sub = out.substring(6,out.indexOf(')'))
      aliases[file.substring(0, file.indexOf('.'))] = sub
      console.log(aliases)
      })
    })
  })
})

setTimeout(() => { 
  console.log(aliases)
  console.log(JSON.stringify(aliases))
  fs.promises.writeFile(path.join(__dirname,'../aliases.json'), JSON.stringify(aliases))
}, 30000); // TODO BEWARE

/* 
async function firstFunction() {
  await fs.promises.<method>(...)
  fs.readdir(dir, (err, files) => {
    files.forEach((file) => {
      fs.readFile(path.join(dir,file), 'utf-8', (err, content) => {
        exec('ceramic create tile --content \''+content+'\'', 
        (err, out, outerr) => {
        let sub = out.substring(6,out.indexOf(')'))
        aliases[file.substring(0, file.indexOf('.'))] = sub
        console.log(aliases)
        })
      })
    })
   })
}

async function secondFunction() {
  await firstFunction()
  await fs.promises.<method>(...)
  // other logic...
}

secondFunction()
*/