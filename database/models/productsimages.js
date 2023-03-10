'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class ProductsImages extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  ProductsImages.init({
    name: DataTypes.STRING,
    productsId: DataTypes.INTEGER,
  }, {
    sequelize,
    modelName: 'ProductsImages',
  });
  return ProductsImages;
};