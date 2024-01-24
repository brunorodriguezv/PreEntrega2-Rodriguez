import React from 'react'
import NavBar from "./componentes/NavBar/NavBar";
import ItemListContainer from "./componentes/ItemListContainer/ItemListContainer";
import ItemDetailContainer from './componentes/ItemDetailContainer/ItemDetailContainer';

/* Router components */ 

import { BrowserRouter, Route, Routes } from 'react-router-dom';

const App = () => {
  return (
    <>
      <BrowserRouter>
          <NavBar/>
          <Routes>
            <Route path='/' element={<ItemListContainer/>} />
            <Route path='/category/:idCategory' element={<ItemListContainer/>} />
            <Route path='/item/:idItem' element={<ItemDetailContainer/>} />
           
           
          </Routes>
      
      </BrowserRouter>
    </>
  )
}

export default App