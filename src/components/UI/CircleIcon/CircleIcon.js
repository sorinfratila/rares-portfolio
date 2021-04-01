import React from "react"
import PropTypes from "prop-types"
import * as classes from "./CircleIcon.module.scss"
import * as fade from "../../../transitions/Fade.module.scss"

CircleIcon.propTypes = {
    icon: PropTypes.func,
    height: PropTypes.string,
    width: PropTypes.string,
    show: PropTypes.bool,
}

function CircleIcon({ icon, show, height = "36px", width = "36px" }) {
    const classesArr = show
        ? [classes.CircleIcon, fade.FadeIn, fade.Reverse]
        : [classes.CircleIcon, fade.FadeIn]
    return (
        <div
            className={classesArr.join(" ")}
            style={{
                height,
                width,
            }}
        >
            {icon()}
        </div>
    )
}

export default CircleIcon
