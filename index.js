const express = require('express')

const app = express ()

app.use(express.json())

app.get('/', (req,res)=>{
    res.send("Servidor Express funcionando!")
})
const produtos = []

app.post('/produtos', (req,res)=>{
    const produto = {
        nome: req.body.nome,
        preco: req.body.preco,
        quantidade: req.body.quantidade,

    }

    if(!produto.nome || typeof produto.nome != 'string' || produto.nome.trim()==''){
        return res.status(400).send('Nome do produto é obrigatório e deve ser uma string não vazia.');

    }

    if (produto.preco == undefined || typeof produto.preco != 'number' || produto.preco <=0){
        return res.status (400).send('Preço deve ser um número positivo.');

    }

    if (produto.quantidade == undefined || !Number.isInteger(produto.quantidade) || produto.quantidade<0){
        return res.status(400).send('Quantidade deve ser um número inteiro maior ou igual a 0.');
    } 

    produtos.push(produto)

    res.send('Produtos cadastrado com sucesso !')
})

app.get('/produtos', (req,res)=>{
    res.send(produtos)
})
app.listen (3000, ()=>{
    console.log("Servidor backend rodando em http://localhost:3000")
})
