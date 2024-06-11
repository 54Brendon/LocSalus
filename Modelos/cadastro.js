// Modelos/cadastro.js

const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');

const CadastroSchema = new mongoose.Schema({
  nome: { type: String, required: true },
  sobrenome: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  cpf: { type: String, required: true },
  numeroCelular: { type: String }, // Campo para o número de celular (opcional)
  senha: { type: String, required: true },
});

// Método para comparar a senha fornecida com a senha armazenada no banco de dados
CadastroSchema.methods.matchPassword = async function (enteredPassword) {
  try {
    return await bcrypt.compare(enteredPassword, this.senha);
  } catch (error) {
    throw new Error('Erro ao comparar senha');
  }
};

module.exports = mongoose.model('Cadastro', CadastroSchema);
