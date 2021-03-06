const express = require('express');
const router = express.Router();

// CRUD
const controller = require('../app/controllers/publishControllers'); // chamar todas as funções do comtroladores

// Cria nova publicação
router.post('/create/', controller.create);

// Ver uma unica publicação pelo ID
router.get('/retrieve/:id', controller.retrieve);

// Atualizar uma publicação
router.post('/update/', controller.update);

// Apagar a publicação pelo ID
router.get('/delete/:id', controller.delete);

//Extra
router.post('/like/', controller.like);
router.post('/dislike/', controller.dislike);

module.exports = router;