/*
* Javascript code for doing sleep in loop
* its uses: setTimeout() and shift() not "for"
* shift(): Remove the first item of an array
* demo: https://repl.it/BmeV
* by ewwink
*/

var num = [1, 2, 3, 4, 5, 7, 8, 9, 10, 11, 12];

function sleepExec() {
  setTimeout(continueExec, 2000); //wait two seconds before continuing
}

function continueExec() {
  doExec(num.shift());
}

function doExec(i) {
  console.log("doing: " + i + " - " + new Date().toLocaleTimeString());
  if (num.length)
    sleepExec();
  else
    console.log("Finished!");
}
doExec(num.shift());
