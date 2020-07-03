'use strict';
module.exports = (sequelize, DataTypes) => {
  let Teacher = sequelize.define('Teachers', {
    name: DataTypes.STRING,
    last_name: DataTypes.STRING,
    telephone: DataTypes.INTEGER,
    email: DataTypes.STRING,
    dia: DataTypes.DATE,
    horario: DataTypes.STRING
  }, {});
  Teacher.associate = function(models) {
    Teacher.belongsToMany(models.Students,{
      as:"students",
      thoruth:"student_teacher",
      foreingKey:"teacher_id",
      otherKey:"student_id"
    })
    Teacher.belongsToMany(models.teacher_materia_price,{
      as:"teacher_materia_price",
      foreingKey:"teacher_id"
    })
  };
  return Teacher;
};