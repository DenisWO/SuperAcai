import {Model, Sequelize} from 'sequelize';

class Sale extends Model {
  static init(sequelize){
    super.init({
      id_client: Sequelize.INTEGER,
      value: Sequelize.DECIMAL(10,2),
    }, {sequelize,});

    return this;
  }
}

export default Sale;