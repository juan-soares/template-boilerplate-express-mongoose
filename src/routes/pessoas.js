var express = require("express");
var router = express.Router();
const {
  getPessoas,
  getPessoa,
  postPessoa,
  deletePessoa,
} = require("../controllers/pessoa");

router.get("/", getPessoas);
router.get("/pessoa", getPessoa);
router.post("/pessoa", postPessoa);
router.delete("/pessoa", deletePessoa);

module.exports = router;
