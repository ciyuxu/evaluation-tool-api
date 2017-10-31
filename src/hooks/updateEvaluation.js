const ADD_EVALUATION = 'ADD_EVALUATION'
const EDIT_EVALUATION = 'EDIT_EVALUATION'


module.exports = function (options = {}) {
  return function evaluateStudent (hook) {
    // Hooks can either return nothing or a promise
    // that resolves with the `hook` object for asynchronous operations
    return  hook.app.service('students').get(hook.id)
      .then((student) => {

        const { type, payload } = hook.data;
        console.log('"payload:"', type)


        switch (type) {
        case ADD_EVALUATION:{

          if (payload.green) {
            console.log("GREEN")

            hook.data = {
              evaluationDays: student.days.concat({day: payload.date, color: 'green', comment: payload.comment}),
              currentColor: 'green'
            }
            return hook;
          }
          if (payload.yellow) {
            console.log("YELLOW")

            hook.data = {
              evaluationDays: student.days.concat({day: payload.date, color: 'green', comment: payload.comment}),
              currentColor: 'yellow'
            }
            return hook;
          }

          if (payload.red) {
            console.log("RED")

            hook.data = {
              evaluationDays: student.days.concat({day: payload.date, color: 'green', comment: payload.comment}),
              currentColor: 'red'
            }
            return hook;
          }

          // return hook;
        }


        default:
          console.log("hook",hook.id)
          return Promise.resolve(hook);

        }


      });


  };
};
