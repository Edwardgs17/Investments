const { Router } = require('express');
const investmentController = require('../Controllers/investmentsController');

class InvestmentRouter {
  constructor() {
    this.investmentRouter = Router();
    this.config();
  }

  config() {
    this.investmentRouter.post('/investments', investmentController.createInvestment);
    this.investmentRouter.get('/investments/project/:idProject', investmentController.getInvestmentsByProject);
    this.investmentRouter.get('/investments/user/:idUser', investmentController.getInvestmentsByUser);
    this.investmentRouter.get('/investments/user/:idUser/project/:idProject',
      investmentController.getInvestmentsbyProjectAndUser);
  }
}
const router = new InvestmentRouter();
module.exports = router.investmentRouter;
