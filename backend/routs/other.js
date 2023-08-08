const express = require('express');
const router = express.Router();
const bodyParser = require('body-parser');
const path=require('path'); 
const Product=require("../models/product");

//MiddleWare
router.use(bodyParser.urlencoded({ extended: false }));

console.log("hey");

router.get('/', async (req, res) => {
    console.log(Product);
    try {
        
      const products = await Product.find({ catagory:"More", quantity: { $gt: 0 } });
      res.render('men', { products });
    } catch (error) {
      console.error(error);
      res.status(500).send('Internal Server Error');
    }
  });

  
//   router.post('/', async (req, res) => {
//     try {
//       const sortBy = req.body.sorting; // Get the selected sorting option
  
//       let products;
//       if (sortBy === 'product-name') {
//         products = await Product.find({ category: 'boardshorts', quantity: { $gt: 0 } }).sort({ name: 1 });
//       } else if (sortBy === 'product-price') {
//         products = await Product.find({ category: 'boardshorts', quantity: { $gt: 0 } }).sort({ price: 1 });
//       } else if (sortBy === 'product-brand') {
//         products = await Product.find({ category: 'boardshorts', quantity: { $gt: 0 } }).sort({ brand: 1 });
//       } else {
//         // Handle invalid sorting option
//         return res.status(400).send('Invalid sorting option');
//       }
  
//       res.render('boardshorts', { products });
//     } catch (error) {
//       console.error(error);
//       res.status(500).send('Internal Server Error');
//     }
//   });

module.exports=router;