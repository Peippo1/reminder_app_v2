const figlett = require("figlet");
// impliment FIG font - Ascii art.
const inquirer = require("inquirer");
// allows for interaction with the user interface.
// uses promises.
const chalk = require('chalk');
// chalk npm for color - remember to check syntax
const {addNote, listNotes, removeNote} = require("../utils/notes");
// importing from local

const topLevelQuestion = [
  {
    type: "list",
    name: "options",
    message: "What would you like to do?",
    choices: ["add", "list", "remove", "exit"],
  },
];
// add question function 
const addQuestion =[ 
    {type: "inut", name: "add", message: "what would you like to add?"}
];

const removeQuestion =[ 
    {type: "input", name: "remove", message: "what would you like to remove?"}
];

const main = () => {
  console.log(chalk.blue(figlet.textSync("Notes App")));
  app();
};
// 

const app = async () => {
  const answers = await inquirer.prompt(topLevelQuestion);
  if (answers.options == "add") {
    const answer = await inquirer.prompt(addQuestion);
    console.log(answer.add);
    app();
    // above takes the note and passes it to the addNote function.
  } else if (answers.options == "list"){
    listNotes();
    console.log("listing notes...");
    app();



  } else if (answers.options == "remove"){
    const answer = await inquirer.prompt(removeQuestion);
    removeNote(answer.remote);
    console.log("removing a note");
    app();


  } else if (answers.options == "exit") {
    console.log("adding a note");
    }

};

main ();

// above is a question function that calls the answers from the options presented. It uses recursion to go back to the start of the function when input has been declaired. 

// node src/app.js to call
