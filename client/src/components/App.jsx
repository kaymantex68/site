import React, { useEffect, useContext } from 'react';
import { Switch, Route, useLocation, useHistory } from 'react-router-dom'
import classes from './App.module.css';
import ReactGA from 'react-ga';
import axios from 'axios'

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

import { AuthContext } from '../context/AuthContext'



function App(props) {
  let history = useHistory();
  /**
   *  передача информации на goole analitycs
   */
  var location = useLocation();
  ReactGA.initialize('UA-185966908-1');
  useEffect(() => {
    ReactGA.pageview(location.pathname);
  }, [location]);


  const [load, setLoad] = React.useState(false)
  const { cart, products, addProductToCart, filter, setSort } = props;
  const { token, userId, login, logout } = useAuth()
  const isAuth = !!token

  /**
   *  При первом запуске сайта весь массив product товаров
   *  передается с помощью функции setProduct (которая описана
   *  в actions/products.js ) передается в Store. Reducer products.
   *  так же сразу делается выборка для лидеров продаж и для распродажи.
   */
  const [isReadyAll, setIsReadyAll] = React.useState(false)
  const { setProducts, setLiders, setSales, setSlides, setDillers, setCart } = props;

  //===================== первоначальная загрузка в stor redux ==================
  const Load = async () => {
    await setProducts(Data)
    await setLiders(Data)
    await setSales(Data)
    await setSlides(SliderData)
    await setDillers(DillerData)
    await setIsReadyAll(true)
  }

  React.useEffect(() => {
    Load().then(() => {
      setLoad(true)
      console.log('Load complite...')
    })
  }, [])

  React.useEffect(() => {
    //===================== загрузка в корзину если нет авторизации ==================
    if (localStorage.getItem('cart') && !isAuth) {
      setCart([])
      const LocalCart = JSON.parse(localStorage.getItem('cart'))
      LocalCart.forEach(element => {
        addProductToCart(Data.find(prod => prod.model === element))
      });
      console.log('Cart is loaded (!isAuth)...')
    }
    //==================== загрузка в корзину если есть авторизация ==================
    if (isAuth && load) {
      setCart([])
      console.log('Cart is loaded (isAuth)...')
      console.log('userId', token)
    }
  }, [load, isAuth])

  //==================== добавление товаров в корзину если нет авторизации ==================
  React.useMemo(() => {
    try {
      if (load && !isAuth) {
        const ProductStorage = []
        cart.map(product => ProductStorage.push(product.model))
        localStorage.setItem('cart', JSON.stringify(ProductStorage))
      }
    } catch (e) {
      if (e) {
        alert('Превышен лимит Local storage');
      }
    }
  }, [cart])

  //==================== глобальный фильтр переход в catalog ==================
  React.useMemo(() => {
    if (filter.global && filter.global.length > 0 && location != '/catalog') {
      history.push('/catalog');
    }
  }, [filter.global])



  return (
    <>
      <AuthContext.Provider value={{ token, userId, login, logout, isAuth }}>
        <div className={classes.Main}>
          <div className={classes.fixed_header}>
            <UpHeader />
            <Auth />
            <Navbar />
            {isAuth && <div>Авторизация пройдена</div>}
          </div>
          {/* {isReadyAll ? */}
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
          {/* : <div>loading</div>} */}
          <Footer />
        </div>
      </AuthContext.Provider>
    </>
  );
};
export default App;
