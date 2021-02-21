const db = require('../database');

const course = {
  get: function(callback) {
    return db.query('select * from course by course_id desc', callback);
  },
  getById: function(id, callback) {
    return db.query('select * from course where course_id=?', [id], callback);
  },
  add: function(course, callback) {
    return db.query(
      'insert into book (name,credits,course_id) values(?,?,?)',
      [course.name, course.credits, course_id],
      callback
    );
  },
  delete: function(id, callback) {
    return db.query('delete from course where course_id=?', [id], callback);
  },
  update: function(id, course, callback) {
    return db.query(
      'update book set name=?, credits=? where course_id=?',
      [course.name, course.credits, course_id],
      callback
    );
  }
};
module.exports = course;