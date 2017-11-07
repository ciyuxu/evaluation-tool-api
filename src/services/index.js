const users = require('./users/users.service.js');
const classrooms = require('./classrooms/classrooms.service.js');
const students = require('./students/students.service.js');
module.exports = function() {
    const app = this; // eslint-disable-line no-unused-vars
    app.configure(users);
    app.configure(classrooms);
    app.configure(students);
};
