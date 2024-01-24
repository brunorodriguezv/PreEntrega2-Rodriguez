import ItemList from "../ItemList/ItemList";
import { useState, useEffect } from "react";
import { getProducts, getProductsByCategory } from "../../asyncmock";
import { useParams } from "react-router-dom";


const ItemListContainer = () => {
  const [products, setProducts] = useState([]);

  const {idCategory} = useParams();

  useEffect(() => {
    
    const productFunction = idCategory ? getProductsByCategory : getProducts;

    productFunction(idCategory)
      .then(res => setProducts(res))
      .catch(error => console.log(error))

  }, [idCategory])

  useEffect ( ()=> {
    getProducts()
    .then(res => setProducts(res))
  }, [])
  
  return (
    <div className="itemListContainer"> 
      <ItemList products={products}/>
    </div>
  
  
  )
}

export default ItemListContainer