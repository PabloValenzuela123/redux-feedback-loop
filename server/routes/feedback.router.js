const express = require('express');
const router = express.Router();
const pool = require('../modules/pool.js');

// GET Route
router.get('/', (req, res) => {
    const sqlText = `SELECT * FROM feedback ORDER BY id;`;
    pool.query(sqlText)
        .then((result) => {
            console.log(`Back from DB:`, result);
            res.send(result.rows);
        })
        .catch((error) => {
            console.log(`Error making database query ${sqlText}`, error);
            res.sendStatus(500);
        })
}) // End GET Route

// POST Route
router.post('/', (req, res) => {
    let feedbackData = req.body;
    console.log(req.params);
    let sqlText = '';
    sqlText = `INSERT INTO "feedback" ("feeling", "understanding", "support", "comments") VALUES ($1, $2, $3, $4);`;

    pool.query(sqlText, [feedbackData.feeling, feedbackData.understanding, feedbackData.support, feedbackData.comments])
        .then((result) => {
            res.sendStatus(201);
        })
        .catch((error) => {
            console.log(`Error making database ${sqlText}`, error);
            res.sendStatus(500);
        })
}); // End POST Route



module.exports = router;