//import logo from '../logo.svg';
import logo from '../assets/logo.png'
import '../App.css';
import Banner from './banner';
// import Cart from './Cart';
//import CareScale from './CareScale';
import ShoppingList from './ShoppingList';

function App() {
  const auteur= 'De DUCLAIR';
  return (
  <div>
    <Banner> 
      <img src={logo} alt='La maison jungle' className='lmj-logo' />
      <h1 className='lmj-auteur'>La maison Jungle {auteur}</h1>
    </Banner>
    {/*<Cart /> */}
    <ShoppingList />
  </div>);
}

export default App;
