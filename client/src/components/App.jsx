import React, { useEffect } from 'react';
import { Switch, Route, useLocation, useHistory } from 'react-router-dom'
import classes from './App.module.css';
import ReactGA from 'react-ga';

import UpHeader from './UpHeader/UpHeader';

import Navbar from '../containers/Navbar'
import Footer from '../components/Footer/Footer'
import MainPage from '../components/MainPage/MainPage'
import Contacts from '../components/Contacts/Contacts'
import DetailProduct from '../containers/DetailProduct'
import Catalog from '../containers/Catalog'
import CartDetail from '../containers/CartDetail'
import { Auth } from '../components/Authorization/Auth'

import { DillerData } from '../Data/DillerData/DataDiler'
import { Data } from '../Data/ProductsData/Data'
import { SliderData } from '../Data/SliderData/SliderData'
import CartToPdf from '../containers/Pdf'

import { useAuth } from '../hooks/auth.hook'





/**
 *  Компонент App получает props из App.js при помощи 
 *  connect
 */
function App(props) {
  const [load, setLoad] = React.useState(false)
  const { cart, products, addProductToCart, filter, setSort } = props;
  let history = useHistory();


  

  
  var location = useLocation();
  ReactGA.initialize('UA-185966908-1');
  useEffect(() => {
    ReactGA.pageview(location.pathname);
  }, [location]);




  /**
   *  При первом запуске сайта весь массив product товаров
   *  передается с помощью функции setProduct (которая описана
   *  в actions/products.js ) передается в Store. Reducer products.
   *  так же сразу делается выборка для лидеров продаж и для распродажи.
   */

  const [isReadyAll, setIsReadyAll] = React.useState(false)
  const { setProducts, setLiders, setSales, setSlides, setDillers, } = props;

  // const delay = (ms) => {
  //   return new Promise((resolve, regect) => {
  //     setTimeout(() => {
  //       resolve()
  //     }, ms)
  //   })
  // }

  const Load = async () => {

    await setProducts(Data)
    await setLiders(Data)
    await setSales(Data)
    await setSlides(SliderData)
    await setDillers(DillerData)
    await setIsReadyAll(true)
  }


  React.useState(() => {
    Load().then(() => { setLoad(true) })
  }, [])


  React.useState(() => {
    if (localStorage.getItem('cart')) {
      const LocalCart = JSON.parse(localStorage.getItem('cart'))
      LocalCart.forEach(element => {
        addProductToCart(Data.find(prod => prod.model === element))
      });
    }
  }, [])


  React.useMemo(() => {
    try {
      const ProductStorage = []
      cart.map(product => ProductStorage.push(product.model))
      localStorage.setItem('cart', JSON.stringify(ProductStorage))
    } catch (e) {
      if (e) {
        alert('Превышен лимит');
      }
    }
  }, [cart])


  React.useMemo(() => {
    if (filter.global && filter.global.length > 0 && location != '/catalog') {
      history.push('/catalog');
    }
  }, [filter.global])


  return (
    <>

      <div className={classes.Main}>
        <div className={classes.fixed_header}>
          <UpHeader />
          <Auth />
          <Navbar />
          
        </div>
        {isReadyAll ?
          <Switch>
            <Route exact path="/" component={MainPage} />
            <Route exact path="/cart" component={CartDetail} />
            <Route exact path="/product/:model" component={DetailProduct} />
            <Route exact path="/catalog/" component={Catalog} />
            <Route exact path="/catalog/:cat" component={Catalog} />
            <Route exact path="/catalog/:cat/:type" component={Catalog} />
            <Route exact path="/catalog/:cat/:type/:brand" component={Catalog} />
            <Route exact path="/catalog/:cat/:type/:brand/:model" component={DetailProduct} />
            <Route exact path="/contacts/adress" component={Contacts} />
            <Route exact path="/docs/pdf" component={CartToPdf} />
            <Route path="*" exact={true} component={MainPage} />
          </Switch>
          : <div>loading</div>}
        <Footer />
      </div>

    </>
  );
};
export default App;
