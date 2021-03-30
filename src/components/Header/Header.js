import React, { useContext, useState, useEffect } from "react"
import PropTypes from "prop-types"

import * as classes from "./Header.module.scss"
import Link from "../UI/Link/Link"
import Appear from "../Transitions/Appear/Appear"

const Header = ({ menuList = [], title }) => {
    const [inProp, setInProp] = useState(false)
    useEffect(() => {
        setInProp(true)
    }, [])

    let headerEl = <span className={classes.Label}>{title}</span>

    if (menuList.length) {
        headerEl = (
            <>
                <span className={classes.Label}>{title}</span>
                <Link type="div">Project</Link>
            </>
        )
    }
    return (
        <Appear duration={1000} inProp={inProp}>
            <header className={classes.Header}>{headerEl}</header>
        </Appear>
    )
}

Header.propTypes = {
    children: PropTypes.node,
    menuList: PropTypes.array,
    title: PropTypes.string,
}
export default Header
