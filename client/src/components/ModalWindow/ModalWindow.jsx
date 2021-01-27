import React from 'react'
import classes from './ModalWindow.module.css'

export const ModalWindow = (props) => {
    const {active, setActive, children} = props
    return (

        <div className={active? `${classes.modal} ${classes.active}`: `${classes.modal}` } onClick={()=>{setActive(false)}}>
            < div className={active? `${classes.modal_content} ${classes.active}`: `${classes.modal_content}` } onClick={e=>e.stopPropagation()}>
                {children}
            </div>
        </div>
        )
}