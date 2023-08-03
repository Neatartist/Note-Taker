const path = require('path');
const router = require('express').Router();

// GET Route for retrieving all the notes
router.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '/public/index.html'));
});

router.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, '/public/index.html'));
});


// GET Route for retrieving all the notes
router.get('/notes', (req, res) => {
    res.sendFile(path.join(__dirname, '/public/notes.html'));
});

module.exports = router;