const express = require('express');
const { check, validationResult } = require('express-validator');
const Cadastro = require('../Modelos/cadastro');
const router = express.Router();

// Validação dos campos de entrada usando express-validator
const validateCadastro = [
  check('email').isEmail().withMessage('E-mail inválido'),
  check('senha').isLength({ min: 6 }).withMessage('A senha deve ter pelo menos 6 caracteres'),
];

// Rota para cadastro de usuário
router.post('/', validateCadastro, async (req, res) => {
  // Verifica se houve erros de validação
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }

  const { nome, sobrenome, email, cpf, senha } = req.body;

  try {
    const newCadastro = new Cadastro({ nome, sobrenome, email, cpf, senha });
    await newCadastro.save();
    res.status(201).json(newCadastro);
  } catch (err) {
    res.status(500).json({ error: 'Erro interno do servidor' });
  }
});

// Rota para obter todos os cadastros (GET)
router.get('/', async (req, res) => {
  try {
    const cadastros = await Cadastro.find();
    res.status(200).json(cadastros);
  } catch (error) {
    res.status(500).json({ error: 'Erro interno do servidor' });
  }
});

module.exports = router;
