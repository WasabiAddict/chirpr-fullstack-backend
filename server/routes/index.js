const express = require('express')
const db = require('../db');
const router = express.Router();
// const chirpsRouter = require("./chirps");

// localhost:3000/api/chirps/
// router.get("/chirps", chirpsRouter) 

router.get('/', async (req, res, next) => {

    try {
        let results = await db.all();
        res.json(results);
    } catch(e) {
        console.log(e);
        Read.sendStatus(500);
    }
});


module.exports = router;