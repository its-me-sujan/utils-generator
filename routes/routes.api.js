const express = require("express");
const router = express.Router();

//mostly error handler is done in routes api
router.get("/", (req, res, next) => {
    try {
        res.json({msg:"Hello from API"});
    } catch (err) {
        next(err);
    }
});

module.exports = router;