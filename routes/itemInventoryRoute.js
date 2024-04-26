const express = require('express');
const {addItem,getAllItems} = require('..//controllers/itemInventoryController')
const router = express.Router();


router.post('/addItem',addItem );
router.get('/getItems',getAllItems );


module.exports = router;