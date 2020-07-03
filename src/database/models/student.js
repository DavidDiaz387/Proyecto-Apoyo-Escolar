'use strict';
module.exports = (sequelize, DataTypes) => {
  let Student = sequelize.define('Students', {
    first_name: DataTypes.STRING,
    last_name: DataTypes.STRING,
    age: DataTypes.INTEGER,
    email: DataTypes.STRING,
    password: DataTypes.STRING,
    telephone:DataTypes.INTEGER,
    fecha_inicio:DataTypes.DATE
  }, {});
  Student.associate = function(models) {
    Student.belongsToMany(models.Teachers,{
      as:"teachers",
      through:"student_teacher",
      foreingKey:"student_id",
      otherKey:"teacher_id"
    })
  };
  return Student;
};