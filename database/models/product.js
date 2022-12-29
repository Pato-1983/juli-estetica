'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Product extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Product.init({
    name: DataTypes.STRING,
    description: DataTypes.TEXT,
    price: DataTypes.DECIMAL,
    discount: DataTypes.DECIMAL,
    stockId: DataTypes.INTEGER,
    brandsId: DataTypes.INTEGER,
    categoriesId: DataTypes.INTEGER,
    subcategoriesID: DataTypes.INTEGER,
    sizesId: DataTypes.INTEGER,
    visibilityId: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Product',
  });
  return Product;
};