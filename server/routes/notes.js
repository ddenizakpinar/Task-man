const express = require('express');
const router = express.Router();
const Note = require('../models/Note');

/* GET spef. user notes */
router.get('/:username', function (req, res, next) {
    const note = new Note(req.body);
    const promise = Note.aggregate([{
        $match: {
            'username': req.params.username
        }
    }]);


    promise.then((data) => {
        res.json(data);
    }).catch((err) => {
        res.json(err);
    });
});

/* GET all notes */
router.get('/', function (req, res, next) {
    const note = new Note(req.body);
    const promise = Note.find({}, (data, err) => {
    });

    promise.then((data) => {
        res.json(data);
    }).catch((err) => {
        res.json(err);
    });
});

router.post('/', (req, res, next) => {
    const note = new Note(req.body);
    const promise = note.save();

    promise.then((data) => {
        res.json(data);
    }).catch((err) => {
        res.json(err);
    });

});

// Delete note from id
router.delete('/:note_id', (req, res, next) => {
    const note = new Note(req.body);
    const promise = Note.findByIdAndRemove(req.params.note_id);
    promise.then((data) => {
        res.json(data);
    }).catch((err) => {
        res.json(err);
    });
});

// Update note from id
router.put('/:note_id', (req, res, next) => {
    const note = new Note(req.body);
    const promise = Note.findByIdAndUpdate(req.params.note_id, req.body);
    promise.then((data) => {
        res.json(data);
    }).catch((err) => {
        res.json(err);
    });
});

module.exports = router;
