// classes-model.js - A mongoose model
//
// See http://mongoosejs.com/docs/models.html
// for more of what you can do here.
module.exports = function (app) {
  const mongooseClient = app.get('mongooseClient');
  const { Schema } = mongooseClient;


  const evaluationsSchema = new Schema ({
    date: { type: Date, required: true },
    color: { type: String, default: 'grey' },
    remark: { type: String, default: null }
  });

  const studentsSchema = new Schema({
    fullName: { type: String, required: true },
    photo: { type: String },
    evaluation: [evaluationsSchema]
  });

  const classrooms = new Schema({
    batchNr: { type: String, required: true },
    startDate: { type: Date, default: Date.now },
    endDate: { type: Date, default: Date.now },
    students: [studentsSchema],
    createdAt: { type: Date, default: Date.now },
    updatedAt: { type: Date, default: Date.now }
  });


  return mongooseClient.model('classrooms', classrooms);
};
