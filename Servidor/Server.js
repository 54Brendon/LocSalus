// server.js

const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const mongoose = require('mongoose');
const loginRoutes = require('../routes/login');
const cadastroRoutes = require('../routes/cadastro');

const app = express();

// Conexão com o banco de dados MongoDB
mongoose.connect('mongodb://localhost:27017/meu_banco_de_dados', {
  useNewUrlParser: true,
  useUnifiedTopology: true
}).then(() => {
  console.log('Conectado ao MongoDB');
}).catch((err) => {
  console.error('Erro ao conectar ao MongoDB', err);
  process.exit(1); // Encerra o aplicativo em caso de falha na conexão com o banco de dados
});

app.use(bodyParser.json());
app.use(cors());

app.use((req, res, next) => {
  console.log(`${req.method} ${req.url}`);
  next();
});

app.get('/', (req, res) => {
  res.send('Bem-vindo ao servidor!');
});

app.use('/login', loginRoutes);
app.use('/cadastro', cadastroRoutes);

app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send('Algo deu errado!');
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
