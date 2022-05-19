
import './App.scss';
import Product from './components/Product/Product';
import Header from './components/Header/Header';
import Search from './components/Search/Search';
import SideBasket from './components/SideBasket/SideBasket';
import { useState } from 'react';

const arr = [
  { price: 12999, name: "Мужские Кроссовки Nike Blazer Mid Suede", img: "https://placepic.ru/wp-content/uploads/2021/01/FF3mH8WjNnC2WlfFnSX34PFQycxOoEx0ViBmDS867A1Qs4DKSXt3TF2MYn0vLX7GiqgYZDBv9IU7JAx6FA3wqAAb7QWJ9yUh8QwVhux99aPsSJ7HTqAEaFt0IRIuOqsSG7CN9hQ.jpg" },
  { price: 12999, name: "Мужские Кроссовки Nike Blazer Mid Suede", img: "https://placepic.ru/wp-content/uploads/2021/01/FF3mH8WjNnC2WlfFnSX34PFQycxOoEx0ViBmDS867A1Qs4DKSXt3TF2MYn0vLX7GiqgYZDBv9IU7JAx6FA3wqAAb7QWJ9yUh8QwVhux99aPsSJ7HTqAEaFt0IRIuOqsSG7CN9hQ.jpg" },
  { price: 12999, name: "Мужские Кроссовки Nike Blazer Mid Suede", img: "https://placepic.ru/wp-content/uploads/2021/01/FF3mH8WjNnC2WlfFnSX34PFQycxOoEx0ViBmDS867A1Qs4DKSXt3TF2MYn0vLX7GiqgYZDBv9IU7JAx6FA3wqAAb7QWJ9yUh8QwVhux99aPsSJ7HTqAEaFt0IRIuOqsSG7CN9hQ.jpg" },
  { price: 12999, name: "Мужские Кроссовки Nike Blazer Mid Suede", img: "https://placepic.ru/wp-content/uploads/2021/01/FF3mH8WjNnC2WlfFnSX34PFQycxOoEx0ViBmDS867A1Qs4DKSXt3TF2MYn0vLX7GiqgYZDBv9IU7JAx6FA3wqAAb7QWJ9yUh8QwVhux99aPsSJ7HTqAEaFt0IRIuOqsSG7CN9hQ.jpg" },
  { price: 12999, name: "Мужские Кроссовки Nike Blazer Mid Suede", img: "https://placepic.ru/wp-content/uploads/2021/01/FF3mH8WjNnC2WlfFnSX34PFQycxOoEx0ViBmDS867A1Qs4DKSXt3TF2MYn0vLX7GiqgYZDBv9IU7JAx6FA3wqAAb7QWJ9yUh8QwVhux99aPsSJ7HTqAEaFt0IRIuOqsSG7CN9hQ.jpg" },
  { price: 12999, name: "Мужские Кроссовки Nike Blazer Mid Suede", img: "https://placepic.ru/wp-content/uploads/2021/01/FF3mH8WjNnC2WlfFnSX34PFQycxOoEx0ViBmDS867A1Qs4DKSXt3TF2MYn0vLX7GiqgYZDBv9IU7JAx6FA3wqAAb7QWJ9yUh8QwVhux99aPsSJ7HTqAEaFt0IRIuOqsSG7CN9hQ.jpg" },
]

function App() {
  const [openBasket, setOpenBasket] = useState(false);

  return (
    <div className='wrapper'>

      {openBasket ? <SideBasket onClickClose={() => { setOpenBasket(false) }} /> : null}
      <Header test={a} onClickBasket={() => { setOpenBasket(true) }} />

      <div className='searchBlock'>
        <div className='searchBlock__title'>Все товары</div>
        <Search />

      </div>
      <main>

        {
          arr.map(elem => <Product
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
