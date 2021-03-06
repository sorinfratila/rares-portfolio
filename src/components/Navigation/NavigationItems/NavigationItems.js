import React from "react"
import * as classes from "./NavigationItems.module.scss"
import NavigationItem from "./NavigationItem/NavigationItem"
import PropTypes from "prop-types"

function NavigationItems(props) {
    const { show, clicked, items } = props

    const classesArr = [classes.NavigationItems]
    if (show) classesArr.push(classes.Shown)

    const localItems = items.map(item => {
        return (
            <NavigationItem
                clicked={clicked}
                key={item.name}
                show={show}
                link={item.to}
            >
                {item.name}
            </NavigationItem>
        )
    })
    return <ul className={classesArr.join(" ")}>{localItems}</ul>
}

NavigationItems.propTypes = {
    show: PropTypes.bool,
    clicked: PropTypes.func,
    items: PropTypes.array,
}

export default NavigationItems
