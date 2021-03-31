import React from "react"
import PropTypes from "prop-types"
import * as classes from "./CircleIcon.module.scss"

CircleIcon.propTypes = {
    icon: PropTypes.func,
    height: PropTypes.string,
    width: PropTypes.string,
    selected: PropTypes.bool,
}

function CircleIcon({ icon, height = "36px", width = "36px", selected }) {
    const classesArr = [classes.CircleIcon]
    return (
        <div
            className={classesArr.join(" ")}
            aria-selected={selected}
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
