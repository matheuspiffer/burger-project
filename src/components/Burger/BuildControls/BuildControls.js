import React from 'react'
import classes from './BuildConstrols.module.css'
import BuildControl from './BuildControl/BuildControl'
const controls = [
    { label: 'Salad', type: 'salad' },
    { label: 'Bacon', type: 'bacon' },
    { label: 'Cheese', type: 'cheese' },
    { label: 'Meat', type: 'meat' }
]
const buildControls = props => (
    <div className={classes.BuildControls}>
        <p>Current Price: <strong>{props.price.toFixed(2)}</strong></p>
        {controls.map(crtl => {
            return <BuildControl
                added={() => props.ingredientsAdded(crtl.type)}
                removed={() => props.ingredientsRemoved(crtl.type)}
                disabled={props.disabled[crtl.type]}
                key={crtl.label}
                label={crtl.label}
            />
        })}
        <button
            className={classes.OrderButton}
            disabled={!props.purchasable}
            onClick={props.ordered}>
            ORDER NOW
        </button>
    </div>
)

export default buildControls