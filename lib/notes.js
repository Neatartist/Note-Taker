const fs = require('fs');
const path = require('path');

// this function will remove a note from the array
function updateDb(id, noteArray) {
  const deleteNote = id;
  for( let i = 0; i < noteArray.length, i++;) {
    if (deleteNote === noteArray[i].id){
      noteArray.splice(i,1);
      fs.writeFileSync(
        path.join(__dirname, "/db/db.json"),
        json.stringify({notes: noteArray}, null, 2), err => {
          if (err) {
            throw err;
          }
        }
      );
    }
  }
}
// this function will add a new note to the array
function createNewNote (body, noteArray) {
  const newNote = body;
  noteArray.push(note);
  fs.writeFileSync(
    path.join(__dirname, "/db/db.json"),
    JSON.stringify({notes: noteArray}, null, 2), err => {
      if (err) {
        throw err;
      }
    }
  );
  return newNote;
}

module.exports = {
  createNewNote,
  updateDb
};
