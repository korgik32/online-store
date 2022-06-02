import './App.scss';
import Product from './components/Product/Product';
import Header from './components/Header/Header';
import Search from './components/Search/Search';
import SideBasket from './components/SideBasket/SideBasket';
import { useEffect, useState } from 'react';
import Context from './Context';
import Favorites from './components/Favorites/Favorites';
import Products from './components/Products/Products';
import History from './components/History/History';
import { Routes, Route } from 'react-router-dom';

function App() {
  //открыть корзину
  const [openBasket, setOpenBasket] = useState(false);
  //список продуктов
  const [products, setProducts] = useState([]);
  //список продуктов в корзине
  const [basketProducts, setBasketProducts] = useState([]);
  //стейт на изменение поиска
  const [changeInput, setChangeInput] = useState("");
  //список избранного
  const [favorites, setFavorites] = useState([])
  //история покупок
  const [history, setHistory] = useState([])
  // состояние загрузки
  const [productsLoading, setProductsLoading] = useState(true)

  //получить список продуктов
  useEffect(() => {
    async function wait() {
      await fetch("https://628a5b66e5e5a9ad3223b0b8.mockapi.io/basket")
        .then(response => response.json())
        .then(result => setBasketProducts(result))
      await fetch("https://628a5b66e5e5a9ad3223b0b8.mockapi.io/favorites")
        .then(response => response.json())
        .then(result => setFavorites(result))
      await fetch("https://628a5b66e5e5a9ad3223b0b8.mockapi.io/products")
        .then(response => response.json())
        .then(result => { setProducts(result) })
      await fetch("https://628a5b66e5e5a9ad3223b0b8.mockapi.io/history")
        .then(response => response.json())
        .then(result => setHistory(result))
      setProductsLoading(false)
    }
    wait()

  }, [])
  //добавить в корзину 
  const addInBasket = (productData) => {
    //добавляем на мокАпи
    try {
      fetch("https://628a5b66e5e5a9ad3223b0b8.mockapi.io/basket", {
        method: "POST",
        headers: {
          'Content-Type': 'application/json;charset=utf-8'
        },
        body: JSON.stringify(productData)
      }).then(response => response.json()).then(result => setBasketProducts(prev => [...prev, result]))


    } catch (error) {
      alert("error addInBasket")
    }

  }
  //удалить из корзины и на сервере и на клиенте
  const deleteFromBasket = (product) => {
    try {
      fetch(`https://628a5b66e5e5a9ad3223b0b8.mockapi.io/basket/${product.id}`, {
        method: "DELETE"
      })
      setBasketProducts(basketProducts.filter((elem) => elem != product))
    } catch (error) {
      alert("error deleteFromBasket")
    }

  }
  //поиск товаров
  const search = (event) => {
    setChangeInput(event.target.value)
  }
  const addInFavorites = (productData) => {
    try {
      fetch("https://628a5b66e5e5a9ad3223b0b8.mockapi.io/favorites", {
        method: "POST",
        headers: {
          'Content-Type': 'application/json;charset=utf-8'
        },
        body: JSON.stringify(productData)
      }).then(response => response.json()).then(result => setFavorites(prev => [...prev, result]))
    } catch (error) {
      alert("error addInFavoriter")
    }




  }

  const deleteFromFavorites = (product) => {
    try {
      fetch(`https://628a5b66e5e5a9ad3223b0b8.mockapi.io/favorites/${product.id}`, {
        method: "DELETE"
      })
      setFavorites(favorites.filter(elem => elem != product))
    } catch (error) {
      alert("error deleteFromFavorites")
    }

  }
  const addInHistory = () => {

  }
  return (
    <Context.Provider value={{
      addInBasket, changeInput, search, addInFavorites, deleteFromFavorites, favorites,
      deleteFromBasket, basketProducts, productsLoading
    }
    }>
      <div className='wrapper'>
        {openBasket ? <SideBasket basketProducts={basketProducts} deleteFromBasket={deleteFromBasket} onClickClose={() => { setOpenBasket(false); document.getElementsByTagName("body")[0].style.overflow = "visible"; }} /> : null}
        <Header onClickBasket={() => { setOpenBasket(true); document.getElementsByTagName("body")[0].style.overflow = "hidden"; }} />
        <Routes>
          <Route path="/" element={<Products products={products}></Products>} />
          <Route path='/Favorites' element={<Favorites faworiteProducts={favorites}></Favorites>} />
          <Route path='/History' element={<History historyProducts={history}></History>} />
          <Route path='*' element={<center>Такой страницы не существует</center>} />
        </Routes>

      </div>
    </Context.Provider>
  )
}

export default App;