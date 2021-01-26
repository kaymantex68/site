import React, { useCallback } from 'react'
import classes from './CatalogFilter.module.css'

const CatalogFilter = (props) => {
    const { setSort, products } = props
    const [sort, setFilter] = React.useState(
        {
            sort: 'ALL',
            brand: 'ALL'
        }
    )

    console.log(sort)

    /**
     * ============================================================ уникальные бренды
     */
    let unic = []
    products.filter(item => unic.push(item.brand));
    unic = [... new Set(unic)].sort((a, b) => a > b ? 1 : -1)

    React.useEffect(()=>{
        setSort(sort)
    },[sort])

    

    return (
        <div className={classes.filter_container}>


            <div className={classes.ContainerBrand}>
                <select className={classes.SelectBrand} name="brand" onChange={(e) => { setFilter({...sort,[e.target.name]:e.target.value}) }}>
                    <option value="All_BRAND">Все</option>
                    {
                        unic.map((item, key) => {
                            return (
                                <option key={`brand_sort_unic_${key}`} value={item}>{item}</option>
                            )
                        })}
                </select>
            </div>





            <div className={classes.ContainerBrand}>
                <select className={classes.SelectBrand} name="sort" onChange={(e) => {  setFilter({...sort,[e.target.name]:e.target.value}) }}>
                    <option value="ALL">>Отсортировать по</option>
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