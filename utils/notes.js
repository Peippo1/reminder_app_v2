// try/catch to catch errors to prevent crashes
const chalk = require('chalk');
const fs = require("fs");
const { allNotes } = require("process");

const loadNotes = () => {
  try {
    const dataBuffer = fs.readFileSync("srs/notes.json");
    const notesJson = dataBuffer.toString();
    return JSON.parse(notesJson);
  } catch (error) {
    return [];
  }
};

const addNote = (myNote) => {
  const allNotes = loadNotes();
  allNotes.push({ reminder: myNote });
};
// then the user needs to put the note back in the file

// this takes all notes passed to the array, saves them as Json and passes them to the file.
const saveNotes = (allNotes) => {
  const notesJson = JSON.stringify(allNotes);
  fs.writeFileSync("notes.json", notes.Json);
};
// add note function
const addNote = (myNote) => {
  const allNotes = loadNotes();
  allNotes.push({ reminder: myNote });
  console.log(`
  added new note ${myNote}
  `)

  saveNotes(allNotes);
};
// listing notes using mapping (recognise this from React)
const listNotes = () => {
  const allNotes = loadNotes();
  allNotes.map((note, index) => {
    console.log(chalk.green(`
    ${index + 1}. {note.reminder}
    `));
  });
};

// Delete note function. filtering notes for If note in array = true then dont include. If false include.
function removeNote(noteToDelete) {
    const allNotes = loadNotes();

    try {
        const removedItem = allNotes.splice(noteToDelete - 1, 1);
        // splicing index of removed note. indexed number first and then number of items to be removed.
        console.log(`
        Successfully removed ${removedItem[0].reminder}
        `);
        // removing item within the array.
    } catch (error) {
        console.log("Number out of range");
    } 

    saveNotes(allNotes);
    // saveNotes to save changes

    // const notesToKeep = allNotes.filter((note) => {
    //     return note.reminder != noteToDelete;
    // });
    // saveNotes(notesToKeep);
};

// export, list export items. e.g addNotes and list Notes
module.exports = {
  addNote,
  listNotes,
  removeNote,
};
