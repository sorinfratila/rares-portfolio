import React, { useContext } from "react"
import PropTypes from "prop-types"
import MenuButton from "../../components/UI/MenuButton/MenuButton"
import "../../App.scss"

import Menu from "../../components/Navigation/Menu/Menu"
import { LayoutContext } from "../../context/LayoutContext"

const Layout = props => {
    const { mainMenuOpen, toggleMainMenu } = useContext(LayoutContext)

    const navigationItems = [
        { name: "Work", to: "" },
        { name: "About", to: "about" },
        { name: "Contact", to: "contact" },
        { name: "Media", to: "portfolio" },
    ]

    return (
        <>
            <MenuButton
                isOpen={mainMenuOpen}
                clicked={() => toggleMainMenu(!mainMenuOpen)}
            />
            <Menu
                show={mainMenuOpen}
                menuList={navigationItems}
                clicked={() => toggleMainMenu(!mainMenuOpen)}
                backdropClicked={() => toggleMainMenu(false)}
            />
            <main>{props.children}</main>
        </>
    )
}

Layout.propTypes = {
    children: PropTypes.any,
}

export default Layout
