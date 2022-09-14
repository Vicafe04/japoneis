const Express = require('express');

const router = Express.Router();

const LancamentosController = require('./controllers/LancamentosController');

router.get("/lancamento", LancamentosController.listarLancamentos);
router.post("/lancamento", LancamentosController.cadastrarLancamento);

module.exports = router;