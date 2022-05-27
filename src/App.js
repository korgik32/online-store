
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
  const [basketProducts, setBasketProducts] = useState([]);
  //стейт на изменение поиска
  const [changeInput, setChangeInput] = useState("");
  //получить список продуктов
  useEffect(() => {
    fetch("https://628a5b66e5e5a9ad3223b0b8.mockapi.io/products")
      .then(response => response.json())
      .then(result => { setProducts(result) })
    fetch("https://628a5b66e5e5a9ad3223b0b8.mockapi.io/basket")
      .then(response => response.json())
      .then(result => setBasketProducts(result))

  }, [])
  //добавить в корзину 
  const addInBasket = async (productData) => {
    //мокАпи автоматически добавляет id поэтому я сначала записываю туда...
    await fetch("https://628a5b66e5e5a9ad3223b0b8.mockapi.io/basket", {
      method: "POST",
      headers: {
        'Content-Type': 'application/json;charset=utf-8'
      },
      body: JSON.stringify(productData)
    })
    //... а потом забираю тоже самое только с полем id 
    await fetch(`https://628a5b66e5e5a9ad3223b0b8.mockapi.io/basket/`, {
      method: "GET"
    })
      .then(response => response.json())
      .then(result => setBasketProducts(prev => [...prev, result[result.length - 1]]))
    //добавляем на мокАпи

  }

  const deleteFromBasket = (obj) => {
    fetch(`https://628a5b66e5e5a9ad3223b0b8.mockapi.io/basket/${obj.id}`, {
      method: "DELETE"
    })

    setBasketProducts(basketProducts.filter((elem) => elem != obj))
  }

  const search = (event) => {
    setChangeInput(event.target.value)
  }
  return (
    <div className='wrapper'>
      {openBasket ? <SideBasket basketProducts={basketProducts} deleteFromBasket={deleteFromBasket} onClickClose={() => { setOpenBasket(false); document.getElementsByTagName("body")[0].style.overflow = "visible"; }} /> : null}
      <Header onClickBasket={() => { setOpenBasket(true); document.getElementsByTagName("body")[0].style.overflow = "hidden"; }} />

      <div className='searchBlock'>
        <div className='searchBlock__title'>{changeInput ? `Поисик по запросу: "${changeInput}"` : "Все товары"}</div>
        <Search search={search} />

      </div>
      <main>
        {
          products
            .filter((elem => elem.name.toLowerCase().includes(changeInput.toLowerCase())))
            .map((elem, index) => <Product
              key={index}
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
