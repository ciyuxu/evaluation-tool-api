const { authenticate } = require('feathers-authentication').hooks;
const commonHooks = require('feathers-hooks-common');

const updateEvaluation = require( '../../hooks/updateEvaluation' );

const classroomSchema = {
  include: {
    service: 'classrooms',
    nameAs: 'classroom',
    parentField: 'classroomId',
    childField: '_id'
  }
};
module.exports = {
  before: {
    all: [ authenticate('jwt') ],
    find: [],
    get: [],
    create: [],
    update: [updateEvaluation()],
    patch: [updateEvaluation()],
    remove: []
  },

  after: {
    all: [commonHooks.populate({schema: classroomSchema})],
    find: [],
    get: [],
    create: [],
    update: [],
    patch: [],
    remove: []
  },

  error: {
    all: [],
    find: [],
    get: [],
    create: [],
    update: [],
    patch: [],
    remove: []
  }
};
