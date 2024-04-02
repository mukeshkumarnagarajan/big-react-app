import axios from "axios";
import React, { useEffect, useState } from "react";
import { IProduct } from "../../models/ProductType";
import { useCart } from "../../contexts/CartContext";

const ProductsPage: React.FC = () => {
  const [products, setProducts] = useState<IProduct[]>([]);

  const data = useCart();

  const getProductDetails = async () => {
    try {
      const response = await axios.get(`https://fakestoreapi.com/products`);
      console.log(response.data);
      setProducts(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getProductDetails();
  }, []);

  const handleAddToCart = (product: IProduct) => {
    data.addToCart(product);
  };

  return (
    <div>
      <h1>Products</h1>

      <div className="row">
        {products &&
          products.map((product) => {
            return (
              <div className="col-md-3 mb-3" key={product.id}>
                <div className="card">
                  <img
                    src={product.image}
                    className="card-img-top"
                    alt={product.title}
                    height={280}
                  />
                  <div className="card-body">
                    <h5 className="card-title text-truncate">
                      {product.title}
                    </h5>
                    <p className="card-text">Sample Description</p>
                    <p>$ {product.price}</p>
                  </div>
                  <div className="card-footer">
                    <button
                      type="button"
                      className="btn btn-primary btn-sm"
                      onClick={() => handleAddToCart(product)}
                    >
                      Add to Cart
                    </button>
                    <button
                      type="button"
                      className="ms-2 btn btn-outline-danger btn-sm"
                    >
                      Favorite
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
      </div>
    </div>
  );
};

export default ProductsPage;
