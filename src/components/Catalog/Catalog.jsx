import React from 'react'
// import { Link } from 'react-router-dom'
import { Helmet } from 'react-helmet'

import ProductsCard from '../../containers/ProductsCard'
// import CatalogFilter from './CatalogFilter'

import classes from './Catalog.module.css'

import filter from 'lodash/filter'



const Catalog = (props) => {
    let { products } = props;
    let { params, url } = props.match;
    // console.info('CATALOG PROPS: ', props)
    // console.info('CATALOG Products: ', products)
    // console.info('CATALOG MATCH PARAMS: ', props.match)

    if (params.cat) {
        products = filter(products, function (item) {
            return item.type[1] === params.cat;
        });
    }

    if (params.type) {
        products = filter(products, function (item) {
            return item.type[2] === params.type;
        });

    }

    if (params.brand) {
        products = filter(products, function (item) {
            return item.brand === params.brand;
        });
    }

    if (params.model) {
        products = filter(products, function (item) {
            return item.model === params.model;
        });
    }



    let url2 = '';
    return (

        <div className={classes.catalog_container}>
            <Helmet>
                <title>{ `Видеонаблюдение Тамбов Кайман`}</title>
            </Helmet>
            {/* <CatalogFilter /> */}
            <div className={classes.catalog_container_block}>
                {
                    products.map((product, key) => {
                        if (params.cat) {
                            url2 = '';
                            url2 = `${url}/${product.type[2]}/${product.brand}`
                        }
                        if (params.cat && params.type) {
                            url2 = '';
                            url2 = `${url}/${product.brand}`
                        }
                        if (params.cat && params.type && params.brand) {
                            url2 = '';
                            url2 = `${url}`
                        }
                        if (!params.cat) {
                            url2 = '';
                            url2 = `${url}/${product.type[1]}/${product.type[2]}/${product.brand}`
                        }
                        return (
                            <div key={`catalog-product-${key}`} className={classes.catalog_container_product_container}>
                                {/* <Link to={`${url2}/${product.model}`}> */}
                                    <ProductsCard {...product} link={url2} />
                                {/* </Link> */}
                            </div>
                        )
                    })
                }
            </div>
            {/* <div className={classes.Romb1}></div>
            <div className={classes.Romb2}></div> */}
        </div>
    )
}

export default Catalog; 