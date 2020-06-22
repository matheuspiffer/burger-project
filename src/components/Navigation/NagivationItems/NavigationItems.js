import React from 'react'
import classes from './NavigationItems.module.css'
import NavigatiomItem from './NavigatiomItem/NavigationItem'
const navigationItems = () => (
    <ul className={classes.NavigationItems}>
        <NavigatiomItem link='/' active>Burger Builder</NavigatiomItem>
        <NavigatiomItem link='/'>Checkout</NavigatiomItem>
    </ul>

)

export default navigationItems