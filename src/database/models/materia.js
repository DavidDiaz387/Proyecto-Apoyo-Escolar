'use strict';
module.exports = (sequelize, DataTypes) => {
  let Materia = sequelize.define('Materias', {
    name: DataTypes.STRING
  }, {});
  Materia.associate = function(models) {
    Materia.belongsToMany(models.teacher_materia_price,{
      as:"teacher_materia_price",
      foreingKey:"materia_id",
    })
  };
  return Materia;
};