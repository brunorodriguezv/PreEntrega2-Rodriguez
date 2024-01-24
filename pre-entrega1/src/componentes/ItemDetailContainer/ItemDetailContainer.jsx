import {useState, useEffect} from "react";
import { getOneProduct } from "../../asyncmock";
import ItemDetail from "../ItemDetail/ItemDetail";
import { useParams } from "react-router-dom";
import "./ItemDetailCont.css"


const ItemDetailContainer = () => {
  const [product, setProduct] = useState(null); 

  const {idItem} = useParams();

  useEffect( () => {
    getOneProduct(idItem)
        .then(res => setProduct(res))
}, [idItem])

  return (
    <div className="itemDetailCont">
        <ItemDetail {...product} />
    </div>
  )
}

export default ItemDetailContainer