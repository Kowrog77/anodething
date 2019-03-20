//console.log("Yee ha to package managmemt")
const chalk = require('chalk');
 
console.log(chalk.bgRed(chalk.green('              ')));
var arr = [1, 1, 2, 2, 3, 5]
 
require("uniq")(arr);
console.log(chalk.cyan(arr));