import Sale from '../models/Sale';
import Item from '../models/Item';
import User from '../models/User';
import Product from '../models/Product';

class SaleController{
  async store(request, response){
    const {items} = request.body;
    if(!items){
      return response.status(400).json({error: 'Invalid sale!'});
    }

    let itemsSale = [];
    for (const item of items) {
      const {id_product, price} = await Product.findByPk(item.id_product);
      const {amount} = item;
      const value = amount * price;
      itemsSale.push({
        id_product, price, amount, value
      });
    }

    let value = 0;
    itemsSale.forEach(item => {
      value += item.value;
    });

    var id_client = request.userId;
    const sale = await Sale.create({id_client, value});
    let it = [];
    for (const item of itemsSale) {
      var i = await Item.create(item);
      console.log(i);
      it.push(i);
    }
    console.log(sale);
    console.log(it);

    return response.json({items});

  }

}

export default new SaleController();