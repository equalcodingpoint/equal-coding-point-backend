const router = require("express").Router();

router.post("/create", (req, res) => {
    console.log("res==>",req.body);
  res.send(req.body);
});

module.exports = router;
