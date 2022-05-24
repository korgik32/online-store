
import './App.scss';
import Product from './components/Product/Product';
import Header from './components/Header/Header';
import Search from './components/Search/Search';
import SideBasket from './components/SideBasket/SideBasket';
import { useEffect, useState } from 'react';


function App() {
  //открыть корзину
  const [openBasket, setOpenBasket] = useState(false);
  //список продуктов
  const [products, setProducts] = useState([]);
  //список продуктов в корзине
  const [basketProducts, setBasketProducts] = useState([])
  //получить список продуктов
  useEffect(() => {
    fetch("https://628a5b66e5e5a9ad3223b0b8.mockapi.io/products")
      .then(response => response.json())
      .then(result => { setProducts(result) })
  }, [])
  //добавить в корзину 
  const addInBasket = (productData) => {
    console.log(productData);
    setBasketProducts(prev => [...prev, productData])

  }

  const deleteFromBasket = () => {

  }

  return (
    <div className='wrapper'>
      {openBasket ? <SideBasket basketProducts={basketProducts} onClickClose={() => { setOpenBasket(false); document.getElementsByTagName("body")[0].style.overflow = "visible"; }} /> : null}
      <Header onClickBasket={() => { setOpenBasket(true); document.getElementsByTagName("body")[0].style.overflow = "hidden"; }} />

      <div className='searchBlock'>
        <div className='searchBlock__title'>Все товары</div>
        <Search />

      </div>
      <main>
        {
          products?.map(elem => <Product
            img={elem.img}
            price={elem.price}
            name={elem.name}
            onPlus={(productData) => { addInBasket(productData) }}
            onLike={() => alert("Лайк")}
            self={elem}
          />)
        }
      </main>
    </div>
  )
}

export default App;
