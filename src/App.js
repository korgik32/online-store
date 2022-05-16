
import './App.scss';
import Product from './components/Product/Product';
import Header from './components/Header/Header';
import Search from './components/Search/Search';
import SideBasket from './components/SideBasket/SideBasket';
function App() {
  return (
    <div className='wrapper'>

      <div /* style={{ display: 'none' }} */ className='overlay'>
        <SideBasket />
      </div>
      <Header />

      <div className='searchBlock'>
        <div className='searchBlock__title'>Все товары</div>
        <Search />

      </div>
      <main>

        <Product />
        {/* ___________________________________________________ */}


      </main>
    </div>
  )
}

export default App;
