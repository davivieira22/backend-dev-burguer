import * as Yup from 'yup';
import Product from '../models/product';


class PrductController {
   async store(request, response) {

      const schema = Yup.object({
         name: Yup.string().required(),
         price: Yup.number().required(),
         category: Yup.string().required(),
      });
      try {
         schema.validateSync(request.body, { abortEarly: false })
      } catch (err) {
         return response.status(400).json({ error: err.errors });
      };

      const { Filename: path } = request.file;
      const { name, price, category } = request.body;

      const product = await Product.create({
         name,
         price,
         category,
         path,
      
      })






      return response.status(200).json(product )
   }
}

export default new PrductController();