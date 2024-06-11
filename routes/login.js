// routes/login.js

const express = require('express');
const Cadastro = require('../Modelos/cadastro');
const router = express.Router();

router.post('/', async (req, res) => {
  const { email, senha } = req.body;
  console.log(`Recebido email: ${email}, senha: [oculto]`);

  try {
    if (!email || !senha) {
      console.log('Email ou senha não fornecidos');
      return res.status(400).json({ message: 'Por favor, forneça o email e a senha' });
    }

    const user = await Cadastro.findOne({ email });
    if (!user) {
      console.log('Usuário não encontrado');
      return res.status(404).json({ message: 'Usuário não encontrado' });
    }

    if (user.senha !== senha) {
      console.log('Senha incorreta');
      return res.status(401).json({ message: 'Credenciais inválidas' });
    }

    console.log('Login bem-sucedido');
    res.status(200).json({ message: 'Login bem-sucedido' });
  } catch (error) {
    console.error('Erro:', error);
    res.status(500).json({ message: 'Erro interno do servidor' });
  }
});

module.exports = router;
