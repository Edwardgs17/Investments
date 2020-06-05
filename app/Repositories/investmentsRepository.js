const DB = require('../Utils/DataBase');

class InvestmentsRepositories {
  constructor() {
    this.createInvestment = (investments) => DB('investments').insert(investments).returning('*');
    this.getInvestmentByIdProject = (id) => DB('investments').select('*').where({ idProject: id });
    this.getInvestmentByIdUser = (id) => DB('investments').select('*').where({ idUser: id });
    this.getInvestmentsbyProjectAndUser = (idUser, idProject) => DB('investments')
      .select('*').where({ idUser, idProject });
  }
}

const investmentsRepository = new InvestmentsRepositories();
module.exports = investmentsRepository;
