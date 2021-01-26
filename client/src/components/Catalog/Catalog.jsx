import React from 'react'

import { Helmet } from 'react-helmet'

import ProductsCard from '../../containers/ProductsCard'
import CatalogFilter from '../../containers/CatalogFilter'

import classes from './Catalog.module.css'

import filter from 'lodash/filter'



const Catalog = (props) => {
    let { products, sort } = props;
    let { params, url } = props.match;
    // console.log('sort: ', sort)
    /**
     * ============================================================ сортировка
     * по хорошему, ее бы отсюда перенести в контейнер
     */

    if (sort.sort === "DOWN_COAST") {
        products.sort((a, b) => +a.coast > +b.coast ? 1 : -1)
    }
    
    if (sort.sort === "UP_COAST") {
        products.sort((a, b) => +a.coast < +b.coast ? 1 : -1)
    }

    if (sort.sort === "ALL") {
        products.sort((a, b) => a.brand > b.brand ? 1 : -1)
    }

    if (sort.sort === "ALFA_MAX") {
        products.sort((a, b) => a.model > b.model ? 1 : -1)
    }

    if (sort.sort === "ALFA_MIN") {
        products.sort((a, b) => a.model < b.model ? 1 : -1)
    }

    /**
    * ============================================================ checkbox
    */

    if (sort.available === true) {
        products = products.filter(product => product.inStock_outStock === 1)
    }

    if (sort.stock === true) {
        products = products.filter(product => product.akciya)
    }

    if (sort.sale === true) {
        products = products.filter(product => product.rasprodaja)
    }

    /**
   * ============================================================ brand
   */

    if (sort.brand === "All_BRAND") {
        products.sort((a, b) => a.brand > b.brand ? 1 : -1)
    } else {
        products = products.filter(product => product.brand === sort.brand)
    }



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
                <title>{`Видеонаблюдение Тамбов Кайман`}</title>
            </Helmet>
            <CatalogFilter />
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

                                <ProductsCard {...product} link={url2} />
                            </div>
                        )
                    })
                }
            </div>

        </div>
    )
}

export default Catalog; 