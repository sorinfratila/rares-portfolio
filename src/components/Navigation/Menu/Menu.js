import React, { useEffect, useState } from "react"
import PropTypes from "prop-types"
import Backdrop from "../../UI/Backdrop/Backdrop"
import NavigationItems from "../NavigationItems/NavigationItems"
import CircleIcon from "../../UI/CircleIcon/CircleIcon"
import { FaEnvelope } from "@react-icons/all-files/fa/FaEnvelope"
import { FaBehance } from "@react-icons/all-files/fa/FaBehance"
import { FaLinkedinIn } from "@react-icons/all-files/fa/FaLinkedinIn"
import { FaFacebookF } from "@react-icons/all-files/fa/FaFacebookF"
import { FaInstagram } from "@react-icons/all-files/fa/FaInstagram"

import * as classes from "./Menu.module.scss"
import * as fade from "../../../transitions/Fade.module.scss"

function Menu({ clicked, show, menuList, backdropClicked }) {
    const [showFooter, setShowFooter] = useState(true)

    useEffect(() => {
        setShowFooter(window.innerWidth > 767)
    }, [show])

    const fadeArr = show
        ? [classes.Footer, fade.FadeIn, fade.On]
        : [classes.Footer, fade.FadeIn]

    const nowYear = new Date().getFullYear()
    const iconsArr = [
        {
            link: "www.google.com",
            Icon: FaLinkedinIn,
        },
        {
            link: "www.google.dk",
            Icon: FaEnvelope,
        },
        {
            link: "www.google.it",
            Icon: FaInstagram,
        },
        {
            link: "www.google.ru",
            Icon: FaFacebookF,
        },
        {
            link: "www.google.ro",
            Icon: FaBehance,
        },
    ]

    let footer = (
        <div className={fadeArr.join(" ")}>
            &copy;{nowYear} All rights reserved
        </div>
    )

    let icons = (
        <div className={classes.Icons}>
            {iconsArr.map(({ Icon, link }) => {
                return (
                    <CircleIcon show={show} key={link} icon={() => <Icon />} />
                )
            })}
        </div>
    )

    if (!showFooter) {
        footer = null
        icons = null
    }

    return (
        <>
            <Backdrop show={show} clicked={backdropClicked}>
                {!showFooter ? (
                    <div className={classes.Right}>
                        <NavigationItems
                            items={menuList}
                            clicked={clicked}
                            show={show}
                        />
                    </div>
                ) : (
                    <>
                        <div className={classes.Left}>{footer}</div>
                        <div className={classes.Right}>
                            <NavigationItems
                                items={menuList}
                                clicked={clicked}
                                show={show}
                            />
                            {icons}
                        </div>
                    </>
                )}
            </Backdrop>
        </>
    )
}

Menu.propTypes = {
    clicked: PropTypes.func,
    show: PropTypes.bool,
    menuList: PropTypes.array,
    backdropClicked: PropTypes.func,
}

export default Menu
