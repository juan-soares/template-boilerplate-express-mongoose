const mongoose = require("mongoose");

const pessoaSchema = new mongoose.Schema({
  nome: String,
  idade: { type: Number, required: true },
});

module.exports = mongoose.model("Pessoa", pessoaSchema, "collection-pessoas");
