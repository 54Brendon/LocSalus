const express = require('express');
const Cadastro = require('../Modelos/cadastro');
const router = express.Router();

// Dados de login simulados
const users = [
  { email: "proedf@gmail.com", senha: "30351429" },
  { email: "54brendon@gmail.com", senha: "30351429" }
];

router.post('/', async (req, res) => {
  const { email, senha } = req.body;
  console.log(`Recebido email: ${email}, senha: [oculto]`);

  try {
    if (!email || !senha) {
      console.log('Email ou senha não fornecidos');
      return res.status(400).json({ message: 'Por favor, forneça o email e a senha' });
    }

    const user = users.find(u => u.email === email && u.senha === senha);
    if (!user) {
      console.log('Email ou senha incorretos');
      return res.status(401).json({ message: 'Email ou senha incorretos' });
    }

    console.log('Login bem-sucedido');
    res.status(200).json({ message: 'Login bem-sucedido' });
  } catch (error) {
    console.error('Erro:', error);
    res.status(500).json({ message: 'Erro interno do servidor' });
  }
});

module.exports = router;
