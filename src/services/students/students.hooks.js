const { authenticate } = require("feathers-authentication").hooks;
const commonHooks = require("feathers-hooks-common");

const classroomSchema = {
  include: {
    service: "classrooms",
    nameAs: "classroom",
    parentField: "classroomId",
    childField: "_id"
  }
};
module.exports = {
  before: {
    all: [authenticate("jwt")],
    find: [],
    get: [],
    create: [],
    update: [],
    patch: [],
    remove: []
  },

  after: {
    all: [commonHooks.populate({ schema: classroomSchema })],
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
