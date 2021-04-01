import React from "react"
import PropTypes from "prop-types"
import * as classes from "./NavigationItem.module.scss"
import { Link } from "gatsby"
import * as fade from "../../../../transitions/Fade.module.scss"

function NavigationItem({ link, children, show, clicked }) {
    const classesArr = show
        ? [classes.NavigationItem, fade.FadeIn, fade.On]
        : [classes.NavigationItem, fade.FadeIn]

    return (
        <li className={classesArr.join(" ")}>
            <Link
                onClick={() => clicked()}
                activeStyle={{
                    color: "#6c6c6c",
                    transition: "color, 350ms, ease-in-out",
                }}
                to={`/${link}`}
            >
                {children}
            </Link>
        </li>
    )
}

NavigationItem.propTypes = {
    link: PropTypes.string,
    children: PropTypes.any,
    show: PropTypes.bool,
    clicked: PropTypes.func,
}

export default NavigationItem
