'use strict';
module.exports = (sequelize, DataTypes) => {
  let teacher_materia_price = sequelize.define('teacher_materia_price', {
    teacher_id: DataTypes.INTEGER,
    materia_id: DataTypes.INTEGER,
    price_id: DataTypes.INTEGER
  }, {});
  teacher_materia_price.associate = function(models) {
    teacher_materia_price.belongsTo(models.Teachers)
    teacher_materia_price.belongsTo(models.Materias)
    teacher_materia_price.belongsTo(models.Prices)
  };
  return teacher_materia_price;
};