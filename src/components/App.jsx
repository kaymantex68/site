import React from 'react';
import { Switch, Route } from 'react-router-dom'
import classes from './App.module.css';

import UpHeader from './UpHeader/UpHeader';

import Navbar from '../containers/Navbar'
import Footer from '../components/Footer/Footer'
import MainPage from '../components/MainPage/MainPage'
import Contacts from '../components/Contacts/Contacts'
import DetailProduct from '../containers/DetailProduct'
import Catalog from '../containers/Catalog'
import CartDetail from '../containers/CartDetail'

import { DillerData } from '../Data/DillerData/DataDiler'
import { Data } from '../Data/ProductsData/Data'
import { SliderData } from '../Data/SliderData/SliderData'



/**
 *  Компонент App получает props из App.js при помощи 
 *  connect
 */
function App(props) {
  // const { products } = props;
  // console.info('PROPS APPS: ', props)
  // console.info('DILLER APPS: ', DillerData)
  /**
   *  При первом запуске сайта весь массив product товаров
   *  передается с помощью функции setProduct (которая описана
   *  в actions/products.js ) передается в Store. Reducer products.
   *  так же сразу делается выборка для лидеров продаж и для распродажи.
   */

  const [isReadyAll, setIsReadyAll] = React.useState(false)
  const { setProducts, setLiders, setSales, setSlides, setDillers } = props;

  // const delay = (ms) => {
  //   return new Promise((resolve, regect) => {
  //     setTimeout(() => {
  //       resolve()
  //     }, ms)
  //   })
  // }

  const Load = async () => {
    const products = await setProducts(Data)
    const liders = await setLiders(Data)
    const sales = await setSales(Data)
    const slides = await setSlides(SliderData)
    const dillers = await setDillers(DillerData)
    await setIsReadyAll(true)
    return {status:'load'}
  }

  React.useState(() => {
    Load().then(response=>console.log(response))
  }, [])

  return (
    <>

      <div className={classes.Main}>
        <UpHeader />
        <Navbar />
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
            <Route path="*" exact={true} component={MainPage} />
          </Switch>
          : <div>loading</div>}
        <Footer />
      </div>

    </>
  );
};
export default App;
