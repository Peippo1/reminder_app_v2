const figlet = require("figlet");
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
const addQuestion =[{type: "input", name: "add", message: "what would you like to add?"}];

const removeQuestion =[{type: "input", name: "remove", message: "what would you like to remove?"}];

const main = () => {
    console.log(chalk.blue(figlet.textSync("Notes App")));
  app();
};
// main function ^ includes chalk and can include figlet fonts.

const app = async () => {
  const answers = await inquirer.prompt(topLevelQuestion);
  if (answers.options == "add") {
    const answer = await inquirer.prompt(addQuestion);
    addNote(answer.add);
    app();
    // above takes the note and passes it to the addNote function.
  } else if (answers.options == "list"){
    listNotes();
    app();

  } else if (answers.options == "remove"){
    listNotes();
    const answer = await inquirer.prompt(removeQuestion);
    removeNote(answer.remove);
    app();

  } else if (answers.options == "exit") {
    console.log("Ok, bye for now");
    }
};

main ();

// above is a question function that calls the answers from the options presented. It uses recursion to go back to the start of the function when input has been declaired. 

// node src/app.js to call
