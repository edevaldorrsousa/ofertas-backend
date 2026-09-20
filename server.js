const express = require('express');
const cors = require('cors');

const app = express();

// Permite que o frontend na Vercel aceda à API
app.use(cors());
app.use(express.json());

// Dados de teste (simulação de base de dados)
let ofertas = [
  { id: 1, titulo: 'Smartphone Samsung', preco: 'R$ 1.200' },
  { id: 2, titulo: 'Notebook Dell', preco: 'R$ 3.500' }
];

// Rota para procurar as ofertas
app.get('/api/ofertas', (req, res) => {
  res.json(ofertas);
});

// Rota para cadastrar nova oferta
app.post('/api/ofertas', (req, res) => {
  const novaOferta = { id: Date.now(), ...req.body };
  ofertas.push(novaOferta);
  res.status(201).json(novaOferta);
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Servidor a rodar na porta ${PORT}`);
});