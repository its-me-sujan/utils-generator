const contactController = require("./contact.controller");
const express = require("express");
const router = express.Router();

/* Routes
1. create (POST) => Payload
2. list (GET)   => 
3. getById (GET) => id params
4. update (PUT) => id params, payload
5. delete (DELETE) => id params
*/

// Import all the controller and connect it to the corresponding routes
// Create
router.post("/", (req, res, next) => {
  contactController.create(req.body).then((d) => res.json(d)).catch((e) => next(e));
});

// List
router.get("/", async (req, res, next) => {
  try {
    const list = await contactController.list();
    res.json(list);
  } catch(e) {
    next(e);
  }
});

// getById
router.get("/:id", async(req, res, next) => {
  try {
    const result = await contactController.getById(req.params.id);
    res.json(result);
  } catch(e) {
    next(e);
  }
});

// update
router.put("/:id", async(req, res, next) => {
  try {
    const id = ewq.params.id;
    const payload = req.body;
    const result = await contactController.update(id, payload);
  } catch(e) {
    next(e);
  }
});

// remove
router.delete("/:id", async(req, res, next) => {
  try {
    const id = req.params.id;
    const list = await contactController.remove(id);
    res.json(result);
  } catch(e) {
    next(e);
  }
});

module.exports = router;
