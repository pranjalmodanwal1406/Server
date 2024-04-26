const Item = require('../models/itemInventoryModel');
const Role = require('../models/roleModel');
const createError = require('../middleware/error')
const createSuccess = require('../middleware/success')

//to create item

const addItem = async (req, res, next) => {
    try {
      const role = await Role.find({ role: 'User' });
      const newItem = new Item({
        itemName: req.body.itemName,
        itemID: req.body.itemID,
        minQuantity: req.body.minQuantity,
        comment: req.body.comment,
      })
      await newItem.save();
      return res.status(200).json("Item Registered Successfully")
     // return next(createSuccess(200, "User Registered Successfully"))
    }
    catch (error) {
      //return res.status(500).send("Something went wrong")
      return next(createError(500, "Something went wrong"))
    }
  }
//get Allitems
const getAllItems= async (req, res, next) => {
  try {
      const items = await Item.find();
      return next(createSuccess(200, "All Items", items));

  } catch (error) {
      return next(createError(500, "Internal Server Error!"))
  }
}
  
module.exports = {
    addItem,getAllItems
}