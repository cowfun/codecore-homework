const express = require('express');
const router = express.Router();
const kx = require('../db/connection');

router.get('/', function (request, response) {
    kx
      .select()
      .from("teams")
      .then((teams)=>{
        response.render('index',{teams})
    });
})

module.exports = router;
