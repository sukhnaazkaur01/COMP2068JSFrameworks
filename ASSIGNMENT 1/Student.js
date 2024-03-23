const express = require('express');
const router = express.Router();
const Student = require('../models/Student');

// READ students
router.get('/', async (req, res) => {
    try {
        const students = await Student.find();
        res.render('students/index', { students });
    } catch (err) {
        console.error(err);
        res.status(500).send('Server Error');
    }
});

// CREATE student form
router.get('/new', (req, res) => {
    res.render('students/new');
});

// CREATE student
router.post('/', async (req, res) => {
    try {
        await Student.create(req.body);
        res.redirect('/students');
    } catch (err) {
        console.error(err);
        res.status(500).send('Server Error');
    }
});

// Other CRUD operations (update, delete) can be i
module.exports = router;