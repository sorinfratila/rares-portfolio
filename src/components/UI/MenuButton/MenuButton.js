import React, { useEffect, useState } from "react"
import * as classes from "./MenuButton.module.scss"
import PropTypes from "prop-types"

function MenuButton({ isOpen, clicked }) {
    const [upArr, setUpArr] = useState([classes.Up])
    const [downArr, setDownArr] = useState([classes.Down])

    useEffect(() => {
        setUpArr(isOpen ? [classes.Up, classes.UpOpen] : [classes.Up])
        setDownArr(isOpen ? [classes.Down, classes.DownOpen] : [classes.Down])
    }, [isOpen])

    return (
        <button onClick={clicked} className={classes.MenuButton}>
            <div className={upArr.join(" ")} />
            <div className={downArr.join(" ")} />
        </button>
    )
}

MenuButton.propTypes = {
    clicked: PropTypes.func,
    isOpen: PropTypes.bool,
}

export default MenuButton
