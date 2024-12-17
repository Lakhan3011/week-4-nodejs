const {Command} = require('commander');
const fs = require('fs');
const program = new Command();

program
    .name('counter')
    .description('CLI to count number of lines in file')
    .version('0.8.0');

program.command('count')
  .description('Count the number of lines of a file')
  .argument('<file>', 'file to count3')
  .action((file) => {
    fs.readFile(file, 'utf-8', (err,data) => {
      if(err){
        console.log(err);
      }
      else{
        const lines = data.split('\n').length;
        console.log(`There are ${lines} lines in ${file} .`);
      }
    })
  });

program.parse();