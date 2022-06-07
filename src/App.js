import { useEffect, useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import './App.scss';
import Favorites from './components/Favorites/Favorites';
import Header from './components/Header/Header';
import History from './components/History/History';
import Products from './components/Products/Products';
import SideBasket from './components/SideBasket/SideBasket';
import Context from './Context';

function App() {
  //номер заказа
  const [orderNumber, setOrderNumber] = useState("")
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
      try {
        await fetch("https://628a5b66e5e5a9ad3223b0b8.mockapi.io/basket")
          .then(response => response.json())
          .then(result => setBasketProducts(result))
        await fetch("https://628a5b66e5e5a9ad3223b0b8.mockapi.io/favorites")
          .then(response => response.json())
          .then(result => setFavorites(result))
        await fetch("https://629b4d38656cea05fc36ea9e.mockapi.io/history")
          .then(response => response.json())
          .then(result => setHistory(result.map(elem => elem.products).flat()))
        await fetch("https://628a5b66e5e5a9ad3223b0b8.mockapi.io/products")
          .then(response => response.json())
          .then(result => setProducts(result))
        setProductsLoading(false)
      } catch (error) {
        alert(error)
      }
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
      })
        .then(response => response.json())
        .then(result => setBasketProducts(prev => [...prev, result]))


    } catch (error) {
      alert("error addInBasket")
    }

  }
  //удалить из корзины и на сервере и на клиенте
  const deleteFromBasket = async (product) => {
    try {
      await fetch(`https://628a5b66e5e5a9ad3223b0b8.mockapi.io/basket/${product.id}`, {
        method: "DELETE"
      })
      setBasketProducts(basketProducts.filter((elem) => elem != product))
    } catch (error) {
      alert("error deleteFromBasket")
    }

  }

  const addInFavorites = (productData) => {
    try {
      fetch("https://628a5b66e5e5a9ad3223b0b8.mockapi.io/favorites", {
        method: "POST",
        headers: {
          'Content-Type': 'application/json;charset=utf-8'
        },
        body: JSON.stringify(productData)
      })
        .then(response => response.json())
        .then(result => setFavorites(prev => [...prev, result]))
    } catch (error) {
      alert("error addInFavoriter")
    }
  }
  //удалить из избранного
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
  //добавить в историю покупок
  const addInHistory = (products) => {
    setHistory((prev) => [...prev, ...products]);
    fetch("https://629b4d38656cea05fc36ea9e.mockapi.io/history", {
      method: "POST",
      headers: {
        'Content-Type': 'application/json;charset=utf-8'
      },
      body: JSON.stringify({ products })
    })
      .then(response => response.json())
      .then(result => setOrderNumber(result.id))

  }
  //проверка сердечка
  const isProductLiked = (product) => {
    return favorites.some(elem => compareTwoProducts(elem, product))
  }
  //проверка плюсика
  const isProductPlused = (product) => {
    return basketProducts.some(elem => compareTwoProducts(elem, product))
  }
  //сравнение
  const compareTwoProducts = (one, two) => {
    return one.img == two.img && one.name == two.name && one.price == two.price
  }
  //поиск товаров
  const search = (event) => {
    setChangeInput(event.target.value)
  }
  return (
    <Context.Provider value={{
      addInBasket, changeInput, search, addInFavorites, deleteFromFavorites, favorites,
      deleteFromBasket, basketProducts, productsLoading, compareTwoProducts, isProductPlused,
      isProductLiked, setBasketProducts, addInHistory, orderNumber, history, setHistory
    }
    }>
      <div className='wrapper'>
        {openBasket ? <SideBasket basketProducts={basketProducts} deleteFromBasket={deleteFromBasket} onClickClose={() => { setOpenBasket(false); document.getElementsByTagName("body")[0].style.overflow = "visible"; }} /> : null}
        <Header onClickBasket={() => {
          setOpenBasket(true);
          document.getElementsByTagName("body")[0].style.overflow = "hidden";
        }} />
        <Routes>
          <Route path="/" element={<Products products={products}></Products>} />
          <Route path='/Favorites' element={<Favorites faworiteProducts={favorites}></Favorites>} />
          <Route path='/History' element={<History ></History>} />
          <Route path='*' element={<center>Такой страницы не существует</center>} />
        </Routes>
      </div>
    </Context.Provider>
  )
}

export default App;