// try/catch to catch errors to prevent crashes
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

  saveNotes(allNotes);
};
// listing notes using mapping (recognise this from React)
const listNotes = () => {
  const allNotes = loadNotes();
  allNotes.map((note, index) => {
    console.log(`${index + 1}. {note.reminder}`);
  });
};

// Delete note function. filtering notes for If note in array = true then dont include. If false include.
function removeNote(noteToDelete) {
    const allNotes = loadNotes();
    const notesToKeep = allNotes.filter((note) => {
        return note.reminder != noteToDelete;
    });
    saveNotes(notesToKeep);
}

// export, list export items. e.g addNotes and list Notes
module.exports = {
  addNote,
  listNotes,
  removeNote,
};
