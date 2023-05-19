import chalk from "chalk";

const colleagues = ["David", "Tristan", "Ayoub", "Loris"];

console.log(
  chalk.green(colleagues[0]) +
    chalk.red(colleagues[1]) +
    chalk.yellow(colleagues[2]) +
    chalk.grey(colleagues[3])
);
