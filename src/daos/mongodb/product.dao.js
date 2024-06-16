import { ProductModel } from "./models/product.model.js";

export default class ProductDaoMongoDB {

  async getAll(page = 1, limit = 10, name, brand, sort) {
    try {
      const filters = {};
      if (name) filters.name = name;
      if (brand) filters.brand = brand;
  
      let sortOrder = {};
      if (sort) sortOrder.price = sort === 'asc' ? 1 : sort === 'desc' ? -1 : null;
  
      const response = await ProductModel.paginate(filters, { page, limit, sort: sortOrder });
      return response;
    } catch (error) {
      console.log(error);
    }
  }
  


  async getById(id) {
    try {
      const response = await ProductModel.findById(id);
      return response;
    } catch (error) {
      console.log(error);
    }
  }

  async create(obj) {
    try {
      const response = await ProductModel.create(obj);
      return response;
    } catch (error) {
      console.log(error);
    }
  }

  async update(id, obj) {
    try {
      const response = await ProductModel.findByIdAndUpdate(id, obj, {
        new: true,
      });
      return response;
    } catch (error) {
      console.log(error);
    }
  }

  async delete(id) {
    try {
      const response = await ProductModel.findByIdAndDelete(id);
      return response;
    } catch (error) {
      console.log(error);
    }
  }
}
