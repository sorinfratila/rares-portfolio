import React from "react"
import PropTypes from "prop-types"
import * as classes from "./Backdrop.module.scss"

function Backdrop(props) {
    const { clicked, show } = props
    const classesArr = [classes.Backdrop]
    if (!show) {
        classesArr.push(classes.Hidden)
    }

    const delay = func => {
        return setTimeout(() => func(), 0)
    }

    return (
        <div onClick={() => delay(clicked)} className={classesArr.join(" ")}>
            {props.children}
        </div>
    )
}

Backdrop.propTypes = { clicked: PropTypes.func, show: PropTypes.bool }

export default Backdrop
