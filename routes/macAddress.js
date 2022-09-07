const express = require("express");
const router = express.Router();
const getmac = require('getmac')

router.use("/" , (req , res) => {
  
    const device = getmac.default()
    res.send(device)
    console.log(device)

    
  })

module.exports = router;