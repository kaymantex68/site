import React from 'react'
import classes from './CatalogFilter.module.css'

const CatalogFilter = (props) => {

    const { setSort, products, params, url, filter } = props
    console.log(params)
    const [sort, setFilter] = React.useState(
        {
            sort: 'ALL',
            brand: 'All_BRAND',
            available: false,
            stock: false,
            sale: false,
            changeCoast: false
        }
    )

    // 

    /**
     * ============================================================ уникальные бренды
     */
    let unic = []

    products.map((item, index) => {
        if (params.cat === item.type[1]) {
            unic.push(item.brand);
            unic = [...new Set(unic)];
        }
        if (url === '/catalog') {
            unic.push(item.brand);
            unic = [...new Set(unic)];
        }
        return 0
    })
    

    /**
     * ============================================================ сброс фильтров 
     * =============================================== после перехода на новый url
     */
    let change=null
    React.useEffect(() => {
        if (url==='/catalog') {
            change=filter.global
        } else{
            change = null
        }

        setFilter({...filter,
            sort: 'ALL',
            brand: 'All_BRAND',
            available: false,
            stock: false,
            sale: false,
            changeCoast: false,
            global: change
        })
    }, [url])

    React.useEffect(() => {
        setSort(sort)
    }, [sort, setSort])



    return (
        <div className={classes.filter_container}>

            <div className={classes.checkbox_block}>
                <label className={classes.label_checkbox} For="id_available">В наличии</label>
                <input className={classes.checkbox} id="id_available" name="available" type="checkbox" checked={sort.available} value={sort.available} onChange={(e) => { setFilter({ ...sort, [e.target.name]: e.target.checked }) }} ></input>
            </div>
            <div className={classes.checkbox_block}>
                <label className={classes.label_checkbox} For="id_stock">Акция</label>
                <input className={classes.checkbox} id="id_stock" name="stock" type="checkbox" checked={sort.stock}  value={sort.stock} onChange={(e) => { setFilter({ ...sort, [e.target.name]: e.target.checked }) }} ></input>
            </div>
            <div className={classes.checkbox_block}>
                <label className={classes.label_checkbox} For="id_sale">Распродажа</label>
                <input className={classes.checkbox} id="id_sale" name="sale" type="checkbox" checked={sort.sale} value={sort.sale} onChange={(e) => { setFilter({ ...sort, [e.target.name]: e.target.checked }) }} ></input>
            </div>
            <div className={classes.checkbox_block}>
                <label className={classes.label_checkbox} For="id_changeCoast">Изменение цены</label>
                <input className={classes.checkbox} id="id_changeCoast" name="changeCoast" type="checkbox" checked={sort.changeCoast} value={sort.changeCoast} onChange={(e) => { setFilter({ ...sort, [e.target.name]: e.target.checked }) }} ></input>
            </div>
            <div className={classes.Sort}>
                <select className={classes.SelectBrand} name="brand" value={sort.brand} onChange={(e) => { setFilter({ ...sort, [e.target.name]: e.target.value }) }}>
                    <option value="All_BRAND">Все</option>
                    {
                        unic.sort((a, b) => a > b ? 1 : -1).map((item, key) => {
                            return (
                                <option key={`brand_sort_unic_${key}`} value={item}>{item}</option>
                            )
                        })}
                </select>
            </div>
            <div className={classes.Sort}>
                <select className={classes.SelectBrand} name="sort" value={sort.sort} onChange={(e) => { setFilter({ ...sort, [e.target.name]: e.target.value }) }}>
                    <option value="ALL">> Отсортировать по</option>
                    <option value="UP_COAST">- по возрастанию цены</option>
                    <option value="DOWN_COAST">- по убыванию цены</option>
                    <option value="ALFA_MAX">- по алфавиту А-Я</option>
                    <option value="ALFA_MIN">- по алфавиту Я-А</option>
                </select>
            </div>
        </div>

    )
}

export default CatalogFilter;