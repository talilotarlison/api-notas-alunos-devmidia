// Importando o módulo 'express' para criar a API
const calcularMedia = require('./media');
const dados = require('./notas');


const express = require('express');
const app = express();
const port = 3000;

// Rota para calcular a média das notas
app.get('/media', (req, res) => {
    // Recebendo as notas como parâmetros da query
    const nota1 = parseFloat(req.query.nota1);
    const nota2 = parseFloat(req.query.nota2);
    const nota3 = parseFloat(req.query.nota3);

    var media = calcularMedia.calcularMediaNotas(nota1, nota2, nota3)
    // Retornando o resultado como JSON
    res.json({ media });
});

// Rota para calcular a média das notas
app.get('/soma', (req, res) => {
    // Recebendo as notas como parâmetros da query
    const nota1 = parseFloat(req.query.nota1);
    const nota2 = parseFloat(req.query.nota2);
    const nota3 = parseFloat(req.query.nota3);

    var soma = calcularMedia.calcularSomaNotas(nota1, nota2, nota3)

    // Retornando o resultado como JSON
    res.json({ soma });
});

// Rota para calcular a média das notas
app.get('/aluno/:id', (req, res) => {
    // Recebendo as notas como parâmetros da query
    const id = parseInt(req.params.id);

    var dado = dados(id);

    // Retornando o resultado como JSON
    res.json({ dado, id});
});
// Iniciando o servidor na porta especificada
app.listen(port, () => {
    console.log(`Servidor rodando na porta ${port}`);
});
