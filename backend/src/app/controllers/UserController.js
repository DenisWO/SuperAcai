import User from '../models/User';

class UserController{
  async index(request, response){
    const users = await User.findAll();

    if(!users){
      return response.status(400).json({
        error: 'Users not found'
      })
    }

    return response.json({users});
  }

  async store(request, response){
    if (await User.findOne({where: {email: request.body.email}})){
      return response.status(400).json({error: 'User already exists'});
    }
    const user = await User.create(request.body);

    return response.json({user});
  }

}

export default new UserController();