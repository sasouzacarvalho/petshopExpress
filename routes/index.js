const express = require('express');
const router = express.Router();
const petsController = require('../controllers/petsController');
const servicosController = require('../controllers/servicosController')

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'PetShop' });
});

// rota para /pets que retorna o método index da petsController
router.get('/pets', petsController.index);

router.get('/pets/:nome', petsController.show);

// rota para /pets/servicos que retorna o método index da petsController
router.get('/servicos', servicosController.index);

router.get('/servicos/:servico', servicosController.show);


module.exports = router;
