const InvestmentRepository = require('../Repositories/investmentsRepository');
const log4js = require('../Utils/Logger');

const defaultLogger = log4js.getLogger('InvestmentService');

class InvestmentService {
  async getInvestmentsByIdProject(id, options) {
    const { logger = defaultLogger } = options;
    logger.info(`Start InvestmentsService.getInvestmentsByIdProject: params ${JSON.stringify(id)}`);

    return InvestmentRepository.getInvestmentByIdProject(id);
  }

  async getInvestmentByIdUser(id, options) {
    const { logger = defaultLogger } = options;

    logger.info(`Start InvestmentsService.getInvestmentsByIdUser: params ${JSON.stringify(id)}`);

    return InvestmentRepository.getInvestmentByIdUser(id);
  }

  async createInvestment(investment, options) {
    const { logger = defaultLogger } = options;
    logger.info(`Start InvestmentService.createInvestment: params ${JSON.stringify(investment)}`);

    return InvestmentRepository.createInvestment(investment);
  }

  async getInvestmentsbyProjectAndUser(idUser, idProject, options) {
    const { logger = defaultLogger } = options;
    logger.info(`Start InvestmentService.getInvestmentsbyProjectAndUser: params ${JSON.stringify(idUser, idProject)}`);

    return InvestmentRepository.getInvestmentsbyProjectAndUser(idUser, idProject);
  }
}

const investmentService = new InvestmentService();
module.exports = investmentService;
