import React from "react"
import PropTypes from "prop-types"
import * as classes from "./CircleIcon.module.scss"

CircleIcon.propTypes = {
    icon: PropTypes.func,
    height: PropTypes.string,
    width: PropTypes.string,
}

function CircleIcon({ icon, height = "36px", width = "36px" }) {
    const classesArr = [classes.CircleIcon]
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
