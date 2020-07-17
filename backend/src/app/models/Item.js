import {Model, Sequelize} from 'sequelize';

class Item extends Model {
  static init(sequelize){
    super.init({
      id_product: Sequelize.INTEGER,
      price: Sequelize.DECIMAL(10,2),
      amount: Sequelize.DECIMAL(10,2),
      value: Sequelize.DECIMAL(10,2)
    }, {sequelize,});

    return this;
  }
}

export default Item;