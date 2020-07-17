import Product from '../models/Product';

class ProductController{
  async store(request, response){
    const {id, name, price} = await Product.create(request.body);
    return response.json({id, name, price});
  }

  async index(request, response){
    const products = await Product.findAll();
    if (!products){
      return response.status(400).json({error: 'Products not found!'});
    }

    return response.json({products});
  }
}

export default new ProductController();