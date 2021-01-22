import React, { useContext, useEffect } from 'react';
import classes from './CatalogContainer.module.css'
import { Context } from '../../Context'
import { BrowserRouter, Switch, Route, Link } from 'react-router-dom'
import { Helmet } from 'react-helmet'

function CatalogContainer({ match, nalichie, akciya, rasprodaga, brand, sort }) {

    const { Data } = useContext(Context);
    let DataCatalog = [];

    Data.map((item) => {
        return (
            DataCatalog.push(item)
        )
    })

    DataCatalog.sort((a, b) => a.model > b.model ? 1 : -1)

    if (nalichie === true) {
        DataCatalog = DataCatalog.filter((e) => { if (e.inStock_outStock == 1) { return e } })
    }

    if (akciya === true) {
        DataCatalog = DataCatalog.filter((e) => { if (e.akciya) { return e } })
    }

    if (rasprodaga === true) {
        DataCatalog = DataCatalog.filter((e) => { if (e.old_coast) { return e } })
    }

    if (brand != 'All') {
        DataCatalog = DataCatalog.filter((e) => { if (e.brand == brand) { return e } })
    }


    if (sort == 'UP_COAST') {
        DataCatalog.sort((a, b) => +a.coast > +b.coast ? 1 : -1)
    }

    if (sort == 'DOWN_COAST') {
        DataCatalog.sort((a, b) => +a.coast < +b.coast ? 1 : -1)
    }





    const ProductDisplay = (product, index) => {

        // unic.push(product.brand);
        //  unic=[...new Set(unic)];



        return (
            
                <div className={classes.Lider_card} >

                    <div className={classes.Lider_pic}>
                        {product.akciya && <div className={classes.Akciya_container}>

                            <span className={classes.Akciya_span}>{`${product.akciya}`}</span>
                            <img src={product.pic_akciya} className={classes.Pic_akcia} />
                        </div>}

                        <img src={`/img_products/${product.brand}/${product.model}/1.png`} />

                        <div className={classes.Back_pic}></div>
                        {product.pic_brand != false ?
                            <><div className={classes.Brand}>
                                <img src={product.pic_brand} />
                            </div></> : null}
                    </div>

                    <div className={classes.Lider_text}>
                        <p className={classes.Model} style={{ fontSize: product.small_item }}> {product.model}</p>
                        <p> {product.type[0]}</p>
                        <p> {product.info.text}</p>
                        <p> {product.info.text1[0]}  {product.info.text1[1]}</p>

                        {product.inStock_outStock === 1 &&
                            <p className={classes.Stock_true}><span className={classes.Stock_span_true}>в наличии</span></p>
                        }
                        {!product.inStock_outStock &&
                            <p className={classes.Stock_false}><span className={classes.Stock_span_false}>под заказ</span></p>
                        }
                        {product.inStock_outStock === 2 &&
                            <p className={classes.Stock_soon}><span className={classes.Stock_span_soon}>ожидается поступление</span></p>
                        }
                        <h1 className={classes.Coast}>
                            {product.old_coast != false ?
                                <><span className={classes.Old_coast} >{`${product.old_coast} руб.`}</span><span className={classes.New_coast}>   {`${product.coast} руб.`}</span></> :
                                `${product.coast} руб.`}
                        </h1>
                    </div>


                </div>

            
        )
    }
    // console.log(match)
    if (match.params.brand != null) {
        return (
            <>
        
                <Helmet>
                    <title>{`${match.params.brand} видеонаблюдение камера видеонаблюдения видеонаблюдение тамбов видеонаблюдение купить система видеонаблюдения камера купить пожарный сигнализация`}</title>
                </Helmet>
                {
                    DataCatalog.map((item, index) => {
                        if ((item.type[1] == match.params.cat) && (item.type[2] == match.params.type) && (item.brand == match.params.brand)) {
                            return (
                                <Link to={`/catalog/${match.params.cat}/${match.params.type}/${match.params.brand}/${item.id}`}>
                                    {ProductDisplay(item)}
                                </Link>
                            )
                        }
                    })
                }
            </>
        )
    }
    if (match.params.type != null) {
        return (
            <>
                 <Helmet>
                    <title>{`${match.params.type} видеонаблюдение камера видеонаблюдения видеонаблюдение тамбов видеонаблюдение купить система видеонаблюдения камера купить пожарный сигнализация`}</title>
                </Helmet>
                {
                    DataCatalog.map((item, index) => {
                        if ((item.type[1] == match.params.cat) && (item.type[2] == match.params.type)) {
                            return (
                                <Link to={`/catalog/${match.params.cat}/${match.params.type}/${item.brand}/${item.id}`}>
                                    {ProductDisplay(item)}
                                </Link>
                            )
                        }
                    })
                }

            </>
        )
    }
    if (match.params.cat != null) {
        return (
            <>
                 <Helmet>
                    <title>{`${match.params.cat} видеонаблюдение камера видеонаблюдения видеонаблюдение тамбов видеонаблюдение купить система видеонаблюдения камера купить пожарный сигнализация`}</title>
                </Helmet>
                {
                    DataCatalog.map((item, index) => {
                        if (item.type[1] == match.params.cat) {
                            return (
                                <Link to={`/catalog/${match.params.cat}/${item.type[2]}/${item.brand}/${item.id}`}>
                                    {ProductDisplay(item)}
                                </Link>
                            )
                        }
                    })
                }

            </>
        )
    }

    if (match.path == '/catalog/all') {
        return (
            <>
                 <Helmet>
                    <title>{`видеонаблюдение камера видеонаблюдения видеонаблюдение тамбов видеонаблюдение купить система видеонаблюдения камера купить пожарный сигнализация`}</title>
                </Helmet>
                {
                    DataCatalog.map((item, index) => {

                        return (
                            <Link to={`/catalog/all/${item.id}`}>
                                {ProductDisplay(item)}
                            </Link>
                        )

                    })
                }

            </>
        )
    }




}

export default CatalogContainer;