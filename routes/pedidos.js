const express = require('express');
const router = express.Router();

//RETORNA TODOS OS PEDIDOS
router.get('/', (req, res, next) => {
    res.status(200).send({
        mensagem: 'Usando o GET dentro da rota pedidos'
    })
});

//INSERE UM PEDIDOS
router.post('/', (req, res, next) => {
    
    const pedido = {
        id_produto: req.body.id_produto,
        quantidade: req.body.quantidade
    }
    res.status(201).send({
        mensagem: 'O pedido foi criado',
        pedidoCriado: pedido
    })
});

//RETORNA OS DADOS DE UM PEDIDOS
router.get('/:id_pedido', (req, res, next) => {
    const id = req.params.id_pedido
    if (id === 'especial') {
        res.status(200).send({
            mensagem: 'você descobriu um IS especial',
            id: id
        });
    } else {
        res.status(200).send({
            mensagem: 'Você passou um ID'
        })
    }

});

//ALTERA UM PEDIDOS
router.patch('/', (req, res, next) => {
    res.status(201).send({
        mensagem: 'Usando o PATCH dentro da rota de pedidos'
    })
});

//DELETA UM PEDIDOS
router.delete('/', (req, res, next) => {
    res.status(201).send({
        mensagem: 'Usando o DELETE dentro da rota de pedidos'
    })
});
module.exports = router;