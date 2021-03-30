import React, { useState } from "react"
import PropTypes from "prop-types"

const defaultContextValue = {
    mainMenuOpen: false,
    toggleMainMenu: () => {},
}

export const LayoutContext = React.createContext(defaultContextValue)

export const LayoutProvider = props => {
    const [mainMenuOpen, toggleMainMenu] = useState(false)

    return (
        <LayoutContext.Provider
            value={{
                mainMenuOpen,
                toggleMainMenu: res => toggleMainMenu(res),
            }}
        >
            {props.children}
        </LayoutContext.Provider>
    )
}

LayoutProvider.propTypes = {
    children: PropTypes.node,
}
