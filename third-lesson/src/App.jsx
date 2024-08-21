import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {

  const [basket, setBasket] = useState([])

  const [products, setProducts] = useState([
    { id: 101, name: "Psychlogy", price: 27, picture: "https://res.cloudinary.com/dk-hub/image/upload/c_limit,f_auto,w_1160,h_1300/dk-core-nonprod/9780744091960/9780744091960_cover.jpg" },
    { id: 102, name: "Psychlogy", price: 12, picture: "https://res.cloudinary.com/dk-hub/image/upload/c_limit,f_auto,w_1160,h_1300/dk-core-nonprod/9780744098556/9780744098556_cover.jpg" },
    { id: 103, name: "Economics", price: 22, picture: "https://res.cloudinary.com/dk-hub/image/upload/c_limit,f_auto,w_1160,h_1300/dk-core-nonprod/9780756698270/9780756698270_cover.jpg" },
    { id: 104, name: "Politic", price: 33, picture: "https://res.cloudinary.com/dk-hub/image/upload/q_75,c_limit,f_auto,w_2400,h_874/dk-core-nonprod/9781465402141/9781465402141_cover.jpg" },
    { id: 105, name: "science", price: 41, picture: "https://res.cloudinary.com/dk-hub/image/upload/q_75,c_limit,f_auto,w_2400,h_874/dk-core-nonprod/9781465419651/9781465419651_cover.jpg" },
    { id: 106, name: "Detective", price: 7, picture: "https://res.cloudinary.com/dk-hub/image/upload/q_75,c_limit,f_auto,w_2400,h_874/dk-core-nonprod/9781465438492/9781465438492_cover.jpg" },
    { id: 107, name: "History", price: 9, picture: "https://res.cloudinary.com/dk-hub/image/upload/q_75,c_limit,f_auto,w_2400,h_874/dk-core-nonprod/9781465445100/9781465445100_cover.jpg" }
  ])

  const moveToCart = prod => {
    const result = basket.find(item => item.id == prod.id)
    if (result) {
      result.count++
      setBasket([...basket])
    }  else {setBasket([...basket, {...prod, count:1}])
  }

  }


  const addProduct = (prod) => {
    const result = basket.find(item => item.id == prod.id)
    if (result) {
      result.count++
    }   setBasket([...basket])
  }


  const reduceProduct = (prod) => {
    const result = basket.find(item => item.id == prod.id)
    if (result) {
      if(result.count > 1) {
        result.count--
    }   setBasket([...basket])
  }}

  const removeProduct = (prod) => {
    const updatedBasket = basket.filter(item => item.id !== prod.id)
    setBasket(updatedBasket)
  }

  return <>
    <h1>online shop</h1>
    <div className='content'>
      <div>
        <h3></h3>
        <div className='list'>
          {
            products.map(item => <div key={item.id}>
              <img src={item.picture} />
              <p>{item.name}</p>
              <strong>{item.price}$</strong>
              <button onClick={() => moveToCart(item)}>move</button>
            </div>)
          }
        </div>
      </div>
      <div>
        <h3>Cart</h3>
        <table>
          <thead>
            <tr>
              <th>id</th>
              <th>price</th>
              <th>count</th>
              <th>subtotal</th>
              <th>actions</th>
            </tr>
          </thead>
          <tbody>
            {
              basket.map(item => <tr key={item.id}>
                <td>{item.id}</td>
                <td>{item.price}</td>
                <td>{item.count}</td>
                <td>{item.price * item.count}</td>
                <td>
                  <button onClick = {()=> addProduct(item)}>+</button>
                  <button onClick = {()=> reduceProduct(item)}>-</button>
                  <button onClick = {()=> removeProduct(item)}>x</button>
                </td>
              </tr>)
            }
          </tbody>
        </table>
      </div>
    </div>
  </>
}

export default App
