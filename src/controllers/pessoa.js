const Pessoa = require("../models/pessoa");

async function getPessoas(req, res) {
  const listaPessoas = await Pessoa.find();

  if (listaPessoas.length == 0) {
    res.json("Pessoas não encontradas!");
  } else {
    res.json(listaPessoas);
  }
}

async function getPessoa(req, res) {
  const pessoa = await Pessoa.findById(req.body.id).exec();

  if (!pessoa) {
    res.json("Pessoa não encontrada!");
  } else {
    res.json(pessoa);
  }
}

async function postPessoa(req, res) {
  await Pessoa.findByIdAndUpdate(
    req.body.id,
    { nome: "Novo Nome" },
    (err, pessoaAtualizada) => {
      if (err) {
        console.log(err);
      } else {
        console.log(pessoaAtualizada);
      }
    }
  );
  res.json("Atualizado!");
}

async function deletePessoa(req, res) {
  await Pessoa.findByIdAndDelete(req.body.id);
  res.json("Deletado!");
}

module.exports = { getPessoas, getPessoa, postPessoa, deletePessoa };
