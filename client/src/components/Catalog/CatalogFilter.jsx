import React from 'react'
import classes from './CatalogFilter.module.css'

const CatalogFilter = (props) => {
    const { setSort, products } = props
    const [sort, setFilter] = React.useState(
        {
            sort: 'ALL',
            brand: 'ALL',
            available: false,
            stock: false,
            sale: false
        }
    )

    console.log(sort)

    /**
     * ============================================================ уникальные бренды
     */
    let unic = []
    products.filter(item => unic.push(item.brand));
    unic = [...new Set(unic)].sort((a, b) => a > b ? 1 : -1)

    React.useEffect(() => {
        setSort(sort)
    }, [sort,setSort])



    return (
        <div className={classes.filter_container}>

            <div className={classes.checkbox_block}>
                <label className={classes.label_checkbox} for="id_available">В наличии</label>
                <input className={classes.checkbox} id="id_available" name="available" type="checkbox" value={sort.available} onChange={(e) => { setFilter({ ...sort, [e.target.name]: e.target.checked }) }} ></input>
            </div>
            <div className={classes.checkbox_block}>
                <label className={classes.label_checkbox} for="id_stock">Акция</label>
                <input className={classes.checkbox} id="id_stock" name="stock" type="checkbox" value={sort.stock} onChange={(e) => { setFilter({ ...sort, [e.target.name]: e.target.checked })  }} ></input>
            </div>
            <div className={classes.checkbox_block}>
                <label className={classes.label_checkbox} for="id_sale">Распродажа</label>
                <input className={classes.checkbox} id="id_sale" name="sale" type="checkbox" value={sort.sale} onChange={(e) => { setFilter({ ...sort, [e.target.name]: e.target.checked })  }} ></input>
            </div>
            <div className={classes.Sort}>
                <select className={classes.SelectBrand} name="brand" onChange={(e) => { setFilter({ ...sort, [e.target.name]: e.target.value }) }}>
                    <option value="All_BRAND">Все</option>
                    {
                        unic.map((item, key) => {
                            return (
                                <option key={`brand_sort_unic_${key}`} value={item}>{item}</option>
                            )
                        })}
                </select>
            </div>
            <div className={classes.Sort}>
                <select className={classes.SelectBrand} name="sort" onChange={(e) => { setFilter({ ...sort, [e.target.name]: e.target.value }) }}>
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