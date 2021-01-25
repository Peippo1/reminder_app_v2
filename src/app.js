const figlett = require("figlet");
// impliment FIG font - Ascii art.
const inquirer = require("inquirer");
// allows for interaction with the user interface.
// uses promises.
const { addNote } = require("../utils/notes");
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
    {type: "input", name: "add", message: "what would you like to add?"}
];

const main = () => {
  console.log(figlet.textSync("Notes App"));
  app();
};

const app = async () => {
  const answers = await inquirer.prompt(topLevelQuestion);
  if (answers.options == "add") {
    const answer = await inquirer.prompt(addQuestion);
    console.log(answer.add);
    app()
    // above takes the note and passes it to the addNote function.
  } else if (answers.options == "list"){
    console.log("listing notes...");
    app()
  } else if (answers.options == "remove"){
    console.log("removing a note");
    app()
  } else if (answers.options == "exit") {
    console.log("adding a note");
    }

};

// above is a question function that calls the answers from the options presented. It uses recursion to go back to the start of the function when input has been declaired. 

// node src/app.js to call
