
import './App.scss';
import Product from './components/Product/Product';
import Header from './components/Header/Header';
import Search from './components/Search/Search';
import SideBasket from './components/SideBasket/SideBasket';
import { useEffect, useState } from 'react';


function App() {
  const [openBasket, setOpenBasket] = useState(false);
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("https://628a5b66e5e5a9ad3223b0b8.mockapi.io/products")
      .then(response => response.json())
      .then(result => { setProducts(result) })
  }, [])
  return (
    <div className='wrapper'>

      {openBasket ? <SideBasket onClickClose={() => { setOpenBasket(false) }} /> : null}
      <Header onClickBasket={() => { setOpenBasket(true) }} />

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
            /* onClickPlus={() => alert("Плюс")}
            onClickLike={() => alert("Лайк")} */
            self={elem}
          />)
        }
      </main>
    </div>
  )
}

export default App;
