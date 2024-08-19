const express = require('express');
const router = express.Router();
const pool = require('../modules/pool')


// TODO: This route adds a new feedback entry
router.post('/', (req, res) => {

    const data = req.body;
    sqlText = `INSERT INTO "feedback"
                ("feeling", "understanding", "support", "comments")
                VALUES
                ($1, $2, $3, $4);`

    sqlValues = [
        data.feeling,
        data.understanding,
        data.support,
        data.comments
    ]

    pool.query(sqlText, sqlValues)
    .then((result) => {
        console.log('Server posted data:', result.rows);
        res.sendStatus(201);
    }) .catch((err) => {
        console.log('Server caanot post data:', err);
        res.sendStatus(500);
    })

})

router.get('/', (req, res) => {

    sqlText = `SELECT "feeling", "understanding", "support", "comments" FROM "feedback"
                ORDER BY "id";`

    pool.query(sqlText)
    .then((result) => {
        console.log('Server got data:', result.rows);
        res.send(result.rows);
    }) .catch((err) => {
        console.log('Server caanot get data:', err);
        res.sendStatus(500);
    })
    
})

router.delete('/:id', (req, res) => {
    const id = req.params.id;
    const sqlText = `DELETE FROM "feedback"
                        WHERE "id" = $1;`
    const sqlValue = [id];
    pool.query(sqlText, sqlValue)
    .then((result) => {
        console.log('Server deleted item:', result.rows);
        res.sendStatus(200);
    }) .catch((err) => {
        console.log('Server could not delete:', err);
        res.sendStatus(500);
    })

})












// DO NOT EDIT THIS ROUTE
// This route must return all feedback.
router.get('/', (req, res) => {
    console.log('testing')
    const sqlText = `SELECT * FROM "feedback" ORDER BY "id"`;
    pool.query(sqlText).then(result => {
        res.send(result.rows)
    }).catch(err => {
        console.log(err);
        res.sendStatus(500);
    })
})

module.exports = router;
