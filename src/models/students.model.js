// students-model.js - A mongoose model
//
// See http://mongoosejs.com/docs/models.html
// for more of what you can do here.
module.exports = function (app) {
  const mongooseClient = app.get('mongooseClient');
  const { Schema } = mongooseClient;

  const students = new Schema({
    classroomId: { type: Schema.Types.ObjectId, ref: 'classrooms' },
    fullName: { type: String, required: true },
    photo: { type: String },
    evaluationDays: { type: [] },
    evaluationDate: { type: Date, default: Date.now },
    currentColor: { type: String, default: 'grey' },
    remark: { type: String, default: null },

    createdAt: { type: Date, default: Date.now },
    updatedAt: { type: Date, default: Date.now }
  });

  return mongooseClient.model('students', students);
};
