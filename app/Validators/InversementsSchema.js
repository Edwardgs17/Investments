module.exports = {
  title: 'InversmentRegister',
  type: 'object',
  propertaries: {
    id: {
      type: 'number',
    },
    idUser: {
      type: 'number',
    },
    idProject: {
      type: 'number',
    },
    date: {
      type: 'date',
    },
    status: {
      type: 'boolean',
    },
    idRewards: {
      type: 'number',
    },
  },
  required: ['idUser', 'idProject', 'idRewards'],
};
