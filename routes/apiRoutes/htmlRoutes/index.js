const router = require('express').Router();
const {createNewNote, updateDb} = require('/lib/notes');
const {notes} = require('/db/db.json');
const {v4: uuivd4} = require('uuid');

// GET Route for retrieving all the notes
router.get('/lib/notes.js', (req, res) => {
    let results = notes;
    res.json(results);
});

router.post('/lib/notes.js', (req,res) => {
  req.body.id = uuivd4();
  const newNote = createNewNote(req.body, notes);
  res.json(newNote);
});

router.delete('/lib/notes.js/:id', (req, res) => {
  const params = req.params.id
  updateDb(params,notes);
  res.redirect('');
});

module.exports = router;
