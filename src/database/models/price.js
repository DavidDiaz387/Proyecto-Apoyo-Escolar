'use strict';
module.exports = (sequelize, DataTypes) => {
  let Price = sequelize.define('Prices', {
    price_materia: DataTypes.DECIMAL,
    discount_materia: DataTypes.DECIMAL
  }, {});
  Price.associate = function(models) {
    Price.belongsToMany(models.teacher_materia_price,{
      as:"teacher_materia_price",
      foreingKey:"price_id"
    })
  };
  return Price;
};