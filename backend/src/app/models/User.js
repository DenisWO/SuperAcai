import {Model, Sequelize} from 'sequelize';
import bcrypt from 'bcrypt';

class User extends Model {
  static init(sequelize){
    super.init({
      name: Sequelize.STRING,
      email: Sequelize.STRING,
      password: Sequelize.STRING,
      password_hash: Sequelize.VIRTUAL,
    },
    {sequelize,}
    );

    this.addHook('beforeSave', async user => {
      if(user.password_hash){
        user.password = await bcrypt.hash(user.password_hash, 8);
      }
    })

    return this;
  }

  checkPassword(password){
    return bcrypt.compare(password, this.password)
  }
}

export default User;