/*eslint-disable no-unused-vars*/

module.exports = function (options = {}) {
    return function updateEvaluation (hook) {
    
        console.log('hoooook', hook.data);
        return Promise.resolve(hook);
    };
};