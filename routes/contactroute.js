const express = require('express');
const router = express.Router();
const {getContacts} = require("../controllers/contactController");
const {createContact} = require("../controllers/contactController");
const {getContact} = require("../controllers/contactController");
const {updateContact} = require("../controllers/contactController");
const {deleteContact} = require("../controllers/contactController");
const validateToken = require('../middleware/validateTokenHandler');
router.use(validateToken);
router.route("/").get(getContacts).post(createContact);



router.route("/:id").get(getContact).put(updateContact).delete(deleteContact);

 

module.exports = router;